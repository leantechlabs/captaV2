import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Sidebar from '../Includes/Sidebar';
import DOMPurify from 'dompurify';
import { Toaster,toast} from 'sonner';
import Navbar from '../Includes/Navbar';
import ApiUrls from '../Includes/corsUrls';
import { useHistory } from 'react-router-dom';
import Layout from '../Layout/Layout';
import 'react-toastify/dist/ReactToastify.css';
import {storage} from "./firebaseConfig";
import {ref,uploadBytes,getDownloadURL,listAll} from "firebase/storage";
import {v4} from "uuid";

const EditUser = () => {
    const [userType, setUserType] = useState('');
    const [showTrainerFields, setShowTrainerFields] = useState(false);
    const [message, setMessage] = useState('');
    const [bankAccounts, setBankAccounts] = useState([]);
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

      const userData = {
        username: DOMPurify.sanitize(formData.username).trim(),
        email: DOMPurify.sanitize(formData.email).trim(),
        userId: DOMPurify.sanitize(formData.userId).trim(),
        phoneNumber: DOMPurify.sanitize(formData.phoneNumber).trim(),
        address: DOMPurify.sanitize(formData.address).trim(),
        city: DOMPurify.sanitize(formData.city).trim(),
        country: DOMPurify.sanitize(formData.country).trim(),
        postalCode: DOMPurify.sanitize(formData.postalCode).trim(),
        resume: null, 
        adhar: null,
        pan: null,
        photo: null,
        role: DOMPurify.sanitize(formData.role).trim(),
        trainerType: DOMPurify.sanitize(formData.trainerType).trim(),
        skills: DOMPurify.sanitize(formData.skills).trim(),
        salary: DOMPurify.sanitize(formData.salary).trim(),
        bankAccounts:  bankAccounts.map((account, index) => ({
            bankName: DOMPurify.sanitize(account.bankName).trim(),
            branchCode: DOMPurify.sanitize(account.branchCode).trim(),
            accountNumber: DOMPurify.sanitize(account.accountNumber).trim(),
            ifscNumber: DOMPurify.sanitize(account.ifscNumber).trim(),
          })),
    
      };
    

        // Axios.post(ApiUrls["addUser"], userData)
        //   .then((response) => {
        //     const successMessage = response.userData.message;
        //     setMessage("Data submitted successfully");
        //     toast.success(successMessage);
        //   })
        //   .catch((error) => {
        //     const errorMessage = error.response ? error.response.data.message
        //       :  ":";
        //     toast.success("Data submitted successfully"+errorMessage)
        //   });
      
  
          const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(ApiUrls['EditUser'], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  
  
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
                      <p className="text-uppercase text-sm">Bank Information</p>
                      <small>Note : Click On Add Bank Account</small>
                      {bankAccounts.map((account, index) => (
                        <div key={index} className="row">
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="form-control-label">
                                Bank Name
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name={`bankName_${index}`}
                                value={account.bankName}
                                onChange={(e) => {
                                  const updatedAccount = { ...account };
                                  updatedAccount.bankName = e.target.value;
                                  const updatedAccounts = [...bankAccounts];
                                  updatedAccounts[index] = updatedAccount;
                                  setBankAccounts(updatedAccounts);
                                }}
                                placeholder="Enter bank name"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="form-control-label">
                                Branch Code
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name={`branchCode_${index}`}
                                value={account.branchCode}
                                onChange={(e) => {
                                  const updatedAccount = { ...account };
                                  updatedAccount.branchCode = e.target.value;
                                  const updatedAccounts = [...bankAccounts];
                                  updatedAccounts[index] = updatedAccount;
                                  setBankAccounts(updatedAccounts);
                                }}
                                placeholder="Enter branch code"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="form-control-label">
                                Account Number
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name={`accountNumber_${index}`}
                                value={account.accountNumber}
                                onChange={(e) => {
                                  const updatedAccount = { ...account };
                                  updatedAccount.accountNumber = e.target.value;
                                  const updatedAccounts = [...bankAccounts];
                                  updatedAccounts[index] = updatedAccount;
                                  setBankAccounts(updatedAccounts);
                                }}
                                placeholder="Enter account number"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="form-control-label">
                                IFSC Number
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name={`ifscNumber_${index}`}
                                value={account.ifscNumber}
                                onChange={(e) => {
                                  const updatedAccount = { ...account };
                                  updatedAccount.ifscNumber = e.target.value;
                                  const updatedAccounts = [...bankAccounts];
                                  updatedAccounts[index] = updatedAccount;
                                  setBankAccounts(updatedAccounts);
                                }}
                                placeholder="Enter IFSC number"
                              />
                            </div>
                            <div className="col-md-12">
                            <button
                              className="btn btn-danger"
                              onClick={() => handleRemoveBankAccount(index)}
                            >
                              Remove Bank Account
                            </button>
                          </div>
                          </div>
                         
                        </div>
                      ))}
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-control-label">
                              Bank Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={newBankAccount.bankName}
                              onChange={(e) =>
                                setNewBankAccount({
                                  ...newBankAccount,
                                  bankName: e.target.value,
                                })
                              }
                              placeholder="Enter bank name"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-control-label">
                              Branch Code
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={newBankAccount.branchCode}
                              onChange={(e) =>
                                setNewBankAccount({
                                  ...newBankAccount,
                                  branchCode: e.target.value,
                                })
                              }
                              placeholder="Enter branch code"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-control-label">
                              Account Number
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={newBankAccount.accountNumber}
                              onChange={(e) =>
                                setNewBankAccount({
                                  ...newBankAccount,
                                  accountNumber: e.target.value,
                                })
                              }
                              placeholder="Enter account number"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-control-label">
                              IFSC Number
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={newBankAccount.ifscNumber}
                              onChange={(e) =>
                                setNewBankAccount({
                                  ...newBankAccount,
                                  ifscNumber: e.target.value,
                                })
                              }
                              placeholder="Enter IFSC number"
                            />
                          </div>
                          <div className="col-md-12">
                          <button
                            className="btn btn-primary"
                            onClick={handleAddBankAccount}
                          >
                            Add Bank Account
                          </button>
                        </div>
                        </div>
                       
                      </div>
                      <hr className="horizontal dark" />
                      <p className="text-uppercase text-sm">Personal Details</p>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-control-label">Resume</label>
                            <input
                              className="form-control"
                              type="file"
                              accept=".pdf,.doc,.docx"
                              name="resume"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  resume: e.target.files[0],
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-control-label">
                              Adhar Card
                            </label>
                            <input
                              className="form-control"
                              type="file"
                              name="adhar"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  adhar: e.target.files[0],
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-control-label">
                              Pan Card
                            </label>
                            <input
                              className="form-control"
                              type="file"
                              name="pan"
                              accept=".jpeg,.jpg,.png,.pdf"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  pan: e.target.files[0],
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-control-label">
                              Photo Graph
                            </label>
                            <input
                              className="form-control"
                              type="file"
                              name="photo"
                              accept=".jpeg,.jpg,.png"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  photo: e.target.files[0],
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <hr className="horizontal dark" />
                      <p className="text-uppercase text-sm">User Role</p>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-control-label">
                              Select Role Type
                            </label>
                            <select
                              className="form-control"
                              id="role"
                              onChange={handleRoleChange}
                              name="role"
                              value={formData.role}
                            >
                              <option value="" selected>
                                Select
                              </option>
                              <option value="1">Moderator</option>
                              <option value="2">Trainer</option>
                            </select>
                          </div>
                        </div>
                        {showTrainerFields && (
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="form-control-label">
                                Select Trainer Type
                              </label>
                              <select
                                className="form-control"
                                id="trainerType"
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    trainerType: e.target.value,
                                  })
                                }
                                name="trainerType"
                                value={formData.trainerType}
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value="1">Full Timer</option>
                                <option value="2">Free Lancer</option>
                              </select>
                            </div>
                          </div>
                        )}
                        {showTrainerFields && (
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="form-control-label">
                                Skills
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name="skills"
                                placeholder="Enter skills (e.g., Java, C++, Python)"
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
                        )}
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
                      </div>
                      <button
                        className="btn btn-primary btn-sm ms-auto"
                        type="submit"
                        name="submit"
                        // onClick={handleSubmit}
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
