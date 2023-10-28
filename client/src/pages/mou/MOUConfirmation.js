import React, { useState } from 'react';
import Axios from 'axios';
import Layout from '../Layout/Layout';
import ScriptSection from '../Includes/ScriptSection';
import Navbar from '../Includes/Navbar';
import Sidebar from '../Includes/Sidebar';
import ApiUrls from '../Includes/corsUrls';

const MOUConfirmation = () => {
  const initialConfirmationData = {
    MOUID: '',
    ConfirmationDate: '',
    ConfirmationStatus: 'Pending',
    Comments: '',
  };

  const [confirmationData, setConfirmationData] = useState(initialConfirmationData);
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setConfirmationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    try {
      // process.env.API_SERVER check the env file
      const response = await Axios.post(ApiUrls['MouConfirm'], confirmationData);
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
          <p className="text-uppercase text-sm">MOU Confirmation</p>
          {message && (
            <div className="alert alert-custom" role="alert">
              <span>{message}</span>
            </div>
          )}
          <div className="form-group">
            <label htmlFor="MOUID" className="form-control-label">MOU ID:</label>
            <select
              className="form-control"
              type="text"
              id="MOUID"
              name="MOUID"
              placeholder='Select'
              value={confirmationData.MOUID}
              onChange={handleInputChange}
            >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          </div>
          <div className="form-group">
            <label htmlFor="ConfirmationDate" className="form-control-label">Confirmation Date:</label>
            <input
              className="form-control"
              type="text"
              id="ConfirmationDate"
              name="ConfirmationDate"
              value={confirmationData.ConfirmationDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ConfirmationStatus" className="form-control-label">Confirmation Status:</label>
            <select
              className="form-control"
              id="ConfirmationStatus"
              name="ConfirmationStatus"
              value={confirmationData.ConfirmationStatus}
              onChange={handleInputChange}
            >
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Comments" className="form-control-label">Comments:</label>
            <textarea
              className="form-control"
              id="Comments"
              name="Comments"
              value={confirmationData.Comments}
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-primary btn-sm ms-auto" onClick={handleSubmit}>Submit</button>
          </div>
          </div>
          </div>
            </main>
          </div>
          
  );
};

export default MOUConfirmation;
