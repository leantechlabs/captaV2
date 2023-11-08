import React, { useState } from 'react';
import Axios from 'axios';
import Layout from '../Layout/Layout';
import ScriptSection from '../Includes/ScriptSection';
import Navbar from '../Includes/Navbar';
import Sidebar from '../Includes/Sidebar';
import ApiUrls from '../Includes/corsUrls';
import * as XLSX from 'xlsx'; // Import the xlsx library for Excel file parsing
import DOMPurify from 'dompurify';
import { Toaster,toast} from 'sonner';

const CurriculumPage = () => {
  const [curriculumData, setCurriculumData] = useState({
    CurriculumName: '',
  });
  const [message, setMessage] = useState('');
  const [excelFile, setExcelFile] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurriculumData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleExcelUpload = (event) => {
    const file = event.target.files[0];
    setExcelFile(file);
  };
  const uppercaseNum=/^[A-Z0-9]*$/;

  const handleSubmit = async () => {
    if(!curriculumData.CurriculumName || curriculumData.CurriculumName.match(uppercaseNum))
    {
      toast.error("Please enter a valid Curriculam name");
      return;
    }
    curriculumData.CurriculumName=DOMPurify.sanitize(curriculumData.CurriculumName).trim();
    try {
      // Processing the Excel file and create a dictionary
      if (excelFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const excelData = XLSX.utils.sheet_to_json(worksheet);

          // Sending the curriculum data to the server
          Axios.post(ApiUrls['createCurriculum'], {
            ...curriculumData,
            excelData,
          })
            .then((response) => {
              console.log('Server response:', response.data);
              setMessage('Data submitted successfully');
            })
            .catch((error) => {
              console.error('Error:', error);
              setMessage('Failed to submit data');
            });
        };

        reader.readAsArrayBuffer(excelFile);
      } else {
        setMessage('Please upload an Excel file.');
      }
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
              <p className="text-uppercase text-sm">Curriculum Page</p>
              {message && (
                <div className="alert alert-custom" role="alert">
                  <span>{message}</span>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="CurriculumName" className="form-control-label">
                  Curriculum Name:
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="CurriculumName"
                  name="CurriculumName"
                  value={curriculumData.CurriculumName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="ExcelFile" className="form-control-label">
                    Upload Excel File:
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    accept=".xlsx, .xls"
                    onChange={handleExcelUpload}
                  />
                </div>
              </div>
              <br>
              </br>
              <p>Download Sample Excel File: <a href="../sample_excel.xlsx">Download</a></p>
              <button
                className="btn btn-primary btn-sm ms-auto"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CurriculumPage;
