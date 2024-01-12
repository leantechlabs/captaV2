import React, { useState, useEffect } from 'react';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';
import { FaUserEdit } from 'react-icons/fa';
import ApiUrls from '../Includes/corsUrls';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';


const ManageCurriculum= () => {
  const [Curriculum, setCurriculum] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const navigate = useNavigate();
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleEditClick = (user) => {

  };

  useEffect(() => {
    fetch(ApiUrls['ManageCurriculum'], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // You can include any necessary data in the request body if needed
    })
      .then((response) => response.json())
      .then((data) => {
        setCurriculum(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);
  const handleEdit = (data) => {
    // navigate(`/college/edit?ins=${data}`);
  };

  const handleDelete = (mouID) => {
    // console.log(`Deleting MOU with ID ${mouID}`);
  };

  const handleManage = (mouID) => {
    // console.log(`Managing MOU with ID ${mouID}`);
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
              <p className="text-uppercase text-sm">Manage Curriculum</p>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Curriculum"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Curriculum Name</th>
                    <th>Total Hours</th>
                    <th>Total Days</th>
                   
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Curriculum
                    .filter(
                      (user) =>
                      (user.CurriculumName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
               user.TotalDays?.toString().toLowerCase().includes(searchTerm.toLowerCase())) ||
              typeof user.TotalHours === 'string' 

                    )
                    .map((user) => (
                      <tr key={user._id}>
                        <td>{user.CurriculumName}</td>
                        <td>{user.TotalHours}</td>
                        <td>
                          {user.TotalDays}
                        </td>
                       
                        <td>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                              <i className="fas fa-ellipsis"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              {/* <Dropdown.Item onClick={() => handleEdit(user.email)}>
                                Edit
                              </Dropdown.Item> */}
                              <Dropdown.Item onClick={() => handleDelete(user.email)}>
                                Delete
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {selectedUser && (
                <div>
                  <p>Selected User: {selectedUser.collegeName}</p>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th>collegeName:</th>
                        <td>{selectedUser.collegeName}</td>
                      </tr>
                      <tr>
                        <th>Email:</th>
                        <td>{selectedUser.email}</td>
                      </tr>
                      <tr>
                        <th>User ID:</th>
                        <td>{selectedUser.userId}</td>
                      </tr>
                      <tr>
                        <th>Phone Number:</th>
                        <td>{selectedUser.phoneNumber}</td>
                      </tr>
                      <tr>
                        <th>eamcetCode:</th>
                        <td>
                          {selectedUser.eamcetCode}
                        </td>
                      </tr>
                      <tr>
                        <th>Actions:</th>
                        <td>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                              <i className="fas fa-ellipsis"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              {/* <Dropdown.Item onClick={() => handleEdit(selectedUser.email)}>
                                Edit
                              </Dropdown.Item> */}
                              <Dropdown.Item onClick={() => handleDelete(selectedUser.email)}>
                                Delete
                              </Dropdown.Item>
                             
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ManageCurriculum;
