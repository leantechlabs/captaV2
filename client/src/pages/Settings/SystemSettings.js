import React, { useState, useEffect } from 'react';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';
import Layout from '../Layout/Layout';
import axios from 'axios';
import { Toaster,toast} from 'sonner';
import 'react-toastify/dist/ReactToastify.css'; // Add the CSS for styling toast messages
import ApiUrls from '../Includes/corsUrls';

const SystemSettings = () => {
  const [newLogo, setNewLogo] = useState(null);
  const [smtp, setSmtp] = useState('');
  const [smtpPassword, setSmtpPassword] = useState('');
  const [domainName, setDomainName] = useState('');
  const [siteName, setSiteName] = useState('');
  const [permissions, setPermissions] = useState({});
  const [page, setPage] = useState('');
  const [admin, setAdmin] = useState(false);
  const [moderator, setModerator] = useState(false);
  const [trainer, setTrainer] = useState(false);
  const [message, setMessage] = useState('');
  const [refresh, setRefresh] = useState(false); 
  const handleLogoChange = (e) => {
    const logoFile = e.target.files[0];
    setNewLogo(logoFile);
  };

  useEffect(() => {
    axios
      .get(ApiUrls['system'], { permissions })
      .then((response) => {
        setPermissions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching permissions:', error);
      });
  }, [refresh]);

  const handlePermissionChange = (page, role) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [page]: {
        ...prevPermissions[page],
        [role]: !prevPermissions[page][role],
      },
    }));
  };

  const handleSaveSettings = () => {
    axios.post(ApiUrls['system'], { permissions })
    .then((response) => {
      const successMessage = response.status;
      setMessage({ ...message, message: successMessage });
      toast.success(successMessage);
      console.log('Permissions updated successfully',response.data.message);
    })
    .catch((error) => {
      const errorMessage = error.response ? error.response.data.message : 'Error: Unable to add.';
      setMessage({ ...message, message: errorMessage });
      toast.error(errorMessage); 
      console.error('Error updating permissions:', error);
    });
  }  

  const handleAddPage = () => {
    const newPageData = { page, admin, moderator, trainer };
  
    axios
      .post('http://localhost:3001/pages', newPageData)
      .then((response) => {
        const successMessage = response.data.message;
        console.log('Page and permissions added successfully',response);
        setPage(''); 
        setAdmin(false); 
        setModerator(false);
        setTrainer(false);
        setRefresh(prev => !prev); 
        setMessage({ ...message, message: successMessage });
        toast.success(successMessage); 
      })
      .catch((error) => {
        const errorMessage = error.response ? error.response.data.message : 'Error: Unable to add.';
        console.error('Error adding page and permissions:', error);
        setMessage({ ...message, message: errorMessage });
        toast.error(errorMessage); 
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
                          {Object.keys(permissions).map((page, index) => (
                            <tr key={index}>
                              <td>{page}</td>
                              <td>
                                <input
                                  type="checkbox"
                                  checked={permissions[page].admin}
                                  onChange={() => handlePermissionChange(page, 'admin')}
                                />
                              </td>
                              <td>
                                <input
                                  type="checkbox"
                                  checked={permissions[page].moderator}
                                  onChange={() => handlePermissionChange(page, 'moderator')}
                                />
                              </td>
                              <td>
                                <input
                                  type="checkbox"
                                  checked={permissions[page].trainer}
                                  onChange={() => handlePermissionChange(page, 'trainer')}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <button
                        className="btn btn-primary"
                        onClick={handleSaveSettings}
                      >
                        Update Permissions
                      </button>
                      <p className="text-uppercase text-sm">Add New Page and Set Permissions</p>
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
                          <tr>
                            <td>
                              <input
                                type="text"
                                value={page}
                                onChange={(e) => setPage(e.target.value)}
                              />
                            </td>
                            <td>
                              <input
                                type="checkbox"
                                checked={admin}
                                onChange={() => setAdmin(!admin)}
                              />
                            </td>
                            <td>
                              <input
                                type="checkbox"
                                checked={moderator}
                                onChange={() => setModerator(!moderator)}
                              />
                            </td>
                            <td>
                              <input
                                type="checkbox"
                                checked={trainer}
                                onChange={() => setTrainer(!trainer)}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <button
                        className="btn btn-primary"
                        onClick={handleAddPage}
                      >
                        Add New Page
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

export default SystemSettings;
