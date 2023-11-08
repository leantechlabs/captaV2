import React, { useState, useEffect } from 'react';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';
import { FaUserEdit } from 'react-icons/fa';
import ApiUrls from '../Includes/corsUrls';

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleEditClick = (user) => {
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
                        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        user.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase())
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
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => handleEditClick(user)}
                          >
                            <FaUserEdit />
                          </button>
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
                          <button
                            className="btn btn-primary edit-button"
                            onClick={() => handleEditClick(selectedUser)}
                          >
                            Update
                          </button>
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
