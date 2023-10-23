import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../Layout/Layout';
import ScriptSection from '../Includes/ScriptSection';
import Navbar from "../Includes/Navbar";
import Footer from "../Includes/Footer";
import ModuleItem from './ModuleItem';
import TableRow  from './TableRow';
import Sidebar from '../Includes/Sidebar';
import '../../custom.css'

const Dashboard = () => {
  const moduleData = [
    {
      title: "AITS",
      hours: 30,
      status: "Pending",
      trainers: 3,
    },
    {
      title: "Rev",
      hours: 20,
      status: "Pending",
      trainers: 3,
    },
    {
      title: "C",
      hours: 30,
      status: "Pending",
      trainers: 3,
    },
    {
      title: "C",
      hours: 30,
      status: "Pending",
      trainers: 3,
    },
    

    // replace with fetch/get request 
  ];
  const tableData = [
    ["College 1", "2023-10-23", "32", <i className="ni ni-settings" aria-hidden="true"></i>],
   
  ];

    return (
      <html lang="en">
        <Layout />
        <body className="">
          <div className="bg-gray-100 g-sidenav-show">
            <div className="min-height-300 bg-primary position-absolute w-100"></div>
            {/* Include the sidebar component */}
            <Sidebar />

            <main className="main-content position-relative border-radius-lg">
              {/* Include the navbar component */}
              <Navbar />

              <div className="container-fluid py-4">
                <div className="row">
                  {moduleData.map((module, index) => (
                    <div key={index} className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                      <div className="card">
                        <div className="card-body p-3">
                          <ModuleItem {...module} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="row mt-6">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-header pb-0 p-3">
                        <h6 className="mb-0">Active Modules Allocated</h6>
                      </div>
                      <div className="card-body p-3">
                        <ul className="list-group">
                          {/* Add the table inside the list-group */}
                          <table className="table">
                            <thead>
                              <tr>
                                <th>College Name</th>
                                <th>Module Name</th>
                                <th>Hours Pending</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                            <TableRow data={tableData} paddingLeft="20px" />

                              {/* Add more table rows as needed */}
                            </tbody>
                          </table>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <Footer/> */}
              </div>
            </main>
          </div>
          <ScriptSection />
        </body>
      </html>
    );
  };


export default Dashboard;