import React, { useEffect, useState } from 'react';
import Navbar from '../Includes/Navbar';
import Sidebar from '../Includes/Sidebar';
import ApiUrls from '../Includes/corsUrls';

const ManageBatch = () => {
  const [batchData , setBatchData] = useState([]);

  const [searchValue, setSearchValue] = useState('');


  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  

  const batchDetails = batchData.filter((batch) => {
    const searchTerm = searchValue.toLowerCase();
    const nameMatch = batch.BatchName.toLowerCase().includes(searchTerm);
    const trainerMatch = batch.TrainerID.toString().includes(searchTerm);
  
    // If either the batch name or trainer ID matches the search criteria, include the batch in the results
    return nameMatch || trainerMatch;
  });
  

  const handleView = (moduleID) => {
    // View Logic
    console.log(`Viewing Module with ID ${moduleID}`);
  };

  const handleDelete = (moduleID) => {
    // Delete Logic
    console.log(`Deleting Module with ID ${moduleID}`);
  };

  const handleEdit = (moduleID) => {
    // Edit Logic
    console.log(`Editing Module with ID ${moduleID}`);
  };

  useEffect(() => {
    fetch(ApiUrls['manageBatch'] , {
      method : 'POST' , 
      headers : {
        'Content-Type'  :'application/json',
      }
    })
    .then((response) => response.json())
    .then( (data) => {
      setBatchData(data);
    })
    .catch((error) => {
      console.error('Error fetching batches : ', error);
    })
  } , [])

  // Define a function to format the date
  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
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
              <p className="text-uppercase text-sm">Batch Management</p>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Batch Name or Trainer ID"
                  value={searchValue}
                  onChange={handleSearch}
                />
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Batch Name</th>
                      <th>Trainer ID</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {batchDetails.map((batch) => (
                      <tr key={batch.BatchID}>
                        <td>{batch.BatchName}</td>
                        <td>{batch.TrainerID}</td>
                        <td>{formatDate(batch.StartDate)}</td>
                        <td>{formatDate(batch.EndDate)}</td>
                        <td>{batch.Status}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => handleView(batch.BatchID)}
                          >
                            View
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(batch.BatchID)}
                          >
                            Delete
                          </button>
                          <button
                            className="btn btn-success"
                            onClick={() => handleEdit(batch.BatchID)}
                          >
                            Edit
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

export default ManageBatch;
