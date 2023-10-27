import React, { useState } from 'react';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';
import { FaUser } from 'react-icons/fa'; // Import the FaUser icon from the react-icons/fa package

const dummyUsers = [
  {
    id: 1,
    username: 'user1',
    email: 'user1@example.com',
    userId: '12345',
    phoneNumber: '123-456-7890',
    role: 'Moderator',
  },
  {
    id: 2,
    username: 'user2',
    email: 'user2@example.com',
    userId: '54321',
    phoneNumber: '987-654-3210',
    role: 'Trainer',
  },
  // Replace with data from an API request
];

const ManageUser = () => {
  const [users, setUsers] = useState(dummyUsers);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleEditClick = (user) => {
    // Handle edit action here
    // You can open a modal or navigate to an edit page
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-12 ms-sm-auto col-lg-10 px-md-4">
          <Navbar />
          <div className="container-fluid py-4">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <p className="text-uppercase text-sm">Manage Users</p>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="user-list">
                          {users.map((user) => (
                            <li
                              key={user.id}
                              onClick={() => handleUserClick(user)}
                            >
                              <FaUser className="user-icon" /> {user.username+"  "}
                              {selectedUser === user && (
                                <button
                                  className="btn btn-primary edit-button"
                                  onClick={() => handleEditClick(selectedUser)}
                                >
                                  Edit
                                </button>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-md-6">
                        {selectedUser && (
                          <div>
                            <p>Selected User: {selectedUser.username}</p>
                            {/* Display user details in a table */}
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
                                  <td>{selectedUser.role}</td>
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
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ManageUser;
