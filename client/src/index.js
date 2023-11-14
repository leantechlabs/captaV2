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
import Curriculumcreate from './pages/curriculum/createCurriculum';
import CurriculumManage from './pages/curriculum/manageCurriculum';
import ModuleCurriculumCreate from './pages/curriculum/createModuleCurriculum';
import ModuleCurriculumManage from './pages/curriculum/manageModuleCurriculum';
import SessionDetails from './pages/Session/SessionDetails';
import SessionAttendance from './pages/Session/SessionAttendance';
import CurriculumReport from './pages/Report/CurricullumReport';
import CollegesReport from './pages/Report/CollegesReport';
import ModuleReport from './pages/Report/ModuleReport';
import TrainersReport from './pages/Report/TrainerReport';
import SystemSettings from './pages/Settings/SystemSettings';
import Api from './pages/Settings/Api'
import MouCreate from './pages/mou/moucreate';
import MouConfirmation from './pages/mou/MOUConfirmation';
import MouManage from './pages/mou/MOUManage';
import Register from './pages/Forms/Register';
import CreateBatch from './pages/Batch/CreateBatch';
import ManageBatch from './pages/Batch/ManageBatch';
import AllocateBatch from './pages/Batch/AllocateBatch';
import EditUser from './pages/Users/updateUsers';
import EditInstitution from './pages/Institution/EditInstitution';
const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        {/* <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} /> */}
        <Route path="/register-x123lmopq" element={<Register />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard"  element={<Dashboard />} />
          <Route path="/user/add"  element={<AddUser />} />
          <Route path="/user/manage"  element={<ManageUser />} />
          <Route path="/mou/create"  element={<MouCreate />} />
          <Route path="/mou/confirm"  element={<MouConfirmation />} />
          <Route path="/mou/manage"  element={<MouManage />} />
          <Route path="/college/add"  element={<AddInstitution />} />
          <Route path="/college/manage"  element={<ManageInstitution />} />
          <Route path="/module/confirmation/create"  element={<ModuleConfirmationSheet />} />
          <Route path="/module/confirmation/manage"  element={<ModuleManage />} />
          <Route path='/curriculum/create'  element={<Curriculumcreate />} />
          <Route path='/curriculum/manage'  element={<CurriculumManage />} />
          <Route path='/module/create'  element={<ModuleCurriculumCreate />} />
          <Route path='/module/manage'  element={<ModuleCurriculumManage />} />
          <Route path="/module/status"  element={<ModuleConfirmation />} />
          <Route path="/session/details"  element={<SessionDetails />} />
          <Route path="/session/attendance"  element={<SessionAttendance />} />
          <Route path="/report/curriculum"  element={<CurriculumReport />} />
          <Route path="/report/colleges"  element={<CollegesReport />} />
          <Route path="/report/module"  element={<ModuleReport />} />
          <Route path="/report/trainer"  element={<TrainersReport />} />
          <Route path="/settings/system-set"  element={<SystemSettings />} />
          <Route path="/settings/api"  element={<Api />} />
          <Route path="/user/edit"  element={<EditUser />}  />
          <Route path="/college/edit"  element={<EditInstitution />}  />
          {/* <Route path="/report/session" element={<SessionReport />} /> */}
          <Route path='/batch/create'  element={<CreateBatch />} />
          <Route path='/batch/manage'  element={<ManageBatch />} />
          <Route path='/batch/allocate'  element={<AllocateBatch />} />
        </Routes>
      </Router>
       {/* update */}
    </div>
  );
}

root.render(
  <PermissionsProvider>
    <Layout />
    <App />
    <ScriptSection />
  </PermissionsProvider>
);


