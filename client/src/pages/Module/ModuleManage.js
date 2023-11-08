import React, { useState } from 'react';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';

const ModuleManage = () => {
  const [moduleData, setModuleData] = useState([
    {
      ModuleID: 1,
      Details: 'Sample MODULE 1 Details',
    },
    {
      ModuleID: 2,
      Details: 'Sample MODULE 2 Details',
    },
    {
      ModuleID: 3,
      Details: 'Sample MODULE 3 Details',
    },
  ]);

  const [searchModuleID, setSearchModuleID] = useState('');

  const moduleDetails = searchModuleID
    ? moduleData.filter((module) => module.ModuleID === parseInt(searchModuleID))
    : moduleData;

  const handleEdit = (ModuleID) => {
    console.log(`Editing Module with ID ${ModuleID}`);
  };

  const handleDelete = (ModuleID) => {
    console.log(`Deleting Module with ID ${ModuleID}`);
  };

  const handleManage = (ModuleID) => {
    console.log(`Managing Module with ID ${ModuleID}`);
  };

  const handleSearch = (e) => {
    setSearchModuleID(e.target.value);
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
              <p className="text-uppercase text-sm">Module Management</p>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Module ID"
                  value={searchModuleID}
                  onChange={handleSearch}
                />
              </div>
              <div>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>MODULE ID</th>
                        <th>Details</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {moduleDetails.map((module) => (
                        <tr key={module.ModuleID}>
                          <td>{module.ModuleID}</td>
                          <td>{module.Details}</td>
                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={() => handleEdit(module.ModuleID)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(module.ModuleID)}
                            >
                              Delete
                            </button>
                            <button
                              className="btn btn-success"
                              onClick={() => handleManage(module.ModuleID)}
                            >
                              Manage
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
        </div>
      </main>
    </div>
  );
};

export default ModuleManage;
