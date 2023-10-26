import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import SignIn from './pages/Forms/SignIn';
import ScriptSection from './pages/Includes/ScriptSection';
import Layout from './pages/Layout/Layout';
import Footer from './pages/Includes/Footer'
import AddUser from './pages/Users/addUsers';
import ManageUser from './pages/Users/manageUsers';
import MOUTable from "./pages/Mou/MOUTable";
import MOUManagePage from "./pages/Mou/MOUManage";
import MOUConfirmation from "./pages/Mou/MOUConfirmation";
import AddInstitution from "./pages/Institution/AddInstitution";
import ManageInstitution from "./pages/Institution/ManageInstitution";



const root = ReactDOM.createRoot(document.getElementById('root'));
//app
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Users/Add-User" element={<AddUser/>} />
          <Route path="/Users/Manage-Users" element={<ManageUser/>} />/
          <Route path="/mou/create" element={<MOUTable />} />
          <Route path="/mou/confirm" element={<MOUConfirmation />} />
          <Route path="/mou/manage" element={<MOUManagePage />} />
          <Route path="/institution/add" element={<AddInstitution />} />
          <Route path="/institution/manage" element={<ManageInstitution />} />


        </Routes>
      </Router>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <Layout/>
    <App />
    {/* <Footer/> */}
    <ScriptSection/>
  </React.StrictMode>
);
