import React, { useState, useEffect } from 'react';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';
import { FaUserEdit } from 'react-icons/fa';
import ApiUrls from '../Includes/corsUrls';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
const ManageUser = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    fetch(ApiUrls['ManageUser'], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // You can include any necessary data in the request body if needed
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleEdit = (data) => {
    navigate(`/user/edit?email=${data}`);
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
              <p className="text-uppercase text-sm">Manage Users</p>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Users"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Phone Number</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users
                    .filter(
                      (user) =>
                      user.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      user.role?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      user.phoneNumber?.toLowerCase().includes(searchTerm.toLowerCase())

                    )
                    .map((user) => (
                      <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                          {user.role === '1' ? 'Moderator' : 'Trainer'}
                        </td>
                        <td>{user.phoneNumber}</td>
                        <td>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                              <i className="fas fa-ellipsis"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => handleEdit(user.email)}>
                                Edit
                              </Dropdown.Item>
                              <Dropdown.Item onClick={() => handleDelete(user.email)}>
                                Delete
                              </Dropdown.Item>
                              <Dropdown.Item onClick={() => handleManage(user.email)}>
                                Manage
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
                  <p>Selected User: {selectedUser.username}</p>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th>Username:</th>
                        <td>{selectedUser.username}</td>
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
                        <th>Role:</th>
                        <td>
                          {selectedUser.role === '1' ? 'Moderator' : 'Trainer'}
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
                              <Dropdown.Item onClick={() => handleEdit(selectedUser.email)}>
                                Edit
                              </Dropdown.Item>
                              <Dropdown.Item onClick={() => handleDelete(selectedUser.email)}>
                                Delete
                              </Dropdown.Item>
                              <Dropdown.Item onClick={() => handleManage(selectedUser.email)}>
                                Manage
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

export default ManageUser;
