import React, { useState } from 'react';
import Axios from 'axios';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';
import Layout from '../Layout/Layout';

const ModuleReport = () => {
  const [modulesData, setModulesData] = useState([
    { id: 1, name: 'Module 1' },
    { id: 2, name: 'Module 2' },
    { id: 3, name: 'Module 3' },
  ]);
  const [selectedModule, setSelectedModule] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('pdf');

  const handleDownload = (format) => {
    // Handle the download logic here based on the selected format
    Axios.post('api.co-ignite.in/report/download', {
      module: selectedModule,
      format,
    })
      .then((response) => {
        console.log(`Download ${format} successful:`, response.data);
        // Handle the downloaded report here
      })
      .catch((error) => {
        console.error(`Error downloading ${format} report:`, error);
      });
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
                    <p className="text-uppercase text-sm">Modules Report</p>
                    <div className="row">
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
                          <th>Module Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {modulesData.map((module) => (
                          <tr key={module.id}>
                            <td>{module.name}</td>
                            <td>
                              <button
                                className="btn btn-primary"
                                onClick={() => handleDownload(selectedFormat)}
                              >
                                Download {selectedFormat === 'pdf' ? 'PDF' : 'Excel'}
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
  );
};

export default ModuleReport;
