import React, { useState } from 'react';
import Axios from 'axios';
import DOMPurify from 'dompurify';
import { Toaster,toast} from 'sonner';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../Layout/Layout';
import ScriptSection from '../Includes/ScriptSection';
import Navbar from '../Includes/Navbar';
import Sidebar from '../Includes/Sidebar';
import ApiUrls from '../Includes/corsUrls';

const AddInstitution = () => {
  const [collegeName, setCollegeName] = useState('');
  const [eamcetCode, setEamcetCode] = useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('India');
  const [postalCode, setPostalCode] = useState('');
  const [chairmanName, setChairmanName] = useState('');
  const [chairmanEmail, setChairmanEmail] = useState('');
  const [chairmanPhoneNumber, setChairmanPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = async () => {
    // Sanitize user inputs
    const sanitizedCollegeName = DOMPurify.sanitize(collegeName).trim();
    const sanitizedeamcetCode = DOMPurify.sanitize(eamcetCode).trim();
    const sanitizedgstNumber = DOMPurify.sanitize(gstNumber).trim();
    const sanitizedpanNumber = DOMPurify.sanitize(panNumber).trim();
    const sanitizedEmail = DOMPurify.sanitize(email).trim();
    const sanitizedphoneNumber = DOMPurify.sanitize(phoneNumber).trim();
    const sanitizedaddress = DOMPurify.sanitize(address).trim();
    const sanitizedcity = DOMPurify.sanitize(city).trim();
    const sanitizedcountry = DOMPurify.sanitize(country).trim();
    const sanitizedpostalCode = DOMPurify.sanitize(postalCode).trim();
    const sanitizedchairmanName = DOMPurify.sanitize(chairmanName).trim();
    const sanitizedchairmanEmail = DOMPurify.sanitize(chairmanEmail).trim();
    const sanitizedchairmanPhoneNumber = DOMPurify.sanitize(chairmanPhoneNumber).trim();
    const sanitizedmessage = DOMPurify.sanitize(message).trim();
    
   
  //validating the input fields
  const charOnly = /^[A-Za-z ]+$/;
  const charNum= /^[a-zA-Z0-9]*$/;
  const uppercaseNum=/^[A-Z0-9]*$/;

  const nums=/^[0-9]*$/;


  const mailCheck=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/


    if (!sanitizedCollegeName || !charOnly.test(sanitizedCollegeName)) {
      toast.error('Please enter a valid college name.');
      return;
    }
    if (!sanitizedeamcetCode || !charNum.test(sanitizedeamcetCode)) {
      toast.error('Please enter a valid EAMCET code.');
      return;
    }
    if (!sanitizedgstNumber || !uppercaseNum.test(sanitizedgstNumber)) {
      toast.error('Please enter a valid GST number.');
      return;
    }

    if (!sanitizedpanNumber || !sanitizedpanNumber.match(uppercaseNum) || sanitizedpanNumber.length!=10) {
      toast.error('Please enter a valid PAN card number.');
      return;
    }
    if (!sanitizedEmail || !sanitizedEmail.match(mailCheck)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    if (!sanitizedphoneNumber || !sanitizedphoneNumber.match(nums) || sanitizedphoneNumber.length!=10) {
      toast.error('Please enter a valid Phone number');
      return;
    }
    if (!sanitizedaddress || !sanitizedaddress.length>3) {
      toast.error('Please enter a valid address.');
      return;
    }
    if (!sanitizedcity || !sanitizedcity.match(charOnly)) {
      toast.error('Please enter a valid city.');
      return;
    }
    if (!sanitizedcountry || !sanitizedcountry.match(charOnly)) {
      toast.error('Please enter a valid country.');
      return;
    }
    if (!sanitizedpostalCode || !sanitizedpostalCode.match(nums)) {
      toast.error('Please enter a valid PostalCode.');
      return;
    }
    if (!sanitizedchairmanName || !sanitizedchairmanName.match(charOnly)) {
      toast.error('Please enter a valid Chairman/TPO Name.');
      return;
    }
    if (!sanitizedchairmanEmail || !sanitizedchairmanEmail.match(mailCheck)) {
      toast.error('Please check chairman E-mail.');
      return;
    }
    if (!sanitizedchairmanPhoneNumber || !sanitizedchairmanPhoneNumber.match(nums) ||sanitizedchairmanPhoneNumber.length!=10) {
      toast.error('Please check chairman Phone number.');
      return;
    }


    // Create a data object with the college details
    const collegeData = {
      collegeName: sanitizedCollegeName,
      eamcetCode: sanitizedeamcetCode,
      gstNumber: sanitizedgstNumber,
      panNumber: sanitizedpanNumber,
      email: sanitizedEmail,
      phoneNumber: sanitizedphoneNumber,
      address: sanitizedaddress,
      city: sanitizedcity,
      country: sanitizedcountry,
      postalCode: sanitizedpostalCode,
      chairmanName: sanitizedchairmanName,
      chairmanEmail: sanitizedchairmanEmail,
      chairmanPhoneNumber: sanitizedchairmanPhoneNumber,
    };

    try {
      const response = await Axios.post(ApiUrls['addUser'], collegeData);
      console.log('Server response:', response.data);
      setMessage('Data submitted successfully');
      toast.success('Institution Added Successfully');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to submit data: ' + error.message);
    }
  };

  return (
    <div className="bg-gray-100 g-sidenav-show">
      
      <div className="min-height-300 bg-primary position-absolute w-100"></div>
      <Sidebar />
      <main className="main-content position-relative ">
        <Navbar />
        <div className="container-fluid py-4">
        
          <div className="card">
            <div className="card-body">
              <p className="text-uppercase text-sm">Institution Information</p>
              {message && (
                <div className="alert alert-custom" role="alert">
                  <span style={{ color: 'rgb(42, 170, 234)' }}>{message}</span>
                </div>
              )}
              <Toaster richColors position="top-center"/>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="collegeName" className="form-control-label">
                      Full College Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={collegeName}
                      onChange={(e) => setCollegeName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="eamcetCode" className="form-control-label">
                      EAMCET CODE
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={eamcetCode}
                      onChange={(e) => setEamcetCode(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="gstNumber" className="form-control-label">
                      GST Number
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={gstNumber}
                      onChange={(e) => setGstNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="panNumber" className="form-control-label">
                      PAN Number
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={panNumber}
                      onChange={(e) => setPanNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="email" className="form-control-label">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="phoneNumber" className="form-control-label">
                      Phone Number
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <hr className="horizontal dark" />
              <p className="text-uppercase text-sm">Additional Information</p>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="address" className="form-control-label">
                      Address
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="city" className="form-control-label">
                      City
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="country" className="form-control-label">
                      Country
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="postalCode" className="form-control-label">
                      Postal code
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <hr className="horizontal dark" />
              <p className="text-uppercase text-sm">Clients Information</p>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="chairmanName" className="form-control-label">
                      Chairman / Director / TPO Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={chairmanName}
                      onChange={(e) => setChairmanName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="chairmanEmail" className="form-control-label">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      value={chairmanEmail}
                      onChange={(e) => setChairmanEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="chairmanPhoneNumber" className="form-control-label">
                      Phone Number
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={chairmanPhoneNumber}
                      onChange={(e) => setChairmanPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button className="btn btn-primary btn-sm ms-auto" onClick={handleFormSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddInstitution;
