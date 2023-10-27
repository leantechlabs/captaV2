import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';
import ScriptSection from '../Includes/ScriptSection';
import Navbar from '../Includes/Navbar';
import Sidebar from '../Includes/Sidebar';

const ModuleManage = () => {

    // const [mouData, setMOUData] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
  
    // useEffect(() => {
    //   axios.get('/MOU/manage')
    //     .then((response) => {
    //       setMOUData(response.data);
    //       setIsLoading(false);
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //       setIsLoading(false);
    //     });
    // }, []);

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
  
  const handleEdit = (ModuleID) => {
    console.log(`Editing Module with ID ${ModuleID}`);
  };

  const handleDelete = (ModuleID) => {
    console.log(`Deleting Module with ID ${ModuleID}`);
  };

  const handleManage = (ModuleID) => {
    console.log(`Managing Module with ID ${ModuleID}`);
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
        <h4 className="text-uppercase text-sm">Module Management</h4>
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>MODULE ID</th>
            <th>Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {moduleData.map((mou) => (
            <tr key={mou.ModuleID}>
              <td>{mou.ModuleID}</td>
              <td>{mou.Details}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(mou.ModuleID)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(mou.ModuleID)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => handleManage(mou.ModuleID)}
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
            </main>
          </div>
      
  
  );
};

export default ModuleManage;
