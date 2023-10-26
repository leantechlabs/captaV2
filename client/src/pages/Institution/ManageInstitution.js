import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Includes/Navbar';
import Sidebar from '../Includes/Sidebar';

const ManageInstitution = () => {
  const [institutions, setInstitutions] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Fetch the list of institutions from your API
    axios.get('/college/institutions')
      .then((response) => {
        setInstitutions(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const filteredInstitutions = institutions.filter((institution) =>
    institution.cname.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="bg-gray-100 g-sidenav-show">
    <div className="min-height-300 bg-primary position-absolute w-100"></div>
    {/* Include the sidebar component */}
    <Sidebar />

    <main className="main-content position-relative border-radius-lg">
      {/* Include the navbar component */}
      <Navbar />
      <div className="container-fluid py-4">
      <div className="card">
    <div className="card-body">
    <h4 className="text-uppercase text-sm">Institutions</h4>

                <div>
                  <div className="input-group">
                    <span className="input-group-text text-body">
                      <i className="fas fa-search" aria-hidden="true"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here..."
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                    />
                  </div>
                  <br />
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-12gu col-sm-12">
                    <a
                      className="btn btn-primary btn-sm mb-0 w-100"
                      href="/manage/add-institution"
                      type="button"
                    >
                      Add Institution
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Name
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                          Contact Number
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                          Email
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredInstitutions.length ? (
                        filteredInstitutions.map((institution) => (
                          <tr key={institution.id}>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">{institution.cname}</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">{institution.phone}</p>
                            </td>
                            <td>
                              <h6 className="text-xs text-secondary mb-0">{institution.email}</h6>
                            </td>
                            <td className="align-middle">
                              <a
                                href="javascript:;"
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Edit user"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td>No data</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  </div>
          </div>
          </div>
          </div>
            </main>
          </div>
  );
};

export default ManageInstitution;
