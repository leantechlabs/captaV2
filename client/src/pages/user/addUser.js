import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';
import ScriptSection from '../Includes/ScriptSection';
import Navbar from '../Includes/Navbar';
import Sidebar from '../Includes/Sidebar';

const AddUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Moderator'); // Default to 'Moderator'
  const [message, setMessage] = useState('');

  const [photo, setPhoto] = useState(null);
  const [adhar, setAdhar] = useState(null);
  const [pan, setPan] = useState(null);
  const [bankDetails, setBankDetails] = useState([]);

  // Fields for Trainer only
  const [resume, setResume] = useState(null);
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('username', username);
    formData.append('email', email);
    formData.append('role', role);

    formData.append('photo', photo);
    formData.append('adhar', adhar);
    formData.append('pan', pan);
    formData.append('resume', resume);

    if (role === 'Trainer') {
      formData.append('skills', skills);
      formData.append('experience', experience);
    }

    for (let i = 0; i < bankDetails.length; i++) {
      formData.append('bankDetails[]', bankDetails[i]);
    }

    axios
      .post('/manage/add-user', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('An error occurred.');
      });
  };

  return (
    <html lang="en">
    <Layout />
    <body className="">
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
          <p className="text-uppercase text-sm">User Information</p>
          {message && (
            <div className="alert alert-custom" role="alert">
              <span>{message}</span>
            </div>
          )}
          <div className="form-group">
            <label htmlFor="username" className="form-control-label">
              Username:
            </label>
            <input
              className="form-control"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-control-label">
              Email address:
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="role" className="form-control-label">
              Role:
            </label>
            <select
              className="form-control"
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="Moderator">Moderator</option>
              <option value="Trainer">Trainer</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="bankDetails" className="form-control-label">
              Bank Details (Array):
            </label>
            <input
              className="form-control"
              type="text"
              id="bankDetails"
              name="bankDetails"
              value={bankDetails.join(',')}
              onChange={(e) => setBankDetails(e.target.value.split(','))}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo" className="form-control-label">
              Photo (File):
            </label>
            <input
              className="form-control"
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="adhar" className="form-control-label">
              Adhar Card (File):
            </label>
            <input
              className="form-control"
              type="file"
              id="adhar"
              name="adhar"
              accept="image/*"
              onChange={(e) => setAdhar(e.target.files[0])}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pan" className="form-control-label">
              PAN Card (File):
            </label>
            <input
              className="form-control"
              type="file"
              id="pan"
              name="pan"
              accept="image/*"
              onChange={(e) => setPan(e.target.files[0])}
              required
            />
          </div>
          {role === 'Trainer' && (
            <>
              <div className="form-group">
                <label htmlFor="resume" className="form-control-label">
                  Resume (File):
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="resume"
                  name="resume"
                  accept="application/pdf"
                  onChange={(e) => setResume(e.target.files[0])}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="skills" className="form-control-label">
                  Skills:
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="skills"
                  name="skills"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="experience" className="form-control-label">
                  Experience:
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="experience"
                  name="experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  required
                />
              </div>
            </>
          )}
          <button
            className="btn btn-primary btn-sm ms-auto"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
          </div>
          </div>
          </div>
            </main>
          </div>
          <ScriptSection />
        </body>
      </html>

  );
};

export default AddUser;
