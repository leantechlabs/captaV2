import React, { useState } from 'react';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';
import Layout from '../Layout/Layout';

const ApiSettings = () => {
  const [serverApi, setServerApi] = useState('');
  const [dbUrl, setDbUrl] = useState('');
  const [dbName, setDbName] = useState('');
  const [dbPassword, setDbPassword] = useState('');

  const handleSaveSettings = () => {
    // Handle saving the settings, including Server API, Database URL, Database Name, and Database Password
    console.log('Server API:', serverApi);
    console.log('Database URL:', dbUrl);
    console.log('Database Name:', dbName);
    console.log('Database Password:', dbPassword);
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
                    <p className="text-uppercase text-sm">API Settings</p>
                    <div className="form-group">
                      <label className="form-control-label">Server API</label>
                      <input
                        type="text"
                        className="form-control"
                        value={serverApi}
                        onChange={(e) => setServerApi(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">Database URL</label>
                      <input
                        type="text"
                        className="form-control"
                        value={dbUrl}
                        onChange={(e) => setDbUrl(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">Database Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={dbName}
                        onChange={(e) => setDbName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">Database Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={dbPassword}
                        onChange={(e) => setDbPassword(e.target.value)}
                      />
                    </div>
                    <button
                      className="btn btn-primary"
                      onClick={handleSaveSettings}
                    >
                      Save Settings
                    </button>
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

export default ApiSettings;
