import React from "react";
// import Dashboard from "./pages/Footer";
import SignIn from "./pages/SignIn";
import AddUser from "./pages/addUser";
import ManageUser from "./pages/Manageuser";
import ModuleConfirmationSheet from "./pages/ModuleConfirmationSheet";
import MOUTable from "./pages/MOUTable";
import MOUManagePage from "./pages/MOUManage";
import MOUConfirmation from "./pages/MOUConfirmation";

// import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="App">
      <MOUTable />
      {/* <Navbar/>
      <Dashboard/> */}
    </div>
  );
}

export default App;
