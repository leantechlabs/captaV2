import React, { useEffect, useState } from 'react';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';
import ApiUrls from '../Includes/corsUrls';
import Axios from 'axios';

const AllocateBatch = () => {
  const [selectedBatch, setSelectedBatch] = useState(''); // Initialize as an empty string
  const [selectedModule, setSelectedModule] = useState('');
  const [sessionsPerWeek, setSessionsPerWeek] = useState(1);
  const [batchNames, setBatchNames] = useState([]); // State to store batch names
  const [trainingModule , setTrainingModule] = useState([]);
  const [message, setMessage] = useState('');

  const handleAllocate = async () => {
    try {
      const allocationData = {
        BatchName : selectedBatch,
        ModuleName : selectedModule,
        Session : sessionsPerWeek,
      };

      const response = await Axios.post(ApiUrls['allocateBatch'] , allocationData);
      console.log('server response: ', response.data);
      setMessage('Allocated Successfully');
    }catch (error){
      console.error('Error : ' , error);
      setMessage('Failed to Allocate');
    }
  };
  

  useEffect(() => {
    Axios.get(ApiUrls['batchNames'])
      .then((response) => {
        setBatchNames(response.data); // Set batch names in state
      })
      .catch((error) => {
        console.error('Error fetching batch names: ', error);
      });
  }, []);

  useEffect(() => {
    Axios.get(ApiUrls['moduleNames'])
    .then((response) => {
      setTrainingModule(response.data);
    })
    .catch((error) => {
      console.error('Error fetching module names: ', error);
    })
  } , []);

  const handleBatchChange = (event) => {
    setSelectedBatch(event.target.value); // Update selectedBatch when a batch is selected
  };
  const  handleModuleChange = (event) => {
    setSelectedModule(event.target.value);
  };





  return (
    <div className="bg-gray-100 g-sidenav-show">
      <div className="min-height-300 bg-primary position-absolute w-100"></div>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg">
        <Navbar />
        <div className="container-fluid py-4">
          <div className="card">
            <div className="card-body">
              <p className="text-uppercase text-sm">Allocate Batch</p>
              {message && (
                <div className="alert alert-custom" role="alert">
                  <span>{message}</span>
                </div>
              )}
              <div className="form-group">
                <label>Select Batch:</label>
                <select
                  className="form-control"
                  value={selectedBatch}
                  onChange={handleBatchChange}
                >
                  <option value="">Select Batch</option>
                  {batchNames.map((batch) => (
                    <option key={batch._id} value={batch.BatchName}>
                      {batch.BatchName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Select Training Module:</label>
                <select
                  className="form-control"
                  value={selectedModule}
                  onChange={handleModuleChange}
                >
                  <option value="">Select Training Module</option>
                  {trainingModule.map((module) => (
                    <option key={module._id} value={module.ModuleName}>
                      {module.ModuleName}
                    </option>
                  ))

                  }
                </select>
              </div>
              <div className="form-group">
                <label>Sessions Per Week:</label>
                <input
                  type="number"
                  className="form-control"
                  value={sessionsPerWeek}
                  onChange={(e) => setSessionsPerWeek(e.target.value)}
                />
              </div>
              <div>
                <button className="btn btn-primary" onClick={handleAllocate}>
                  Allocate Trainer
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllocateBatch;
