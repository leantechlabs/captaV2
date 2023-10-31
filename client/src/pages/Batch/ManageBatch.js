import React, { useState } from 'react';
import Navbar from '../Includes/Navbar';
import Sidebar from '../Includes/Sidebar';

const ManageBatch = () => {
  const batchData = [
    {
      BatchID: 1,
      ModuleID: 101,
      BatchName: 'Batch A',
      Students: 20,
      TrainerID: 129738,
      Days: 20,
      StartDate: '17-05-2023',
      EndDate: '17-08-2023',
      Schedule: 'Timings, info, etc',
      Status: 'Active',
    },
    {
      BatchID: 2,
      ModuleID: 1012,
      BatchName: 'Batch B',
      Students: 20,
      TrainerID: 1239738,
      Days: 20,
      StartDate: '15-05-2023',
      EndDate: '15-08-2023',
      Schedule: 'Timings, info, etc',
      Status: 'Completed',
    },
  ];

  const [searchName, setSearchName] = useState('');

  const handleSearch = (e) => {
    setSearchName(e.target.value);
  };

  const batchDetails = batchData.filter((batch) =>
    batch.BatchName.toLowerCase().includes(searchName.toLowerCase())
  );

  const handleView = (moduleID) => {
    // View Logic
    console.log(`Viewing Module with ID ${moduleID}`);
  };

  const handleDelete = (moduleID) => {
    // Delete Logic
    console.log(`Deleting Module with ID ${moduleID}`);
  };

  const handleEdit = (moduleID) => {
    // Edit Logic
    console.log(`Editing Module with ID ${moduleID}`);
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
              <p className="text-uppercase text-sm">Batch Management</p>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Batch Name"
                  value={searchName}
                  onChange={handleSearch}
                />
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Batch Name</th>
                      <th>Trainer ID</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {batchDetails.map((batch) => (
                      <tr key={batch.BatchID}>
                        <td>{batch.BatchName}</td>
                        <td>{batch.TrainerID}</td>
                        <td>{batch.StartDate}</td>
                        <td>{batch.EndDate}</td>
                        <td>{batch.Status}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => handleView(batch.BatchID)}
                          >
                            View
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(batch.BatchID)}
                          >
                            Delete
                          </button>
                          <button
                            className="btn btn-success"
                            onClick={() => handleEdit(batch.BatchID)}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ManageBatch;
