import React from "react";
import Layout from "../Layout/Layout";
import Navbar from "../Includes/Navbar";
import ModuleItem from "./ModuleItem";
import TableRow from "./TableRow";
import Sidebar from "../Includes/Sidebar";
import "../../custom.css";

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
    // Replace with data from fetch/get request
  ];

  const tableData = [
    [
      "College 1",
      "2023-10-23",
      "32",
      <i className="ni ni-settings" aria-hidden="true"></i>,
    ],
    [
      "College 1",
      "2023-10-23",
      "32",
      <i className="ni ni-settings" aria-hidden="true"></i>,
    ],
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <Navbar />
          <div className="container py-4">
            <div className="row">
              {moduleData.map((module, index) => (
                <div key={index} className="col-md-3 col-sm-6 mb-4">
                  <div className="card">
                    <div className="card-body p-3">
                      <ModuleItem {...module} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container py-4">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header pb-0 p-3">
                    <h6 className="mb-0">Active Modules Allocated</h6>
                  </div>
                  <div className="card-body p-3">
                    <ul className="list-group">
                      <div className="table-responsive">
                        {" "}
                        {/* Add this div for responsiveness */}
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
                          </tbody>
                        </table>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
