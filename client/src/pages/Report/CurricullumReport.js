import React, { useState } from 'react';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';
import Layout from '../Layout/Layout';

const CurriculumReport = () => {
 const [selectedCurriculum, setSelectedCurriculum] = useState('');
 const [selectedFormat, setSelectedFormat] = useState('pdf');

   const curriculumData = [
    { id: 1, name: 'Curriculum 1' },
    { id: 2, name: 'Curriculum 2' },
    { id: 3, name: 'Curriculum 3' },
  ];

  const handleDownloadClick = () => {
    // Handle the download logic here
    console.log('Selected Curriculum:', selectedCurriculum);
    console.log('Selected Format:', selectedFormat);
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
                    <p className="text-uppercase text-sm">Curriculum Report</p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-control-label">Select Curriculum</label>
                          <select
                            className="form-control"
                            name="curriculum"
                            value={selectedCurriculum}
                            onChange={(e) => setSelectedCurriculum(e.target.value)}
                          >
                            <option value="">Select Curriculum</option>
                            {curriculumData.map((curriculum) => (
                              <option key={curriculum.id} value={curriculum.name}>
                                {curriculum.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-control-label">Select Format</label>
                          <select
                            className="form-control"
                            name="format"
                            value={selectedFormat}
                            onChange={(e) => setSelectedFormat(e.target.value)}
                          >
                            <option value="pdf">PDF</option>
                            <option value="excel">Excel</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Curriculum Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{selectedCurriculum}</td>
                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={handleDownloadClick}
                            >
                              Download
                            </button>
                          </td>
                        </tr>
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

export default CurriculumReport;
