import React, { useState } from 'react';
import Axios from 'axios';
import Layout from '../Layout/Layout';
import ScriptSection from '../Includes/ScriptSection';
import Navbar from '../Includes/Navbar';
import Sidebar from '../Includes/Sidebar';
import ApiUrls from '../Includes/corsUrls';


const CurriculumPage = () => {
  const initialCurriculumData = {
    CuriucllumID:'',
    ModuleName: '',
    Topic: '',
    SubTopic: '',
    Day: 1,
    Hours: 1,
    PractisePrograms: '',
  };

  const [curriculumData, setCurriculumData] = useState(initialCurriculumData);
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurriculumData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      // process.env.API_SERVER check the env file
      const response = await Axios.post(ApiUrls['createCurriculum'], curriculumData);
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
              <p className="text-uppercase text-sm">Curriculum Page</p>
              {message && (
                <div className="alert alert-custom" role="alert">
                  <span>{message}</span>
                </div>
              )}
              <div className="form-group">
                <label htmlFor="CuriucllumID" className="form-control-label">CuriucllumID:</label>
                <input
                  className="form-control"
                  type="number"
                  id="CuriucllumID"
                  name="CuriucllumID"
                  value={curriculumData.CuriucllumID}
                  onChange={handleInputChange}
                />
              </div>             
              <div className="form-group">
                <label htmlFor="ModuleName" className="form-control-label">Module Name:</label>
                <input
                  className="form-control"
                  type="text"
                  id="ModuleName"
                  name="ModuleName"
                  value={curriculumData.ModuleName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Topic" className="form-control-label">Topic:</label>
                <input
                  className="form-control"
                  type="text"
                  id="Topic"
                  name="Topic"
                  value={curriculumData.Topic}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="SubTopic" className="form-control-label">Sub-Topic:</label>
                <input
                  className="form-control"
                  type="text"
                  id="SubTopic"
                  name="SubTopic"
                  value={curriculumData.SubTopic}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Day" className="form-control-label">Day:</label>
                <input
                  className="form-control"
                  type="number"
                  id="Day"
                  name="Day"
                  value={curriculumData.Day}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Hours" className="form-control-label">Hours:</label>
                <input
                  className="form-control"
                  type="number"
                  id="Hours"
                  name="Hours"
                  value={curriculumData.Hours}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="PractisePrograms" className="form-control-label">Practical Programs:</label>
                <input
                  className="form-control"
                  type="text"
                  id="PractisePrograms"
                  name="PractisePrograms"
                  value={curriculumData.PractisePrograms}
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

export default CurriculumPage;
