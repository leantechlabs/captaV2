import React from "react";
import {Routes , Route , link , BrowserRouter as Router} from "react-router-dom"

import Dashboard from "./dash/Dashboard";
import Sidebar from "./pages/Includes/Sidebar";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          
          <Route path = "/dashboard" element = {<Dashboard />}/>
        </Routes>

      </Router> */}
      <Sidebar/>

    </div>
  );
}

export default App;
