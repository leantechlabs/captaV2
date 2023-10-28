import React, { useState } from 'react';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';
import { FaUser } from 'react-icons/fa';

const dummySessionData = {
  today: [
    {
      slNo: 1,
      date: '2023-11-01',
      day: 'Monday',
      topic: 'Session 1',
      subtopic: 'Subtopic 1',
      programs: 'Program A, Program B',
    },
    // Add more today's sessions
  ],
  weekly: [
    {
      slNo: 2,
      date: '2023-10-31',
      day: 'Tuesday',
      topic: 'Session 2',
      subtopic: 'Subtopic 2',
      programs: 'Program C, Program D',
    },
    {
        slNo: 3,
        date: '2023-11-01',
        day: 'Tuesday',
        topic: 'Session 2',
        subtopic: 'Subtopic 2',
        programs: 'Program C, Program D',
      },
    // Add more weekly sessions
  ],
  curriculum: [
    {
      slNo: 4,
      date: '2023-11-01',
      day: 'Wednesday',
      topic: 'Session 3',
      subtopic: 'Subtopic 3',
      programs: 'Program E, Program F',
    },
    {
        slNo: 5,
        date: '2023-11-01',
        day: 'Thursday',
        topic: 'Session 3',
        subtopic: 'Subtopic 3',
        programs: 'Program E, Program F',
      },
      {
        slNo: 6,
        date: '2023-11-01',
        day: 'Friday',
        topic: 'Session 3',
        subtopic: 'Subtopic 3',
        programs: 'Program E, Program F',
      },
    // Add more curriculum sessions
  ],
};

const SessionDetails = () => {
  const [selectedOption, setSelectedOption] = useState('today');
  const sessions = dummySessionData[selectedOption];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
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
                    <p className="text-uppercase text-sm">Session Details</p>
                    <div className="d-flex align-items-center">
                      <label className="me-2">Select:</label>
                      <select
                        className="form-select"
                        value={selectedOption}
                        onChange={(e) => handleOptionChange(e.target.value)}
                      >
                        <option value="today">Today's Sessions</option>
                        <option value="weekly">Weekly Sessions</option>
                        <option value="curriculum">Whole Curriculum</option>
                      </select>
                    </div>
                    <div className="mt-4">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Sl. No</th>
                            <th>Date</th>
                            <th>Day</th>
                            <th>Topic</th>
                            <th>Subtopic</th>
                            <th>Programs</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sessions.map((session) => (
                            <tr key={session.slNo}>
                              <td>{session.slNo}</td>
                              <td>{session.date}</td>
                              <td>{session.day}</td>
                              <td>{session.topic}</td>
                              <td>{session.subtopic}</td>
                              <td>{session.programs}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
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

export default SessionDetails;
