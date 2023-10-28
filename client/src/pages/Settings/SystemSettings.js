import React, { useState } from 'react';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';
import Layout from '../Layout/Layout';

const SystemSettings = () => {
  const [newLogo, setNewLogo] = useState(null);
  const [smtp, setSmtp] = useState('');
  const [smtpPassword, setSmtpPassword] = useState('');
  const [domainName, setDomainName] = useState('');
  const [siteName, setSiteName] = useState('');

  const [permissions, setPermissions] = useState({
    userManagement: { admin: true, moderator: true, trainer: false },
    moderatorManagement: { admin: true, moderator: false, trainer: false },
    trainerManagement: { admin: true, moderator: true, trainer: false },
    collegeManagement: { admin: true, moderator: false, trainer: false },
    mouManagement: { admin: true, moderator: true, trainer: false },
    trainingModuleManagement: { admin: true, moderator: true, trainer: false },
    curriculumManagement: { admin: true, moderator: true, trainer: false },
    batchManagement: { admin: true, moderator: true, trainer: false },
    sessionManagement: { admin: true, moderator: true, trainer: true },
    reportManagement: { admin: true, moderator: true, trainer: true },
    studentManagement: { admin: true, moderator: true, trainer: false },
    trainerAllocationManagement: { admin: true, moderator: true, trainer: false },
    markAttendance: { admin: true, moderator: false, trainer: true },
    submitSessionReports: { admin: true, moderator: false, trainer: true },
  });

  const handleLogoChange = (e) => {
    const logoFile = e.target.files[0];
    setNewLogo(logoFile);
  };

  const handleSaveSettings = () => {
    // Handle saving the settings, including logo, SMTP, SMTP password, domain name, and site name
    console.log('New Logo:', newLogo);
    console.log('SMTP:', smtp);
    console.log('SMTP Password:', smtpPassword);
    console.log('Domain Name:', domainName);
    console.log('Site Name:', siteName);
  };

  const handlePermissionChange = (feature, role) => {
    const updatedPermissions = { ...permissions };
    updatedPermissions[feature][role] = !updatedPermissions[feature][role];
    setPermissions(updatedPermissions);
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
                    <p className="text-uppercase text-sm">System Settings</p>
                    <div className="form-group">
                      <label className="form-control-label">Change Logo</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">SMTP</label>
                      <input
                        type="text"
                        className="form-control"
                        value={smtp}
                        onChange={(e) => setSmtp(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">SMTP Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={smtpPassword}
                        onChange={(e) => setSmtpPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">Domain Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={domainName}
                        onChange={(e) => setDomainName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">Site Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={siteName}
                        onChange={(e) => setSiteName(e.target.value)}
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
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <p className="text-uppercase text-sm">User Roles & Permissions</p>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Permission</th>
                          <th>Admin</th>
                          <th>Moderator</th>
                          <th>Trainer</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.keys(permissions).map((feature, index) => (
                          <tr key={index}>
                            <td>{feature}</td>
                            <td>
                              <input
                                type="checkbox"
                                checked={permissions[feature].admin}
                                onChange={() => handlePermissionChange(feature, 'admin')}
                              />
                            </td>
                            <td>
                              <input
                                type="checkbox"
                                checked={permissions[feature].moderator}
                                onChange={() => handlePermissionChange(feature, 'moderator')}
                              />
                            </td>
                            <td>
                              <input
                                type="checkbox"
                                checked={permissions[feature].trainer}
                                onChange={() => handlePermissionChange(feature, 'trainer')}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <br></br>
                      <button
                      className="btn btn-primary"
                      onClick={handleSaveSettings}
                    >
                    Update Permissions
                    </button>
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

export default SystemSettings;
