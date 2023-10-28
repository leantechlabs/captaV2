import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';
import Layout from '../Layout/Layout';

const CollegesReport = () => {
  const [collegesData, setCollegesData] = useState([
    { id: 1, name: 'College 1', contactNumber: '123-456-7890' },
    { id: 2, name: 'College 2', contactNumber: '987-654-3210' },
    { id: 3, name: 'College 3', contactNumber: '555-555-5555' },
  ]);
  const [selectedCollege, setSelectedCollege] = useState('');
  const [reportFormat, setReportFormat] = useState('pdf');

  const handleDownload = () => {
    // Make a request to download the report in the selected format
    Axios.post('api.co-ignite.in/report/download', {
      college: selectedCollege,
      format: reportFormat,
    })
      .then((response) => {
        console.log('Download successful:', response.data);
        // Handle the downloaded report here
      })
      .catch((error) => {
        console.error('Error downloading report:', error);
      });
  };

  return (
    <div className="bg-gray-100 g-sidenav-show">
    <div className="min-height-300 bg-primary position-absolute w-100"></div>
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
                    <p className="text-uppercase text-sm">Colleges Report</p>
                  
                    <table className="table">
                      <thead>
                        <tr>
                          <th>College Name</th>
                          <th>Contact Number</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {collegesData.map((college) => (
                          <tr key={college.id}>
                            <td>{college.name}</td>
                            <td>{college.contactNumber}</td>
                            <td>
                              <button className="btn btn-primary" onClick={handleDownload}>
                                Download
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
          </div>
        </main>
      </div>
    </div>
    </div>
  );
};

export default CollegesReport;
