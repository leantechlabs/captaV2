import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = () => {
  const [showUsersSubmenu, setShowUsersSubmenu] = useState(false);
  const [showInstitutionSubmenu, setShowInstitutionSubmenu] = useState(false);
  const [showModuleSubmenu, setShowModuleSubmenu] = useState(false);

  const toggleUsersSubmenu = () => {
    setShowUsersSubmenu(!showUsersSubmenu);
  };

  const toggleInstitutionSubmenu = () => {
    setShowInstitutionSubmenu(!showInstitutionSubmenu);
  };

  const toggleModuleSubmenu = () => {
    setShowModuleSubmenu(!showModuleSubmenu);
  };

  return (
    <div className="container">
      <div className="img-container">
        <img src="/img/logo.png" className="navbar-brand-img" alt="main_logo" />
      </div>
      <div className="dashboard-header">
        <h5 style={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '24px' }}>Dashboard</h5>
      </div>
      <div className="menu">
        <div onClick={toggleUsersSubmenu}>
          <i className="fas fa-users"></i> Users
        </div>
        {showUsersSubmenu && (
          <div className="submenu">
            <div>
              <i className="fas fa-user-plus"></i> <a href="/manage/add-user">Add Users</a>
            </div>
            <div>
              <i className="fas fa-users"></i> <a href="/manage/manage-users">Manage Users</a>
            </div>
          </div>
        )}
        <div onClick={toggleInstitutionSubmenu}>
          <i className="fas fa-building"></i> Institution
        </div>
        {showInstitutionSubmenu && (
          <div className="submenu">
            <div>
              <i className="fas fa-building"></i> <a href="/manage/add-institution">Add Institution</a>
            </div>
            <div>
              <i className="fas fa-university"></i> <a href="/manage/manage-institution">Manage Institution</a>
            </div>
          </div>
        )}
        <div onClick={toggleModuleSubmenu}>
          <i className="fas fa-archive"></i> Module
        </div>
        {showModuleSubmenu && (
          <div className="submenu">
            <div>
              <i className="fas fa-file"></i> <a href="/manage/add-curriculum">Add Curriculum</a>
            </div>
            <div>
              <i className="fas fa-cube"></i> <a href="/manage/add-module">Add Module</a>
            </div>
            <div>
              <i className="fas fa-file-alt"></i> <a href="/manage/module-confirmation-sheet">Module Confirmation Sheet</a>
            </div>
            <div>
              <i className="fas fa-id-badge"></i> <a href="/trainer/day-work">DSTS</a>
            </div>
          </div>
        )}
      </div>
      <div className="signout">
        <button onClick={() => window.location.href = "/"}>Signout</button>
      </div>

    </div>
  );
};

export default Sidebar;
