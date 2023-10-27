import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';
import Layout from '../Layout/Layout';

const TrainersReport = () => {
  const [selectedTrainer, setSelectedTrainer] = useState('');
  const [trainerDetails, setTrainerDetails] = useState({
    username: '',
    email: '',
    userId: '',
    phoneNumber: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    resume: '',
    adhar: '',
    pan: '',
    photo: '',
    role: '',
    trainerType: '',
    skills: '',
    salary: '',
    bankAccounts: [],
  });

  const [fileToDownload, setFileToDownload] = useState(null);

  useEffect(() => {
    // Load the trainer details when a trainer is selected
    if (selectedTrainer) {
      // Replace with the API endpoint to fetch trainer details
      Axios.get(`api.co-ignite.in/trainers/${selectedTrainer}`)
        .then((response) => {
          setTrainerDetails(response.data);
        })
        .catch((error) => {
          console.error('Error fetching trainer details:', error);
        });
    }
  }, [selectedTrainer]);

  const handleDownload = (fileType) => {
    // Handle file download here
    if (fileToDownload) {
    //   // Replace with your API endpoint and logic
    //   Axios.get(`api.co-ignite.in/trainers/download/${selectedTrainer}/${fileType}`)
    //     .then((response) => {
    //       const blob = new Blob([response.data], { type: 'application/octet-stream' });
    //       const url = window.URL.createObjectURL(blob);
    //       const a = document.createElement('a');
    //       a.href = url;
    //       a.download = `${selectedTrainer}_${fileType}.pdf`;
    //       a.click();
    //       window.URL.revokeObjectURL(url);
    //     })
    //     .catch((error) => {
    //       console.error(`Error downloading ${fileType}:`, error);
    //     });
    }
  };

  const handleTrainerChange = (e) => {
    setSelectedTrainer(e.target.value);
    setFileToDownload(null); // Reset the selected file to download
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-12 ms-sm-auto col-lg-10 px-md-4">
          <Navbar />
          <div className="container-fluid py-4">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <p className="text-uppercase text-sm">Trainers Report</p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-control-label">Select Trainer</label>
                          <select
                            className="form-control"
                            name="trainer"
                            value={selectedTrainer}
                            onChange={handleTrainerChange}
                          >
                            <option value="">Select a trainer</option>
                            {/* Replace with your trainer options */}
                            <option value="trainer1">Trainer 1</option>
                            <option value="trainer2">Trainer 2</option>
                            <option value="trainer3">Trainer 3</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {selectedTrainer && (
                     <div className="row">
                     <div className="col-md-12">
                       <div className="row">
                         <div className="col-md-4">
                           <strong>Username:</strong>
                         </div>
                         <div className="col-md-8">{trainerDetails.username}</div>
                       </div>
                       <div className="row">
                         <div className="col-md-4">
                           <strong>Email:</strong>
                         </div>
                         <div className="col-md-8">{trainerDetails.email}</div>
                       </div>
                       <div className="row">
                         <div className="col-md-4">
                           <strong>User ID:</strong>
                         </div>
                         <div className="col-md-8">{trainerDetails.userId}</div>
                       </div>
                       <div className="row">
                         <div className="col-md-4">
                           <strong>Phone Number:</strong>
                         </div>
                         <div className="col-md-8">{trainerDetails.phoneNumber}</div>
                       </div>
                       <div className="row">
                         <div className="col-md-4">
                           <strong>Address:</strong>
                         </div>
                         <div className="col-md-8">{trainerDetails.address}</div>
                       </div>
                       <div className="row">
                         <div className="col-md-4">
                           <strong>City:</strong>
                         </div>
                         <div className="col-md-8">{trainerDetails.city}</div>
                       </div>
                       <div className="row">
                         <div className="col-md-4">
                           <strong>Country:</strong>
                         </div>
                         <div className="col-md-8">{trainerDetails.country}</div>
                       </div>
                       <div className="row">
                         <div className="col-md-4">
                           <strong>Postal Code:</strong>
                         </div>
                         <div className="col-md-8">{trainerDetails.postalCode}</div>
                       </div>
                       <div className="row">
                         <div className="col-md-4">
                           <strong>Role:</strong>
                         </div>
                         <div className="col-md-8">{trainerDetails.role}</div>
                       </div>
                       <div className="row">
                         <div className="col-md-4">
                           <strong>Trainer Type:</strong>
                         </div>
                         <div className="col-md-8">{trainerDetails.trainerType}</div>
                       </div>
                       <div className="row">
                         <div className="col-md-4">
                           <strong>Skills:</strong>
                         </div>
                         <div className="col-md-8">{trainerDetails.skills}</div>
                       </div>
                       <div className="row">
                         <div className="col-md-4">
                           <strong>Salary:</strong>
                         </div>
                         <div className="col-md-8">{trainerDetails.salary}</div>
                       </div>
                     </div>
                     <br></br>
                   </div>
                   
                    )}
                    {selectedTrainer && (
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="form-control-label">Select File to Download</label>
                            <select
                              className="form-control"
                              name="fileType"
                              value={fileToDownload}
                              onChange={(e) => setFileToDownload(e.target.value)}
                            >
                              <option value="">Select a file</option>
                              <option value="resume">Resume</option>
                              <option value="adhar">Adhar</option>
                              <option value="pan">PAN</option>
                              <option value="photo">Photo</option>
                            </select>
                          </div>
                          <button
                            className="btn btn-primary"
                            onClick={() => handleDownload(fileToDownload)}
                          >
                            Download {fileToDownload}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TrainersReport;
