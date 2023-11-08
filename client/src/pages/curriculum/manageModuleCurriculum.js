import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';
import ApiUrls from '../Includes/corsUrls';

const ModuleCurriculumManage = () => {
  const [moduleCurriculumData , setModuleCurriculumData] = useState([]); 

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
  

  useEffect(() => {
    fetch(ApiUrls['ManageModuleCurriculum'] ,{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      }
    })
    .then((response) => response.json())
    .then((data) => {
      setModuleCurriculumData(data);
    })
    .catch((error) => {
      console.error('Error fetching module details : ' , error);
    })
  } , [])

  // Define a function to format the date
  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
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
                      <tr key={module._id}>
                        <td>{module._id.substr(0,7)}</td>
                        <td>{module.ModuleName}</td>
                        <td>{module.TotalHours}</td>
                        <td>{module.TotalDays}</td>
                        <td>{module.TotalBatches}</td>
                        <td>{formatDate(module.StartDate)}</td>
                        <td>{formatDate(module.EndDate)}</td>
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
