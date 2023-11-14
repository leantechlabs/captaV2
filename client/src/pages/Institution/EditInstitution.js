import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import DOMPurify from 'dompurify';
import { Toaster,toast} from 'sonner';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import ScriptSection from '../Includes/ScriptSection';
import { useHistory, useLocation } from 'react-router-dom';
import Navbar from '../Includes/Navbar';
import Sidebar from '../Includes/Sidebar';
import ApiUrls from '../Includes/corsUrls';

const EditInstitution = () => {
  const { id } = useParams();
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
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const CollegeEmail = queryParams.get('ins');
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
      await Axios.post(ApiUrls['UpdateInstitution'], collegeData);
      toast.success('Institution Updated Successfully');
    } catch (error) {
      console.error('Error updating institution data:', error);
      toast.error('Failed to update institution: ' + error.message);
    }
  };

  //update 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.post(ApiUrls['EditInstitution']+`?email=${CollegeEmail}`);
        const institutionData = response.data;

        // Set the state with the fetched data
        setCollegeName(institutionData.collegeName);
        setEamcetCode(institutionData.eamcetCode);
        setGstNumber(institutionData.gstNumber);
        setPanNumber(institutionData.panNumber);
        setEmail(institutionData.email);
        setPhoneNumber(institutionData.phoneNumber);
        setAddress(institutionData.address);
        setCity(institutionData.city);
        setCountry(institutionData.country);
        setPostalCode(institutionData.postalCode);
        setChairmanName(institutionData.chairmanName);
        setChairmanEmail(institutionData.chairmanEmail);
        setChairmanPhoneNumber(institutionData.chairmanPhoneNumber);
      } catch (error) {
        console.error('Error fetching institution data:', error);
      }
    };

    fetchData();
  }, [id]);


  return (
    <div className="bg-gray-100 g-sidenav-show">
      
    <div className="min-height-300 bg-primary position-absolute w-100"></div>

    <Sidebar />
    <main className="main-content position-relative border-radius-lg ">
      <Navbar />
      <div className="container-fluid py-4">
      
        <div className="card">
          <div className="card-body ">
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
                    disabled="true"
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
              Update
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
  );
};

export default EditInstitution;
