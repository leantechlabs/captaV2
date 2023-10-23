import React from 'react';
import Layout from '../Layout/Layout';
import ScriptSection from './ScriptSection';


const CurrentYear = () => {
  const currentYear = new Date().getFullYear();

  return <span>{currentYear}</span>;
};

const Dashboard = () => {
  return (
    <div className="container-fluid py-4">
        <Layout/>
      <div className="row">
        
      </div>
      <footer className="footer pt-3">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="copyright text-center text-sm text-muted text-lg-start">
                © <CurrentYear />, Developed by{' '}
                <a href="#" className="font-weight-bold" target="_blank">
                  Leantech Labs
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ScriptSection/>
    </div>
  );
};

export default Dashboard;
