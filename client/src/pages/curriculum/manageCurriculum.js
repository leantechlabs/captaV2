import React,{ useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';

const CurriculumManage = () => {
  const curriculumItems = [
    {
      SNo: 1,
      CuriucllumID: '101',
      ModuleName: 'Module A',
      Topic: 'Topic 1',
      SubTopic: 'Sub-topic 1',
      Day: 1,
      Hours: 2,
      PractisePrograms: 'Program 1',
    },
    {
      SNo: 2,
      CuriucllumID: '102',
      ModuleName: 'Module B',
      Topic: 'Topic 2',
      SubTopic: 'Sub-topic 2',
      Day: 2,
      Hours: 3,
      PractisePrograms: 'Program 2',
    },
  ];

  const [selectedOption, setSelectedOption] = useState('today');
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const handleEdit = (CuriucllumID) => {
    console.log(`Editing Curriculum with ID ${CuriucllumID}`);
  };
  const handleDelete = (CuriucllumID) => {
    console.log(`Deleting Module Curriculum with ID ${CuriucllumID}`);
  };
  const handleManage = (CuriucllumID) => {
    console.log(`Managing Module with ID ${CuriucllumID}`);
  };

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
              <div className="d-flex align-items-center">
                      <label className="me-2">Select:</label>
                      <select
                        className="form-select"
                        value={selectedOption}
                        onChange={(e) => handleOptionChange(e.target.value)}
                        style={{ marginBottom: '10px' }}


                      >
                        <option value="today">Today's Sessions</option>
                        <option value="weekly">Weekly Sessions</option>
                        <option value="curriculum">Whole Curriculum</option>
                      </select>
                    </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Curriculum ID</th>
                      <th>Module Name</th>
                      <th>Topic</th>
                      <th>Sub-Topic</th>
                      <th>Day</th>
                      <th>Hours</th>
                      <th>Practical Programs</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {curriculumItems.map((item) => (
                      <tr key={item.SNo}>
                        <td className="text-center">{item.SNo}</td>
                        <td className="text-center">{item.CuriucllumID}</td>
                        <td className="text-center">{item.ModuleName}</td>
                        <td className="text-center">{item.Topic}</td>
                        <td className="text-center">{item.SubTopic}</td>
                        <td className="text-center">{item.Day}</td>
                        <td className="text-center">{item.Hours}</td>
                        <td className="text-center">{item.PractisePrograms}</td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="secondary"
                              id="dropdown-basic"
                            >
                              <i className="fas fa-ellipsis"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item
                                onClick={() => handleEdit(item.CuriucllumID)}
                              >
                                Edit
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => handleDelete(item.CuriucllumID)}
                              >
                                Delete
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => handleManage(item.CuriucllumID)}
                              >
                                Manage
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
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
