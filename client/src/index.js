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
import ModuleConfirmationSheet from './pages/Module/ModuleConfirmationsheet';
import ModuleManage from './pages/Module/ModuleManage';
import ModuleConfirmation from './pages/Module/ModuleConfirmation';
import SessionDetails from './pages/Session/SessionDetails';
import SessionAttendance from './pages/Session/SessionAttendance';
import CurriculumReport from './pages/Report/CurricullumReport';
import CollegesReport from './pages/Report/CollegesReport';
import ModuleReport from './pages/Report/ModuleReport';
import TrainersReport from './pages/Report/TrainerReport';
import SystemSettings from './pages/Settings/SystemSettings';
import Api from './pages/Settings/Api'
import CreateCurriculum from './pages/Training_Curriculum-module/CreateCurriculum';
import ManageCurriculum from './pages/Training_Curriculum-module/ManageCurriculum';
import Module from './pages/Training_Curriculum-module/CreateModule';
import ManageModule from './pages/Training_Curriculum-module/ManageCurriculumModule'


const root = ReactDOM.createRoot(document.getElementById('root'));
//app
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user/add" element={<AddUser />} />
          <Route path="/user/manage" element={<ManageUser />} />/
          <Route path="/mou/create" element={<MOUTable />} />
          <Route path="/mou/confirm" element={<MOUConfirmation />} />
          <Route path="/mou/manage" element={<MOUManagePage />} />
          <Route path="/college/add" element={<AddInstitution />} />
          <Route path="/college/manage" element={<ManageInstitution />} />
          <Route
            path="/module/confirmation/create"
            element={<ModuleConfirmationSheet />}
          />
          <Route
            path="/module/confirmation/manage"
            element={<ModuleManage />}
          />
          <Route path="/module/status" element={<ModuleConfirmation />} />
          <Route path='/curriculum/create' element={<CreateCurriculum/>}/>
          <Route path='/curriculum/manage' element={<ManageCurriculum/>}/>
          <Route path='/module/manage' element={<ManageModule/>}/>
          <Route path='/module/create' element={<Module/>}/>
          <Route path="/session/details" element={<SessionDetails />} />
          <Route path="/session/attendance" element={<SessionAttendance />} />
          <Route path="/report/curriculum" element={<CurriculumReport />} />
          <Route path="/report/colleges" element={<CollegesReport />} />
          <Route path="/report/module" element={<ModuleReport />} />
          <Route path="/report/trainer" element={<TrainersReport />} />
          <Route path="/settings/system-set" element={<SystemSettings />} />
          <Route path="/settings/api" element={<Api />} />
          {/* <Route path="/report/session" element={<SessionReport />} /> */}
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
