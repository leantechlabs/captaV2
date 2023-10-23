import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import SignIn from './pages/Forms/SignIn';
import AddUser from "./pages/user/addUser";
import ManageUser from "./pages/user/Manageuser";
import MOUTable from "./pages/mou/MOUTable";
import MOUManagePage from "./pages/mou/MOUManage";
import MOUConfirmation from "./pages/mou/MOUConfirmation";


const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user/add" element={<AddUser />} />
          <Route path="/user/manage" element={<ManageUser />} />
          <Route path="/mou/create" element={<MOUTable />} />
          <Route path="/mou/confirm" element={<MOUConfirmation />} />
          <Route path="/mou/manage" element={<MOUManagePage />} />
        </Routes>
      </Router>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
