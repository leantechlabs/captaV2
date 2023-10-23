import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './Layout';
import ScriptSection from './ScriptSection';
import Navbar from './Navbar';

const MOUManagePage = () => {

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

  const [mouData, setMOUData] = useState([
    {
      MOUID: 1,
      Details: 'Sample MOU 1 Details',
    },
    {
      MOUID: 2,
      Details: 'Sample MOU 2 Details',
    },
    {
      MOUID: 3,
      Details: 'Sample MOU 3 Details',
    },
  ]);
  
  const handleEdit = (mouID) => {
    console.log(`Editing MOU with ID ${mouID}`);
  };

  const handleDelete = (mouID) => {
    console.log(`Deleting MOU with ID ${mouID}`);
  };

  const handleManage = (mouID) => {
    console.log(`Managing MOU with ID ${mouID}`);
  };

  return (
    <div className="g-sidenav-show bg-gray-100">
    <Layout />
    <div className="min-height-300 bg-primary position-absolute w-100"></div>
    <Navbar />
    <div className="card">
      <div className="card-body">
        <h4 className="text-uppercase text-sm">MOU Management</h4>
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>MOU ID</th>
            <th>Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mouData.map((mou) => (
            <tr key={mou.MOUID}>
              <td>{mou.MOUID}</td>
              <td>{mou.Details}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(mou.MOUID)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(mou.MOUID)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => handleManage(mou.MOUID)}
                >
                  Manage
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ScriptSection />

    </div>
    </div>
      </div>
    </div>
  );
};

export default MOUManagePage;
