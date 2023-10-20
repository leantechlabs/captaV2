import React, { useEffect } from 'react';
import Layout from '../pages/Layout/Layout';
import ScriptSection from '../pages/Includes/ScriptSection';
import "../dash/dashboard.css";
import Navbar from "../pages/Includes/Navbar";
import Footer from "../pages/Includes/Footer";
import { useState } from 'react';



const Dashboard = () => {

  //Defining state variable to manage the data
  const [totalExpense , setTotalExpense] = useState(0);
  const [activeUsers  , setActiveUsers] = useState(0);
  const [newClients  , setNewClients] = useState(0);
  const [todaysModules , setTodaysModules] = useState(0);

//   useEffect(() => {
//     // Chart initialization code
//     var ctx1 = document.getElementById("chart-line").getContext("2d");
//     var gradientStroke1 = ctx1.createLinearGradient(0, 230, 0, 50);
//     gradientStroke1.addColorStop(1, 'rgba(94, 114, 228, 0.2)');
//     gradientStroke1.addColorStop(0.2, 'rgba(94, 114, 228, 0.0)');
//     gradientStroke1.addColorStop(0, 'rgba(94, 114, 228, 0)');
//     new Chart(ctx1, {
//       type: "line",
//       data: {
//         labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//         datasets: [{
//           label: "Mobile apps",
//           tension: 0.4,
//           borderWidth: 0,
//           pointRadius: 0,
//           borderColor: "#5e72e4",
//           backgroundColor: gradientStroke1,
//           borderWidth: 3,
//           fill: true,
//           data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
//           maxBarThickness: 6
//         }],
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//           legend: {
//             display: false,
//           }
//         },
//         interaction: {
//           intersect: false,
//           mode: 'index',
//         },
//         scales: {
//           y: {
//             grid: {
//               drawBorder: false,
//               display: true,
//               drawOnChartArea: true,
//               drawTicks: false,
//               borderDash: [5, 5]
//             },
//             ticks: {
//               display: true,
//               padding: 10,
//               color: '#fbfbfb',
//               font: {
//                 size: 11,
//                 family: "Open Sans",
//                 style: 'normal',
//                 lineHeight: 2
//               },
//             }
//           },
//           x: {
//             grid: {
//               drawBorder: false,
//               display: false,
//               drawOnChartArea: false,
//               drawTicks: false,
//               borderDash: [5, 5]
//             },
//             ticks: {
//               display: true,
//               color: '#ccc',
//               padding: 20,
//               font: {
//                 size: 11,
//                 family: "Open Sans",
//                 style: 'normal',
//                 lineHeight: 2
//               },
//             }
//           },
//         },
//       },
//     });
//   }, []);

  return (
    <div>
      <Layout />
      
      <div className="dashboard-container">
        <div className="dashboard-container-01">
          Hello
        </div>
        <div className='dashboard-container bg-gray-100'>
          <main className='dashboard-main-content '>
            <Navbar />
            
            <div className="dashboard-container-fluid">
              <div className="row">
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                  <div className="card">
                    <div className="card-body p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="numbers">
                            <p className="dashboard-paragraph text-sm mb-0 text-uppercase font-weight-bold">
                              Today's Total Expenses
                            </p>
                            <h5 className="font-weight-bolder">
                              {totalExpense} INR
                            </h5>
                          </div>
                        </div>
                        <div className="col-4 text-end">
                          <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                            <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-4">
                  <div className="card">
                    <div className="card-body p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="numbers">
                            <p className="dashboard-paragraph text-sm mb-0 text-uppercase font-weight-bold">
                              Today's Active Users
                            </p>
                            <h5 className="font-weight-bolder">
                              {activeUsers}
                            </h5>
                          </div>
                        </div>
                        <div className="col-4 text-end">
                          <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                            <i className="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                  <div className="card">
                    <div className="card-body p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="numbers">
                            <p className="dashboard-paragraph text-sm mb-0 text-uppercase font-weight-bold">
                              New Clients
                            </p>
                            <h5 className="font-weight-bolder">
                              +{newClients}
                            </h5>
                          </div>
                        </div>
                        <div className="col-4 text-end">
                          <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                            <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="card">
                    <div className="card-body p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="numbers">
                            <p className="dashboard-paragraph text-sm mb-0 text-uppercase font-weight-bold">
                              Today's Modules
                            </p>
                            <h5 className="font-weight-bolder">
                              {todaysModules}
                            </h5>
                          </div>
                        </div>
                        <div className="col-4 text-end">
                          <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                            <i className="ni ni-cart text-lg opacity-10" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row dashboard-container-06'>
              <div className="col-lg-5">
                <div className="card">
                  <div className="card-header dashboard-container-07">
                    <h6 className="dashboard-container-08">Active Modules Allocated</h6>
                  </div>
                  <div className="card-body">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <div className="list-group-items">
                          <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow dashboard-container-10">
                            <i className="ni ni-mobile-button dashboard-container-iicon-03"></i>
                          </div>
                          <div className="list-group-items-1">
                            <h6 className="mb-1 text-dark text-sm">AITS</h6>
                            <span className="text-xs">
                              30 Hours&nbsp;
                              <span className="font-weight-bold">Pending</span>
                              <br></br>
                              <span>3 Trainers Deployed</span>
                            </span>
                          </div>
                        </div>
                        <div className="container-for-flex">
                          <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                            <i className="ni ni-bold-right" aria-hidden="true"></i>
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <ScriptSection />
      <Footer/>
    </div>
  );
}

export default Dashboard;
