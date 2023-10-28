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
import MOUCreate from "./pages/mou/MOUCreate";
import MOUManagePage from "./pages/mou/MOUManage";
import MOUConfirmation from "./pages/mou/MOUConfirmation";
import AddInstitution from "./pages/Institution/AddInstitution";
import ManageInstitution from "./pages/Institution/ManageInstitution";
import ModuleConfirmationSheet from './pages/Module/ModuleConfirmationsheet';
import ModuleManage from './pages/Module/ModuleManage';
import ModuleConfirmation from './pages/Module/ModuleConfirmation';
import Curriculumcreate from './pages/curriculum/createCurriculum';
import CurriculumManage from './pages/curriculum/manageCurriculum';
import ModuleCurriculumCreate from './pages/curriculum/createModuleCurriculum';
import ModuleCurriculumManage from './pages/curriculum/manageModuleCurriculum';


const root = ReactDOM.createRoot(document.getElementById('root'));
//app
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user/add" element={<AddUser/>} />
          <Route path="/user/manage" element={<ManageUser/>} />/
          <Route path="/mou/create" element={<MOUCreate />} />
          <Route path="/mou/confirm" element={<MOUConfirmation />} />
          <Route path="/mou/manage" element={<MOUManagePage />} />
          <Route path="/college/add" element={<AddInstitution />} />
          <Route path="/college/manage" element={<ManageInstitution />} />
          <Route path='/module/confirmation/create' element = {<ModuleConfirmationSheet />} />
          <Route path='/module/confirmation/manage' element = {<ModuleManage />} />
          <Route path='/module/status' element = {<ModuleConfirmation />} />
          <Route path='/curriculum/create' element = {<Curriculumcreate />} />
          <Route path='/curriculum/manage' element = {<CurriculumManage />} />
          <Route path='/module/create' element = {<ModuleCurriculumCreate />} />
          <Route path='/module/manage' element = {<ModuleCurriculumManage />} />


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
