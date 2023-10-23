import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import SignIn from './pages/Forms/SignIn';
import ScriptSection from './pages/Includes/ScriptSection';
import Layout from './pages/Layout/Layout';
import Footer from './pages/Includes/Footer'
const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <Layout/>
    <App />
    <Footer/>
    <ScriptSection/>
  </React.StrictMode>
);
