import React, {useState, useContext,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PermissionsContext } from '../context/permissionsContext';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { permissions, fetchPermissions, setIsFolderClicked } = useContext(PermissionsContext);
  // const { permissions, fetchPermissions } = permissionsContext;
  // const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    fetchPermissions()
  }, []);

  const toggleSidebar = (event) => {
    const openSubmenu = document.querySelector(".collapse.show");
  
    // Check if the clicked element is a nav-link or nav-item
    const isNavLinkClicked = event.target.classList.contains("nav-link");
    const isNavItemClicked = event.target.classList.contains("nav-item");
  
    if (!openSubmenu && !isNavLinkClicked && !isNavItemClicked) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const toggleSubmenu = (submenuId) => {
    const submenu = document.querySelector(submenuId);
    if (submenu) {
      const isCurrentSubmenuOpen = submenu.classList.contains("nav-link");
      const allSubmenus = document.querySelectorAll(".collapse");
      
      // Close all submenus
      allSubmenus.forEach((item) => {
        if (item.id !== submenuId) {
          item.classList.remove("show");
        }
      });
  
      // Toggle the current submenu
      submenu.classList.toggle("show");
  
      // If it's a new submenu, collapse the sidebar
      if (!isCurrentSubmenuOpen) {
        setIsSidebarOpen(false);
      }
    }
  };

  const hasPermission = (page) => {
    if (page) {
      const permissionExists = permissions.includes(page);
      return permissionExists;
    }
    return false;
  };
  const hasFolderPermission = (folderPages) => {
    const folderPermissionExists = folderPages.some(page => hasPermission(page));
    return folderPermissionExists;
  };
  

  return (
    
    <aside
      className={`sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-1 ${
        isSidebarOpen ? "show" : "show"
      }`}
      id="sidenav-main"
    >
      <div className="sidenav">
        <i
          className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
          onClick={toggleSidebar}
        ></i>
        <Link to="#" className="navbar-brand mx-4" target="_blank">
          <img
            src="/img/logo.png"
            className="navbar-brand-img h-100"
            alt="main_logo"
          />
          <span className="ms-1 font-weight-bold"></span>
        </Link>
      </div>
      <hr className="horizontal dark mt-1" />
      <div
        className="  w-auto"
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          <li className="nav-item mt-3">
            <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6"></h6>
          </li>
          {hasPermission('/dashboard') && (
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link active" onClick={() => setIsFolderClicked(false)}>
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </Link>
            </li>
          )}
            {hasFolderPermission(['/user/add', '/user/manage']) && (
             <li className="nav-item">
            <Link
              className="nav-link"
              onClick={(event) =>{
                event.preventDefault();  
                setIsFolderClicked(true);
                toggleSubmenu("#usersSubmenu")}}
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-single-02 text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Users</span>
              <i className="fas fa-caret-down ms-auto"></i>
            </Link>
            <div className="c" id="usersSubmenu">
              <ul className="navbar-nav">
              {hasPermission('/user/add') && (

                <li className="nav-item">
                  <Link to="/user/add" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">Add Users</span>
                  </Link>
                </li>
                )}
                {hasPermission('/user/manage') && (

                <li className="nav-item">
                  <Link to="/user/manage" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">Manage Users</span>
                  </Link>
                </li>
                )}
              </ul>
            </div>
          </li>
          )}
            {hasFolderPermission(['/college/add', '/college/manage']) && (
          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={(event) =>{
                event.preventDefault();  
                setIsFolderClicked(true);toggleSubmenu("#institutionSubmenu")}}
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-building text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Institution</span>
              <i className="fas fa-caret-down ms-auto"></i>
            </Link>
            <div className="c" id="institutionSubmenu">
              <ul className="navbar-nav">
              {hasPermission('/college/add') && (

                <li className="nav-item">
                  <Link to="/college/add" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">Add Institution</span>
                  </Link>
                </li>
                )}
                {hasPermission('/college/manage') && (

                <li className="nav-item">
                  <Link to="/college/manage" className="nav-link">
                    <span className="nav-link-text ms-3">
                      Manage Institution
                    </span>
                  </Link>
                </li>
                )}
              </ul>
            </div>
          </li>   
           )}
 
           {hasFolderPermission(['/mou/create', '/mou/confirm','/mou/manage']) && (

          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={(event) =>{
                event.preventDefault();  
                setIsFolderClicked(true);toggleSubmenu("#mouSubmenu")}}
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-paper-diploma text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">MOU</span>
              <i className="fas fa-caret-down ms-auto"></i>
            </Link>
            <div className="c" id="mouSubmenu">
              <ul className="navbar-nav">
              {hasPermission('/mou/create') && (

                <li className="nav-item">
                  <Link to="/mou/create" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">MOU Create</span>
                  </Link>
                </li>
                )}
                {hasPermission('/mou/confirm') && (

                <li className="nav-item">
                  <Link to="/mou/confirm" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">MOU Confirmation</span>
                  </Link>
                </li>
                )}
                {hasPermission('/mou/manage') && (

                <li className="nav-item">
                  <Link to="/mou/manage" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">MOU Manage</span>
                  </Link>
                </li>
                )}
              </ul>
            </div>
          </li>
          )}

          {hasFolderPermission(['/curriculum/create','/module/create','/module/manage', '/curriculum/manage']) && (

          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={(event) =>{
                event.preventDefault();  
                setIsFolderClicked(true); toggleSubmenu("#TrainingSubmenu")}}
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-hat-3 text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Training Curriculum</span>
              <i className="fas fa-caret-down ms-auto"></i>
            </Link>
            <div className="c" id="TrainingSubmenu">
              <ul className="navbar-nav">
              {hasPermission('/curriculum/create') && (
                <li className="nav-item">
                  <Link to="/curriculum/create" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">Create Curriculum</span>
                  </Link>
                </li>
                )}
                {hasPermission('/curriculum/manage') && (

                <li className="nav-item">
                  <Link to="/curriculum/manage" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">Manage Curriculum</span>
                  </Link>
                </li>
                )}
                {hasPermission('/module/create') && (

                <li className="nav-item">
                  <Link to="/module/create" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">Create Module</span>
                  </Link>
                </li>
                )}
                {hasPermission('/module/manage') && (
                <li className="nav-item">
                  <Link to="/module/manage" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">Manage Module</span>
                  </Link>
                </li>
                )}
                </ul>
            </div>
          </li>
          )}

          {hasFolderPermission(['/module/confirmation/create', '/module/confirmation/manage','/module/status']) && (

          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={(event) =>{
                event.preventDefault();  
                setIsFolderClicked(true);toggleSubmenu("#moduleSubmenu")}}
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-books text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Module Confirmation</span>
              <i className="fas fa-caret-down ms-auto"></i>
            </Link>
            <div className="c" id="moduleSubmenu">
              <ul className="navbar-nav">
              {hasPermission('/module/confirmation/create') && (

                <li className="nav-item">
                  <Link to="/module/confirmation/create" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">
                      Module Confirmation Sheet
                    </span>
                  </Link>
                </li>
                )}
                {hasPermission('/module/confirmation/manage') && (

                <li className="nav-item">
                  <Link to="/module/confirmation/manage" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">
                      Manage Module Sheet
                    </span>
                  </Link>
                </li>
                )}
                {hasPermission('/module/status') && (

                <li className="nav-item">
                  <Link to="/module/status" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">
                      Verify Module Sheet
                    </span>
                  </Link>
                </li>
                )}
              </ul>
            </div>
          </li>
          )}

          {hasFolderPermission(['/batch/create', '/batch/manage','/batch/allocate']) && (

          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={(event) =>{
                event.preventDefault();  
                setIsFolderClicked(true);toggleSubmenu("#BatchSubmenu")}}
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-building text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Batch Management</span>
              <i className="fas fa-caret-down ms-auto"></i>
            </Link>
            <div className="c" id="BatchSubmenu">
              <ul className="navbar-nav">
              {hasPermission('/batch/create') && (

                <li className="nav-item">
                  <Link to="/batch/create" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">Create Batch</span>
                  </Link>
                </li>
                )}
                {hasPermission('/batch/manage') && (

                <li className="nav-item">
                  <Link to="/batch/manage" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">Manage Batch</span>
                  </Link>
                </li>
                )}
                {hasPermission('/batch/allocate') && (

                <li className="nav-item">
                  <Link to="/batch/allocate" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">Allocate Batch</span>
                  </Link>
                </li>
                )}
              </ul>
            </div>
          </li>
          )}

          {hasFolderPermission(['/session/details', '/session/attendance','/session/report']) && (

          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={(event) =>{
                event.preventDefault();  
                setIsFolderClicked(true);toggleSubmenu("#SessionSubmenu")}}
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-ruler-pencil text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Session Management</span>
              <i className="fas fa-caret-down ms-auto"></i>
            </Link>
            <div className="c" id="SessionSubmenu">
              <ul className="navbar-nav">
              {hasPermission('/session/details') && (

                <li className="nav-item">
                  <Link to="/session/details" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">Session Details</span>
                  </Link>
                </li>
                )}
                {hasPermission('/session/attendance') && (

                <li className="nav-item">
                  <Link to="/session/attendance" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">
                      Session Attendance
                    </span>
                  </Link>
                </li>
                )}
                {hasPermission('/session/report') && (

                <li className="nav-item">
                  <Link to="/session/report" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">Session Report</span>
                  </Link>
                </li>
                )}
              </ul>
            </div>
          </li>
          )}

          {hasFolderPermission(['/report/curriculum','/report/module','/report/colleges','/report/trainer','/report/session','/report/trainer-attendance','/report/financial']) && (

          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={(event) =>{
                event.preventDefault();  
                setIsFolderClicked(true);toggleSubmenu("#ReportSubmenu")}}
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-collection text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Report Management</span>
              <i className="fas fa-caret-down ms-auto"></i>
            </Link>
            <div className="c" id="ReportSubmenu">
              <ul className="navbar-nav">
              {hasPermission('/report/curriculum') && (
                <li className="nav-item">
                  <Link to="/report/curriculum" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">
                      Curriculum Report
                    </span>
                  </Link>
                </li>
                )}
                {hasPermission('/report/colleges') && (

                <li className="nav-item">
                  <Link to="/report/colleges" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">Colleges Report</span>
                  </Link>
                </li>
                )}
                {hasPermission('/report/module') && (

                <li className="nav-item">
                  <Link to="/report/module" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">Module Report</span>
                  </Link>
                </li>
                )}
                {hasPermission('/report/trainer') && (

                <li className="nav-item">
                  <Link to="/report/trainer" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">Trainer Report</span>
                  </Link>
                </li>
                )}
                {hasPermission('/report/session') && (

                <li className="nav-item">
                  <Link to="/report/session" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">Session Report</span>
                  </Link>
                </li>
                )}
                {hasPermission('/report/trainer-attendance') && (

                <li className="nav-item">
                  <Link to="/report/trainer-attendance" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">Trainer Attendance Report</span>
                  </Link>
                </li>
                )}
                {hasPermission('/report/financial') && (

                <li className="nav-item">
                  <Link to="/report/financial" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                    <span className="nav-link-text ms-3">Financial Report</span>
                  </Link>
                </li>
                )}
              </ul>
            </div>
          </li>
          )}

          {hasFolderPermission(['/settings/system-set', '/settings/api']) && (

          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={(event) =>{
                event.preventDefault();  
                setIsFolderClicked(true);toggleSubmenu("#SettingsSubmenu")}}
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-settings text-primary text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Settings</span>
              <i className="fas fa-caret-down ms-auto"></i>
            </Link>
            <div className="c" id="SettingsSubmenu">
              <ul className="navbar-nav">
                {hasPermission('/settings/system-set') && (
                  <li className="nav-item">
                    <Link to="/settings/system-set" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                      <span className="nav-link-text ms-3">System Settings</span>
                    </Link>
                  </li>
                )}
                {hasPermission('/settings/api') && (
                  <li className="nav-item">
                    <Link to="/settings/api" className="nav-link" onClick={() => setIsFolderClicked(false)}>
                      <span className="nav-link-text ms-3">Api Settings</span>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </li>
          )}
              </ul>
            </div>
 
      <div
        className={`sidebar-collapse-button d-xl-none ${
          isSidebarOpen ? "collapsed" : ""
        }`}
        onClick={toggleSidebar}
      >
        <i className={`fas fa-caret-${isSidebarOpen ? "right" : "left"}`}></i>
      </div>
    </aside>
  );
};

export default Sidebar;
