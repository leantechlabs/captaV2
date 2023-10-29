import React, { useState, useEffect } from 'react';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';
import { FaUserEdit } from 'react-icons/fa';
import ApiUrls from '../Includes/corsUrls';

const ManageInstitution = () => {
  const [Institution, setInstitution] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInstitution, setSelectedInstitution] = useState(null);

  const handlecollegeClick = (college) => {
    setSelectedInstitution(college);
  };

  const handleEditClick = (college) => {
    // Handle edit action here
    // You can open a modal or navigate to an edit page
  };

  useEffect(() => {
    // Fetch college data from the server
    fetch(ApiUrls['ManageInstitution'], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // You can include any necessary data in the request body if needed
    })
      .then((response) => response.json())
      .then((data) => {
        setInstitution(data);
      })
      .catch((error) => {
        console.error('Error fetching college data:', error);
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
              <p className="text-uppercase text-sm">Manage Institution</p>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Institution"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>College Name</th>
                    <th>EAMCET</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Institution
                    .filter(
                      (college) =>
                        college.collegeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        college.eamcetCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        college.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        college.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((college) => (
                      <tr key={college.id}>
                        <td>{college.collegeName}</td>
                        <td>{college.eamcetCode}</td>
                        <td>{college.email}</td>
                        <td>{college.phoneNumber}</td>
                        <td>
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => handleEditClick(college)}
                          >
                            <FaUserEdit />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {selectedInstitution && (
                <div>
                  <p>Selected college: {selectedInstitution.collegename}</p>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th>collegename:</th>
                        <td>{selectedInstitution.collegename}</td>
                      </tr>
                      <tr>
                        <th>Email:</th>
                        <td>{selectedInstitution.email}</td>
                      </tr>
                      <tr>
                        <th>college ID:</th>
                        <td>{selectedInstitution.collegeId}</td>
                      </tr>
                      <tr>
                        <th>Phone Number:</th>
                        <td>{selectedInstitution.phoneNumber}</td>
                      </tr>
                      <tr>
                        <th>Role:</th>
                        <td>
                          {selectedInstitution.role === '1' ? 'Moderator' : 'Trainer'}
                        </td>
                      </tr>
                      <tr>
                        <th>Actions:</th>
                        <td>
                          <button
                            className="btn btn-primary edit-button"
                            onClick={() => handleEditClick(selectedInstitution)}
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

export default ManageInstitution;
