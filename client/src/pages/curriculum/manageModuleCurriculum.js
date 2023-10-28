import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';

const ModuleCurriculumManage = () => {
  const moduleCurriculumData = [
    {
      ModuleId: 1,
      ModuleName: 'Module A',
      TotalHours: 30,
      TotalDays: 10,
      TotalBatches: 3,
      StartDate: '2023-01-01',
      EndDate: '2023-02-28',
      Curriculum: 'Curriculum A',
    },
    {
      ModuleId: 2,
      ModuleName: 'Module B',
      TotalHours: 40,
      TotalDays: 15,
      TotalBatches: 4,
      StartDate: '2023-03-01',
      EndDate: '2023-04-30',
      Curriculum: 'Curriculum B',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredModules = moduleCurriculumData.filter((module) =>
    module.ModuleName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleEdit = (curriculumID) => {
    // Implement edit logic
    console.log(`Editing Curriculum with ID ${curriculumID}`);
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
              <p className="text-uppercase text-sm">Module Curriculum Management</p>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Module Name"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Module ID</th>
                      <th>Module Name</th>
                      <th>Total Hours</th>
                      <th>Total Days</th>
                      <th>Total Batches</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredModules.map((module) => (
                      <tr key={module.ModuleId}>
                        <td>{module.ModuleId}</td>
                        <td>{module.ModuleName}</td>
                        <td>{module.TotalHours}</td>
                        <td>{module.TotalDays}</td>
                        <td>{module.TotalBatches}</td>
                        <td>{module.StartDate}</td>
                        <td>{module.EndDate}</td>
                        <td>
                            <button
                              className="btn btn-primary btn-sm"
                              onClick={() => handleEdit(module.ModuleId)}
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

export default ModuleCurriculumManage;
