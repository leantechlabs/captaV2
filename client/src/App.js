import React from "react";
import {Routes , Route , link , BrowserRouter as Router} from "react-router-dom"

import Dashboard from "./dash/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path = "/dashboard" element = {<Dashboard />}/>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
