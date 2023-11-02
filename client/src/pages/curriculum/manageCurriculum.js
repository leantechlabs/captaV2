import React, { useEffect, useState } from 'react';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';
import ApiUrls from '../Includes/corsUrls';

const CurriculumManage = () => {
  const [curriculumItems, setCurriculumItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEdit = (curriculumID) => {
    console.log(`Editing Curriculum with ID ${curriculumID}`);
  };

  useEffect(() => {
    fetch(ApiUrls['ManageCurriculum'], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCurriculumItems(data);
      })
      .catch((error) => {
        console.error('Error fetching curriculum details: ', error);
      });
  }, []);

  const filteredCurriculumItems = curriculumItems.filter((item) =>
    item.CurriculumName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 g-sidenav-show">
      <div className="min-height-300 bg-primary position-absolute w-100"></div>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg">
        <Navbar />
        <div className="container-fluid py-4">
          <div className="card">
            <div className="card-body">
              <p className="text-uppercase text-sm">Curriculum Management</p>
              <div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Curriculum by Name"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Curriculum ID</th>
                      <th>Curriculum Name</th>
                      <th>Total Hours</th>
                      <th>Total Days</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCurriculumItems.map((item) => (
                      <tr key={item._id}>
                        <td>{item._id.substr(0, 7)}</td>
                        <td>{item.CurriculumName}</td>
                        <td>{item.TotalHours}</td>
                        <td>{item.TotalDays}</td>
                        <td>
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => handleEdit(item.CurriculumID)}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
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

export default CurriculumManage;
