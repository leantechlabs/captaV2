import React, { useState } from 'react';
import Axios from 'axios';
import Layout from '../Layout/Layout';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';
import ApiUrls from '../Includes/corsUrls';

const ModuleCurriculumCreate = () => {
    const initialModuleCurriculumData = {
        ModuleName: '',
        TotalHours: 0,
        TotalDays: 0,
        TotalBatches: 0,
        StartDate: '',
        EndDate: '',
        Curriculum: '',
    };

  const [ModulecurriculumData, setModuleCurriculumData] = useState(initialModuleCurriculumData);
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setModuleCurriculumData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      // process.env.API_SERVER check the env file
      const response = await Axios.post(ApiUrls['createModuleCurriculum'], ModulecurriculumData);
      console.log('Server response:', response.data);
      setMessage('Data submitted successfully');
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to submit data');
    }
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
              <p className="text-uppercase text-sm">Create Module Curriculum</p>
              {message && (
                <div className="alert alert-custom" role="alert">
                  <span>{message}</span>
                </div>
              )}
              <div className="form-group">
                <label htmlFor="ModuleName" className="form-control-label">Module Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="ModuleName"
                  name="ModuleName"
                  value={ModulecurriculumData.ModuleName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="TotalHours" className="form-control-label">Total Hours:</label>
                <input
                  type="number"
                  className="form-control"
                  id="TotalHours"
                  name="TotalHours"
                  value={ModulecurriculumData.TotalHours}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="TotalDays" className="form-control-label">Total Days:</label>
                <input
                  type="number"
                  className="form-control"
                  id="TotalDays"
                  name="TotalDays"
                  value={ModulecurriculumData.TotalDays}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="TotalBatches" className="form-control-label">Total Batches:</label>
                <input
                  type="number"
                  className="form-control"
                  id="TotalBatches"
                  name="TotalBatches"
                  value={ModulecurriculumData.TotalBatches}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="StartDate" className="form-control-label">Start Date:</label>
                <input
                  type="date"
                  className="form-control"
                  id="StartDate"
                  name="StartDate"
                  value={ModulecurriculumData.StartDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="EndDate" className="form-control-label">End Date:</label>
                <input
                  type="date"
                  className="form-control"
                  id="EndDate"
                  name="EndDate"
                  value={ModulecurriculumData.EndDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Curriculum" className="form-control-label">Curriculum:</label>
                <input
                  type="text"
                  className="form-control"
                  id="Curriculum"
                  name="Curriculum"
                  value={ModulecurriculumData.Curriculum}
                  onChange={handleInputChange}
                />
              </div>
              <button className="btn btn-primary btn-sm ms-auto" onClick={handleSubmit}>Submit</button>
              </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModuleCurriculumCreate;
