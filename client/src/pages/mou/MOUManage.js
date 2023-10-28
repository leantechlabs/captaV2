import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';

const MouManage = () => {
  const [mouData, setMOUData] = useState([
    {
      MOUID: 1001,
      Details: 'Sample MOU 1 Details',
    },
    {
      MOUID: 1021,
      Details: 'Sample MOU 2 Details',
    },
    {
      MOUID: 3011,
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
    <div className="bg-gray-100 g-sidenav-show">
      <div className="min-height-300 bg-primary position-absolute w-100"></div>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg">
        <Navbar />
        <div className="container-fluid py-4">
          <div className="card">
            <div className="card-body">
              <p className="text-uppercase text-sm">MOU Management</p>

              <div className="table-responsive">
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
                          <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                              <i className="fas fa-ellipsis"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => handleEdit(mou.MOUID)}>
                                Edit
                              </Dropdown.Item>
                              <Dropdown.Item onClick={() => handleDelete(mou.MOUID)}>
                                Delete
                              </Dropdown.Item>
                              <Dropdown.Item onClick={() => handleManage(mou.MOUID)}>
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

export default MouManage;
