import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';
import ScriptSection from '../Includes/ScriptSection';
import Navbar from '../Includes/Navbar';
import Sidebar from '../Includes/Sidebar';

const ManageUser = () => {
//   const [users, setUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState('Moderator'); 
  
// this is the main api code
//   useEffect(() => 
//     axios.get(`/manage/users?role=${selectedRole}`).then((response) => {
//       setUsers(response.data);
//     });
//   }, [selectedRole]);
// to here


// this code is for temporary
  const sampleModerators = [
    { id: 1, username: 'Moderator1', email: 'moderator1@example.com' },
    { id: 2, username: 'Moderator2', email: 'moderator2@example.com' },
  ];

  const sampleTrainers = [
    { id: 1, username: 'Trainer1', email: 'trainer1@example.com' },
    { id: 2, username: 'Trainer2', email: 'trainer2@example.com' },
  ];

  const users = selectedRole === 'Moderator' ? sampleModerators : sampleTrainers;
// upto here
  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleEdit = (userId) => {
    console.log('Edit user with ID:', userId);
  };

  const handleDelete = (userId) => {
    console.log('Delete user with ID:', userId);
  };

  return (
    <html lang="en">
    <Layout />
    <body className="">
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
          <h4 className="text-uppercase text-sm">Manage Users</h4>
          <div className="form-group">
            <label htmlFor="role" className="form-control-label">
              Select Role:
            </label>
            <select
              className="form-control"
              id="role"
              name="role"
              value={selectedRole}
              onChange={handleRoleChange}
            >
              <option value="Moderator">Moderator</option>
              <option value="Trainer">Trainer</option>
            </select>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-info btn-sm"
                      onClick={() => handleEdit(user.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          </div>
          </div>
            </main>
          </div>
          <ScriptSection />
        </body>
      </html>
  );
};

export default ManageUser;
