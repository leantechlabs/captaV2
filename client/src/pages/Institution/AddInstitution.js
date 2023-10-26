import React, { useState } from 'react';
import Axios from 'axios';
import Layout from '../Layout/Layout';
import ScriptSection from '../Includes/ScriptSection';
import Navbar from '../Includes/Navbar';
import Sidebar from '../Includes/Sidebar';
import ApiUrls  from '../Includes/corsUrls';

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
    // Create a data object with the college details
    const collegeData = {
      collegeName,
      eamcetCode,
      gstNumber,
      panNumber,
      email,
      phoneNumber,
      address,
      city,
      country,
      postalCode,
      chairmanName,
      chairmanEmail,
      chairmanPhoneNumber,
    };
    try {
      // process.env.API_SERVER check the env file
      const response = await Axios.post(ApiUrls['addUser'], collegeData);
      console.log('Server response:', response.data);
      setMessage('Data submitted successfully');
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to submit data');
    }
   
  };

  return (
    <div className="bg-gray-100 g-sidenav-show">
    <div className="min-height-300 bg-primary position-absolute w-100"></div>
    {/* Include the sidebar component */}
    <Sidebar />

    <main className="main-content position-relative border-radius-lg">
      {/* Include the navbar component */}
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
