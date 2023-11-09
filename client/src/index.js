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
import ProtectedRoute from './pages/Includes/protectedroute'; 
import { PermissionsProvider } from './pages/context/permissionsContext';
import AddInstitution from "./pages/Institution/AddInstitution";
import ManageInstitution from "./pages/Institution/ManageInstitution";
import ModuleConfirmationSheet from './pages/Module/ModuleConfirmationsheet';
import ModuleManage from './pages/Module/ModuleManage';
import ModuleConfirmation from './pages/Module/ModuleConfirmation';
import Curriculumcreate from './pages/Curriculum/createCurriculum';
import CurriculumManage from './pages/Curriculum/manageCurriculum';
import ModuleCurriculumCreate from './pages/Curriculum/createCurriculum';
import ModuleCurriculumManage from './pages/Curriculum/manageModuleCurriculum';
import SessionDetails from './pages/Session/SessionDetails';
import SessionAttendance from './pages/Session/SessionAttendance';
import CurriculumReport from './pages/Report/CurricullumReport';
import CollegesReport from './pages/Report/CollegesReport';
import ModuleReport from './pages/Report/ModuleReport';
import TrainersReport from './pages/Report/TrainerReport';
import SystemSettings from './pages/Settings/SystemSettings';
import Api from './pages/Settings/Api'
import MouCreate from './pages/Mou/MOUCreate';
import MouConfirmation from './pages/Mou/MOUConfirmation';
import MouManage from './pages/Mou/MOUManage';
import Register from './pages/Forms/Register';
import CreateBatch from './pages/Batch/CreateBatch';
import ManageBatch from './pages/Batch/ManageBatch';
import AllocateBatch from './pages/Batch/AllocateBatch';
import CreateCurriculum from './pages/Training_Curriculum-module/CreateCurriculum';
import ManageCurriculum from './pages/Training_Curriculum-module/ManageCurriculum';
import Module from './pages/Training_Curriculum-module/CreateModule';
import ManageModule from './pages/Training_Curriculum-module/ManageCurriculumModule';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/register-x123lmopq" element={<Register />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/user/add" element={<ProtectedRoute element={<AddUser />} />} />
          <Route path="/user/manage" element={<ProtectedRoute element={<ManageUser />} />} />
          <Route path="/mou/create" element={<ProtectedRoute element={<MouCreate />} />} />
          <Route path="/mou/confirm" element={<ProtectedRoute element={<MouConfirmation />} />} />
          <Route path="/mou/manage" element={<ProtectedRoute element={<MouManage />} />} />
          <Route path="/college/add" element={<ProtectedRoute element={<AddInstitution />} />} />
          <Route path="/college/manage" element={<ProtectedRoute element={<ManageInstitution />} />} />
          <Route path="/module/confirmation/create" element={<ProtectedRoute element={<ModuleConfirmationSheet />} />} />
          <Route path="/module/confirmation/manage" element={<ProtectedRoute element={<ModuleManage />} />} />
          <Route path='/curriculum/create' element={<ProtectedRoute element={<Curriculumcreate />} />} />
          <Route path='/curriculum/manage' element={<ProtectedRoute element={<CurriculumManage />} />} />
          <Route path='/module/create' element={<ProtectedRoute element={<ModuleCurriculumCreate />} />} />
          <Route path='/module/manage' element={<ProtectedRoute element={<ModuleCurriculumManage />} />} />
          <Route path="/module/status" element={<ProtectedRoute element={<ModuleConfirmation />} />} />
          <Route path="/session/details" element={<ProtectedRoute element={<SessionDetails />} />} />
          <Route path="/session/attendance" element={<ProtectedRoute element={<SessionAttendance />} />} />
          <Route path="/report/curriculum" element={<ProtectedRoute element={<CurriculumReport />} />} />
          <Route path="/report/colleges" element={<ProtectedRoute element={<CollegesReport />} />} />
          <Route path="/report/module" element={<ProtectedRoute element={<ModuleReport />} />} />
          <Route path="/report/trainer" element={<ProtectedRoute element={<TrainersReport />} />} />
          <Route path="/settings/system-set" element={<ProtectedRoute element={<SystemSettings />} />} />
          <Route path="/settings/api" element={<ProtectedRoute element={<Api />} />} />
          {/* <Route path="/report/session" element={<SessionReport />} /> */}
          <Route path='/batch/create' element = {<ProtectedRoute element={<CreateBatch />} />} />
          <Route path='/batch/manage' element = {<ProtectedRoute element={<ManageBatch />} />} />
          <Route path='/batch/allocate' element = {<ProtectedRoute element={<AllocateBatch />} />} />
        </Routes>
      </Router>
      
    </div>
  );
}

root.render(
  <React.StrictMode>
   <PermissionsProvider>
    <Layout/>
    <App />
    {/* <Footer/> */}
    <ScriptSection/>
   </PermissionsProvider>
  </React.StrictMode>

);


