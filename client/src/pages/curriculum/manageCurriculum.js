import React, { useState } from 'react';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';

const CurriculumManage = () => {
  const curriculumItems = [
    {
      CurriculumID: '101',
      ModuleName: 'Module A',
      Topic: 'Topic 1',
      SubTopic: 'Sub-topic 1',
      Day: 1,
      Hours: 6,
      PracticalPrograms: 'Program 1',
    },
    {
      CurriculumID: '102',
      ModuleName: 'Module B',
      Topic: 'Topic 2',
      SubTopic: 'Sub-topic 2',
      Day: 2,
      Hours: 12,
      PracticalPrograms: 'Program 2',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
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
              <p className="text-uppercase text-sm">Curriculum Management</p>
              <div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Curriculum by Name"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Curriculum ID</th>
                      <th>Curriculum Name</th>
                      <th>Total Hours</th>
                      <th>Total Days</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {curriculumItems
                      .filter((item) =>
                        item.ModuleName.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((item) => (
                        <tr key={item.CurriculumID}>
                          <td>{item.CurriculumID}</td>
                          <td>{item.ModuleName}</td>
                          <td>{item.Hours}</td>
                          <td>{item.Day}</td>
                          <td>
                            <button
                              className="btn btn-primary btn-sm"
                              onClick={() => handleEdit(item.CurriculumID)}
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

export default CurriculumManage;
