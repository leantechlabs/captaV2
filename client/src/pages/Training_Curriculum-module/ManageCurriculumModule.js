import React, { useState } from 'react';
import Navbar from '../Includes/Navbar';
import Sidebar from '../Includes/Sidebar';

const ManageCurriculum = () => {

  const [moduleData, setModuleData] = useState([
    {
      ManageID:1,
      Module_Name: "Python",
      Start_Date: "20/10/23",
      End_Date: "28/10/23",
      Select_Curicullum: "Two",
    },
    {
        ManageID:2,
        Module_Name: "Python",
        Start_Date: "21/10/23",
        End_Date: "25/10/23",
        Select_Curicullum: "One",
      },
      {
        ManageID:3,
        Module_Name: "Python",
        Start_Date: "20/10/23",
        End_Date: "25/10/23",
        Select_Curicullum: "Two",
      },
      {
        ManageID:4,
        Module_Name: "Python",
        Start_Date: "22/10/23",
        End_Date: "23/10/23",
        Select_Curicullum: "One",
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
        <h6 className="text-uppercase text-secondary">Manage Module</h6>
          <div>
            <table className="table">
              <thead>
                <tr>
                <th>Manage ID</th>
                  <th>Module Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Selected Curicullum</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {moduleData.map((man) => (
                  <tr key={man.ManageID}>
                    <td>{man.ManageID}</td>
                    <td>{man.Module_Name}</td>
                    <td>{man.Start_Date}</td>
                    <td>{man.End_Date}</td>
                    <td>{man.Select_Curicullum}</td>
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
