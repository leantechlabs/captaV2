import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Sidebar from '../Includes/Sidebar';
import DOMPurify from 'dompurify';
import { Toaster,toast} from 'sonner';
import Navbar from '../Includes/Navbar';
import ApiUrls from '../Includes/corsUrls';
import { useHistory, useLocation } from 'react-router-dom';
import Layout from '../Layout/Layout';
import 'react-toastify/dist/ReactToastify.css';
import {storage} from "./firebaseConfig";
import {ref,uploadBytes,getDownloadURL,listAll} from "firebase/storage";
import {v4} from "uuid";

const EditUser = () => {
    const [users, setUsers] = useState([]);
    const [userType, setUserType] = useState('');
    const [showTrainerFields, setShowTrainerFields] = useState(false);
    const [message, setMessage] = useState('');
    const [bankAccounts, setBankAccounts] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userEmail = queryParams.get('email');
    useEffect(() => {
      const fetchData = async () => {
        try {
          if (!userEmail) {
            // Handle missing email parameter
            console.error('Email parameter is missing');
            return;
          }
  
          const response = await fetch(ApiUrls['EditUser'] + `?email=${userEmail}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (!response.ok) {
            toast.error(`Error fetching user data. Status: ${response.status}`);
            return;
          }
  
          const data = await response.json();
  
          if (data.error) {
            toast.error('Error from server:', data.error);
            return;
          }
  
          setUsers(data);
          setFormData((prevFormData) => ({
            ...prevFormData,
            username: data.username,
            email: data.email,
            userId: data.userId,
            phoneNumber: data.phoneNumber,
            address: data.address,
            city: data.city,
            country: data.country,
            postalCode: data.postalCode,
            role: data.role,
            trainerType: data.trainerType,
            skills: data.skills,
            salary: data.salary,
            bankAccounts: data.bankAccounts,
            resume: data.resume,
            adhar: data.adhar,
            pan: data.pan,
            photo: data.photo,
          }));
  
          setNewBankAccount({
            bankName: '',
            branchCode: '',
            accountNumber: '',
            ifscNumber: '',
          });
        } catch (error) {
          toast.error('Unexpected error fetching user data:', error);
        }
      };
  
      fetchData();
    }, [userEmail]);
  

    const [newBankAccount, setNewBankAccount] = useState({
      bankName: '',
      branchCode: '',
      accountNumber: '',
      ifscNumber: '',
    });
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      userId: '',
      phoneNumber: '',
      address: '',
      city: '',
      country: '',
      postalCode: '',
      resume: '',
      adhar: '',
      pan: '',
      photo: '',
      role: '',
      trainerType: '',
      skills: '',
      salary: '',
    });
    const handleRoleChange = (e) => {
      const selectedRole = e.target.value;
      setUserType(selectedRole);
      setShowTrainerFields(selectedRole === '2');
    };

    const handleAddBankAccount = () => {
      setBankAccounts([...bankAccounts, newBankAccount]);
      setNewBankAccount({
        bankName: '',
        branchCode: '',
        accountNumber: '',
        ifscNumber: '',
      });
    };

    const handleRemoveBankAccount = (index) => {
      const updatedBankAccounts = [...bankAccounts];
      updatedBankAccounts.splice(index, 1);
      setBankAccounts(updatedBankAccounts);
    };

    const handleSubmit = async () => {
      try {
        const updatedUserData = {
          username: DOMPurify.sanitize(formData.username).trim(),
          email: DOMPurify.sanitize(formData.email).trim(),
          userId: DOMPurify.sanitize(formData.userId).trim(),
          phoneNumber: DOMPurify.sanitize(formData.phoneNumber).trim(),
          address: DOMPurify.sanitize(formData.address).trim(),
          city: DOMPurify.sanitize(formData.city).trim(),
          country: DOMPurify.sanitize(formData.country).trim(),
          postalCode: DOMPurify.sanitize(formData.postalCode).trim(),
          role: DOMPurify.sanitize(formData.role).trim(),
          trainerType: DOMPurify.sanitize(formData.trainerType).trim(),
          skills: DOMPurify.sanitize(formData.skills).trim(),
          salary: DOMPurify.sanitize(formData.salary).trim()
        };
    
        const response = await Axios.post(ApiUrls['UpdateUser'], updatedUserData);
    
        if (response.status === 200) {
          toast.success('User data updated successfully');
        } else {
          toast.error('Failed to update user data');
        }
      } catch (error) {
        toast.error('Unexpected error during user data update:', error.message);
      }
    };

  
  
    return (
      <div className="bg-gray-100 g-sidenav-show">
      <div className="min-height-300 bg-primary position-absolute w-100"></div>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Toaster richColors position='top-center'/>
          <main className="col-md-12 ms-sm-auto col-lg-10 px-md-4">
            <Navbar />
            <div className="container-fluid py-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <p className="text-uppercase text-sm">User Information :</p>
                      {typeof message !== "undefined" && (
                        <div className="alert alert-custom" role="alert">
                          <span>{message}</span>
                        </div>
                      )}
                      <div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-control-label">
                                Username
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name="username"
                                placeholder="Enter username"
                                value={formData.username}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    username: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-control-label">
                                Email address
                              </label>
                              <input
                                className="form-control"
                                type="email"
                                name="email"
                                disabled="true"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    email: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-control-label">
                                User Id
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name="userId"
                                placeholder="Enter Employee ID"
                                value={formData.userId}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    userId: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-control-label">
                                Phone Number
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name="phoneNumber"
                                placeholder="Enter phone number"
                                value={formData.phoneNumber}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    phoneNumber: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="horizontal dark" />
                      <p className="text-uppercase text-sm">
                        Contact Information
                      </p>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="form-control-label">
                              Address
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="address"
                              placeholder="Enter address"
                              value={formData.address}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  address: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-control-label">City</label>
                            <input
                              className="form-control"
                              type="text"
                              name="city"
                              placeholder="Enter city"
                              value={formData.city}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  city: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-control-label">
                              Country
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="country"
                              placeholder="Enter country"
                              value={formData.country}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  country: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-control-label">
                              Postal code
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="postalCode"
                              placeholder="Enter postal code"
                              value={formData.postalCode}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  postalCode: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <hr className="horizontal dark" />
                      {/* Bank */}
                      {formData.bankAccounts && (
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">Bank Name</th>
                              <th scope="col">Branch Code</th>
                              <th scope="col">Account Number</th>
                              <th scope="col">IFSC Code</th>
                            </tr>
                          </thead>
                          <tbody>
                            {formData.bankAccounts.map((account, index) => (
                              <tr key={index}>
                                <td>{account.bankName}</td>
                                <td>{account.branchCode}</td>
                                <td>{account.accountNumber}</td>
                                <td>{account.ifscNumber}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

)}
                      <hr className="horizontal dark" />
                      <p className="text-uppercase text-sm">Personal Details</p>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-control-label">Resume</label>
                            <br></br>
                             <a href={formData.resume} target='_blank'>Download Current Resume</a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-control-label">
                              Adhar Card
                            </label>
                            <br></br>
                            <a href={formData.adhar} target='_blank'>Download Adhar</a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-control-label">
                              Pan Card
                            </label>
                            <br></br>
                              <a href={formData.pan} target='_blank'>Download Pan</a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-control-label">
                              Photo Graph
                            </label>
                            <br></br>
                              <a href={formData.photo} target='_blank'>Download Photo</a>
                          </div>
                        </div>
                      </div>
                      <hr className="horizontal dark" />
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-control-label">Salary</label>
                            <input
                              className="form-control"
                              type="text"
                              name="salary"
                              placeholder="Enter salary"
                              value={formData.salary}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  salary: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                              <hr>
                              </hr>
                              <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-control-label">
                              Skills
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="skills"
                              placeholder="Enter Skills"
                              value={formData.skills}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  skills: e.target.value,
                                })
                              }
                            />
                        </div>
                      </div>
                      <button
                        className="btn btn-primary btn-sm ms-auto"
                        type="submit"
                        name="submit"
                        onClick={handleSubmit}
                      >
                        Update
                      </button>
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

export default EditUser;
