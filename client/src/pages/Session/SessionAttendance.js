import React, { useState } from 'react';
import Axios from 'axios';
import { Toaster,toast} from 'sonner';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';
import ApiUrls from '../Includes/corsUrls';
import Layout from '../Layout/Layout';

const SessionAttendance = () => {
    const [message, setMessage] = useState('');
  const [batchData, setBatchData] = useState({
    batchA: {
      name: 'Batch A',
      students: [
        { id: 'student1', name: 'Student 1' },
        { id: 'student2', name: 'Student 2' },
        { id: 'student3', name: 'Student 3' },
        { id: 'student4', name: 'Student 4' },
        { id: 'student5', name: 'Student 5' },
      ],
    },
    batchB: {
      name: 'Batch B',
      students: [
        { id: 'student6', name: 'Student 6' },
        { id: 'student7', name: 'Student 7' },
      ],
    },
  });

  const [selectedBatch, setSelectedBatch] = useState('batchA');
  const [attendance, setAttendance] = useState({});
  const [confirmationDialog, setConfirmationDialog] = useState(false);

  const handleBatchChange = (e) => {
    setSelectedBatch(e.target.value);
  };

  const handleCheckboxChange = (studentId) => {
    const updatedAttendance = { ...attendance };
    updatedAttendance[studentId] = !attendance[studentId];
    setAttendance(updatedAttendance);
  };

  const showConfirmationDialog = () => {
    setConfirmationDialog(true);
  };

  const closeConfirmationDialog = () => {
    setConfirmationDialog(false);
  };

  const handleSubmitAttendance = async () => {
    closeConfirmationDialog(); // Close the confirmation dialog
  
    // Create two arrays for present and absent students
    const presentStudents = [];
    const absentStudents = [];
  
    // Iterate over the students to categorize them
    batchData[selectedBatch].students.forEach((student) => {
      if (attendance[student.id]) {
        presentStudents.push(student.id);
      } else {
        absentStudents.push(student.id);
      }
    });
  
    const attendanceData = {
      batch: selectedBatch,
      presentStudents,
      absentStudents,
    };
  
    try {
      const response = await Axios.post(ApiUrls['SessionAttendance'], attendanceData);
      console.log('Attendance submitted:', response.data);
  
      toast.success('Attendance submitted successfully');
    
    } catch (error) {
      console.error('Error submitting attendance:', error);
  
      toast.error('Submission failed');
    }
  };
  
  


  return (
    <div className="bg-gray-100 g-sidenav-show">
    <div className="min-height-300 bg-primary position-absolute w-100"></div>
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-12 ms-sm-auto col-lg-10 px-md-4">
          <Navbar />
          <div className="container-fluid py-4">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <p className="text-uppercase text-sm">Session Attendance</p>
                    <div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-control-label">Select Batch</label>
                            <select
                              className="form-control"
                              name="batch"
                              value={selectedBatch}
                              onChange={handleBatchChange}
                            >
                              <option value="batchA">Batch A</option>
                              <option value="batchB">Batch B</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Student</th>
                            <th>Present</th>
                          </tr>
                        </thead>
                        <tbody>
                          {batchData[selectedBatch].students.map((student) => (
                            <tr key={student.id}>
                              <td>{student.name}</td>
                              <td>
                                <input
                                  type="checkbox"
                                  checked={attendance[student.id] || false}
                                  onChange={() => handleCheckboxChange(student.id)}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <button className="btn btn-primary btn-sm" onClick={showConfirmationDialog}>
                      Submit Attendance
                    </button>
                    {confirmationDialog && (
                      <div className="confirmation-dialog">
                        <p>Are you sure you want to submit the attendance?</p>
                        <button className="btn btn-primary" onClick={handleSubmitAttendance}>
                          Yes
                        </button>
                        <button className="btn btn-secondary" onClick={closeConfirmationDialog}>
                          No
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    </div>
  );
};

export default SessionAttendance;
