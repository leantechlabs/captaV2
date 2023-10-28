import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Layout from '../Layout/Layout';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
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
//   const [moduleCurriculumData, setModuleCurriculumData] = useState([]);

//   useEffect(() => {
//     Axios.get('/')
//       .then((response) => {
//         setModuleCurriculumData(response.data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         setIsLoading(false);
//       });
//   }, []);
const [showMenu, setShowMenu] = useState(false);
const [selectedOption, setSelectedOption] = useState('today');
const handleOptionChange = (option) => {
  setSelectedOption(option);
};
  const handleEdit = (moduleId) => {
    console.log(`Editing Module Curriculum with ID ${moduleId}`);
  };

  const handleDelete = (moduleId) => {
    console.log(`Deleting Module Curriculum with ID ${moduleId}`);
  };
  const handleManage = (moduleId) => {
    console.log(`Managing Module with ID ${moduleId}`);
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
              <p className="text-uppercase text-sm">Module Curriculum Management</p>
              <div className="d-flex align-items-center">
                      <label className="me-2">Select:</label>
                      <select
                        className="form-select"
                        value={selectedOption}
                        onChange={(e) => handleOptionChange(e.target.value)}
                        style={{ marginBottom: '10px' }}


                      >
                        <option value="today">Today's Sessions</option>
                        <option value="weekly">Weekly Sessions</option>
                        <option value="curriculum">Whole Curriculum</option>
                      </select>
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
                    {moduleCurriculumData.map((module) => (
                      <tr key={module.ModuleId}>
                        <td>{module.ModuleId}</td>
                        <td>{module.ModuleName}</td>
                        <td>{module.TotalHours}</td>
                        <td>{module.TotalDays}</td>
                        <td>{module.TotalBatches}</td>
                        <td>{module.StartDate}</td>
                        <td>{module.EndDate}</td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="secondary"
                              id="dropdown-basic"
                            >
                              <i className="fas fa-ellipsis"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item
                                onClick={() => handleEdit(module.ModuleId)}
                              >
                                Edit
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => handleDelete(module.ModuleId)}
                              >
                                Delete
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => handleManage(module.ModuleId)}
                              >
                                Manage
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
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
