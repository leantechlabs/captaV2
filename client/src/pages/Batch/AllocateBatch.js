import React, { useState } from 'react';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';

const AllocateBatch = () => {
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedModule, setSelectedModule] = useState('');
  
  const [sessionsPerWeek, setSessionsPerWeek] = useState(1);

  const handleAllocate = () => {
    // Implement the logic to send the allocation data to the backend
    console.log('Allocating Trainer to Batch', selectedBatch);
    console.log('Selected Training Module:', selectedModule);
   
    console.log('Sessions Per Week:', sessionsPerWeek);
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
              <div className="form-group">
                <label>Select Batch:</label>
                <select
                  className="form-control"
                  value={selectedBatch}
                  onChange={(e) => setSelectedBatch(e.target.value)}
                >
                  <option value="">Select Batch</option>
                  {/* Populate this dropdown with available batches */}
                </select>
              </div>
              <div className="form-group">
                <label>Select Training Module:</label>
                <select
                  className="form-control"
                  value={selectedModule}
                  onChange={(e) => setSelectedModule(e.target.value)}
                >
                  <option value="">Select Training Module</option>
                  {/* Populate this dropdown with available training modules */}
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
                <button
                  className="btn btn-primary"
                  onClick={handleAllocate}
                >
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
