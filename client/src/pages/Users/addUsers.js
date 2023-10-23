import React, { useState } from 'react';
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';

const AddUser = () => {
  const [userType, setUserType] = useState('');
  const [showTrainerFields, setShowTrainerFields] = useState(false);
  const [message, setMessage] = useState('');
  const [bankAccounts, setBankAccounts] = useState([]); // State to store bank accounts
  const [newBankAccount, setNewBankAccount] = useState({
    bankName: '',
    branchCode: '',
    accountNumber: '',
    ifscNumber: '',
  });

  const handleRoleChange = (e) => {
    setUserType(e.target.value);
    setShowTrainerFields(e.target.value === '2');
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

  return (
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
                    <p className="text-uppercase text-sm">User Information</p>
                    {typeof message !== "undefined" && (
                      <div className="alert alert-custom" role="alert">
                        <span>{message}</span>
                      </div>
                    )}
                    <div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-control-label">Username</label>
                            <input
                              className="form-control"
                              type="text"
                              name="username"
                              placeholder="Enter username"
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
                              name="phone"
                              placeholder="Enter Employee ID"
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
                              name="phone"
                              placeholder="Enter phone number"
                            />
                          </div>
                        </div>
                      </div>
                     
                    </div>
                    <hr className="horizontal dark" />
                    <p className="text-uppercase text-sm">Contact Information</p>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="form-control-label">Address</label>
                          <input
                            className="form-control"
                            type="text"
                            name="addr"
                            placeholder="Enter address"
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
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-control-label">Country</label>
                          <input
                            className="form-control"
                            type="text"
                            name="country"
                            placeholder="Enter country"
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
                            name="pincode"
                            placeholder="Enter postal code"
                          />
                        </div>
                      </div>
                    </div>
                    <hr className="horizontal dark" />
                    {/* Bank */}
                    <p className="text-uppercase text-sm">Bank Information</p>
                    {bankAccounts.map((account, index) => (
                      <div key={index} className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-control-label">Bank Name</label>
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
                            <label className="form-control-label">Branch Code</label>
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
                            <label className="form-control-label">Account Number</label>
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
                            <label className="form-control-label">IFSC Number</label>
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
                        </div>
                        <div className="col-md-4">
                          <button
                            className="btn btn-danger"
                            onClick={() => handleRemoveBankAccount(index)}
                          >
                            Remove Bank Account
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-control-label">Bank Name</label>
                          <input
                            className="form-control"
                            type="text"
                            value={newBankAccount.bankName}
                            onChange={(e) => setNewBankAccount({ ...newBankAccount, bankName: e.target.value })}
                            placeholder="Enter bank name"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-control-label">Branch Code</label>
                          <input
                            className="form-control"
                            type="text"
                            value={newBankAccount.branchCode}
                            onChange={(e) => setNewBankAccount({ ...newBankAccount, branchCode: e.target.value })}
                            placeholder="Enter branch code"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-control-label">Account Number</label>
                          <input
                            className="form-control"
                            type="text"
                            value={newBankAccount.accountNumber}
                            onChange={(e) => setNewBankAccount({ ...newBankAccount, accountNumber: e.target.value })}
                            placeholder="Enter account number"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-control-label">IFSC Number</label>
                          <input
                            className="form-control"
                            type="text"
                            value={newBankAccount.ifscNumber}
                            onChange={(e) => setNewBankAccount({ ...newBankAccount, ifscNumber: e.target.value })}
                            placeholder="Enter IFSC number"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <button className="btn btn-primary" onClick={handleAddBankAccount}>
                          Add Bank Account
                        </button>
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
                            name="resume"
                            placeholder="Choose resume file"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-control-label">Adhar Card</label>
                          <input
                            className="form-control"
                            type="file"
                            name="adhar"
                            placeholder="Choose Adhar Card file"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-control-label">Pan Card</label>
                          <input
                            className="form-control"
                            type="file"
                            name="pan"
                            placeholder="Choose Pan Card file"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-control-label">Photo Graph</label>
                          <input
                            className="form-control"
                            type="file"
                            name="photo"
                            placeholder="Choose photo file"
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
                              id="type"
                              name="type"
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
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary btn-sm ms-auto"
                      type="submit"
                      name="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddUser;
