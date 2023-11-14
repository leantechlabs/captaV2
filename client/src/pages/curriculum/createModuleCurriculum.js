import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Layout from '../Layout/Layout';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';
import ApiUrls from '../Includes/corsUrls';
import { Toaster,toast} from 'sonner';
import DOMPurify from 'dompurify';
import MouConfirmation from '../mou/MOUConfirmation';

const ModuleCurriculumCreate = () => {
  const initialModuleCurriculumData = {
    ModuleName: '',
    TotalHours: 0,
    TotalDays: 0,
    TotalBatches: 0,
    StartDate: '',
    EndDate: '',
    Curriculum: '', // Updated to store the selected curriculum name
  };

  const [moduleCurriculumData, setModuleCurriculumData] = useState(initialModuleCurriculumData);
  const [message, setMessage] = useState('');
  const [curriculumNames, setCurriculumNames] = useState([]); // State to store curriculum names
  const [selectedCurriculum, setSelectedCurriculum] = useState(''); // State to store the selected curriculum name

  useEffect(() => {
    // Fetch curriculum names from the server and populate the curriculumNames state
    Axios.get(ApiUrls['fetchCurriculumNames'])
      .then((response) => {
        setCurriculumNames(response.data);
      })
      .catch((error) => {
        console.error('Error fetching curriculum names:', error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setModuleCurriculumData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCurriculumChange = (event) => {
    setSelectedCurriculum(event.target.value);
  };

  const charOnly = /^[A-Za-z ]+$/;
  const nums=/^[0-9]*$/;
  console.log(moduleCurriculumData);
  const handleSubmit = async () => {
    try {

      if(!moduleCurriculumData.ModuleName || moduleCurriculumData.ModuleName.match(charOnly))
      {
        toast.error("Please a valid Module name")
      }
      if(moduleCurriculumData.TotalHours==='0')
      {
        toast.error("Total Hours can't be zero");
        return;
      }
      if(moduleCurriculumData.TotalDays==='0')
      {
        toast.error("Total Days can't be zero");
        return;
      }
      if(moduleCurriculumData.TotalBatches==='0' )
      {
        toast.error("Total Batches can't be zero");
        return;
      }
      
      
      moduleCurriculumData.ModuleName=DOMPurify.sanitize(moduleCurriculumData.ModuleName).trim();
      moduleCurriculumData.TotalHours=DOMPurify.sanitize(moduleCurriculumData.TotalHours).trim();
      moduleCurriculumData.TotalDays=DOMPurify.sanitize(moduleCurriculumData.TotalDays).trim();
      moduleCurriculumData.TotalBatches=DOMPurify.sanitize(moduleCurriculumData.TotalBatches).trim();
      moduleCurriculumData.StartDate=DOMPurify.sanitize(moduleCurriculumData.StartDate).trim();
      moduleCurriculumData.EndDate=DOMPurify.sanitize(moduleCurriculumData.EndDate).trim();
     
      // Prepare data including the selected curriculum name
      const data = {
        ...moduleCurriculumData,
        Curriculum: selectedCurriculum,
      };

      // Send the POST request to create a module
      const response = await Axios.post(ApiUrls['createModuleCurriculum'], data);

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
      <Toaster richColors position='top-center'/>
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
                <label htmlFor="Curriculum" className="form-control-label">
                  Curriculum:
                </label>
                <select
                  className="form-control"
                  id="Curriculum"
                  name="Curriculum"
                  value={selectedCurriculum}
                  onChange={handleCurriculumChange}
                >
                  <option value="">Select Curriculum</option>
                  {curriculumNames.map((curriculum) => (
                    <option key={curriculum._id} value={curriculum.CurriculumName}>
                      {curriculum.CurriculumName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="ModuleName" className="form-control-label">
                  Module Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ModuleName"
                  name="ModuleName"
                  value={moduleCurriculumData.ModuleName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="TotalHours" className="form-control-label">
                  Total Hours:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="TotalHours"
                  name="TotalHours"
                  value={moduleCurriculumData.TotalHours}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="TotalDays" className="form-control-label">
                  Total Days:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="TotalDays"
                  name="TotalDays"
                  value={moduleCurriculumData.TotalDays}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="TotalBatches" className="form-control-label">
                  Total Batches:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="TotalBatches"
                  name="TotalBatches"
                  value={moduleCurriculumData.TotalBatches}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="StartDate" className="form-control-label">
                  Start Date:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="StartDate"
                  name="StartDate"
                  value={moduleCurriculumData.StartDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="EndDate" className="form-control-label">
                  End Date:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="EndDate"
                  name="EndDate"
                  value={moduleCurriculumData.EndDate}
                  onChange={handleInputChange}
                />
              </div>
             
              <button className="btn btn-primary btn-sm ms-auto" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModuleCurriculumCreate;
