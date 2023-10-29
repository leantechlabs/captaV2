import React, { useState } from 'react';
import Navbar from '../Includes/Navbar';
import Sidebar from '../Includes/Sidebar';

const ManageCurriculum = () => {

  const [moduleData, setManageData] = useState([
    {
      ManageID:1,
      CurriculumName: "Python",
      Total_Hours: "20",
      Total_Days: "7",
    },
    {
      ManageID:2,
      CurriculumName: "Java",
      Total_Hours: "24",
      Total_Days: "8",
    },
    {
      ManageID:3,
      CurriculumName: "JavaScript",
      Total_Hours: "30",
      Total_Days: "10",
    },
    {
      ManageID:4,
      CurriculumName: "C++",
      Total_Hours: "30",
      Total_Days: "9",
    },
  ]);
  
  const handleEdit = (ManageID) => {
    console.log(`Editing Module with ID ${ManageID}`);
  };

  const handleDelete = (ManageID) => {
    console.log(`Deleting Module with ID ${ManageID}`);
  };

  const handleView = (ManageID) => {
    console.log(`View Module with ID ${ManageID}`);
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
        <h6 className="text-uppercase text-secondary">Manage Curricullum</h6>
          <div>
            <table className="table">
              <thead>
                <tr>
                <th>Manage ID</th>
                  <th>Curriculum Name</th>
                  <th>Total Hours</th>
                  <th>Total Days</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {moduleData.map((man) => (
                  <tr key={man.ManageID}>
                    <td>{man.ManageID}</td>
                    <td>{man.CurriculumName}</td>
                    <td>{man.Total_Hours}</td>
                    <td>{man.Total_Days}</td>
                    <td>
                      <button
                        className="btn btn-primary m-1"
                        onClick={() => handleEdit(man.ManageID)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger m-1"
                        onClick={() => handleDelete(man.ManageID)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-success m-1"
                        onClick={() => handleView(man.ManageID)}
                      >
                        View
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

export default ManageCurriculum;
