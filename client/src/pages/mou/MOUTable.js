import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';
import ScriptSection from '../Includes/ScriptSection';
import Navbar from '../Includes/Navbar';
import Sidebar from '../Includes/Sidebar';

const MOUTable = () => {
  const initialMOUData = {
    Date: '',
    Location: '',
    FirstParty: {
      Name: '',
      Address: '',
      Representative: '',
      Contact: '',
    },
    SecondParty: {
      Name: '',
      Location: '',
      Representative: '',
    },
    TermsConditions: {
      NatureRelationship: '',
      MutualObligation: '',
      LimitationsWarranties: '',
    },
    PurposeScope: {
      Details: '',
      CollaborationPeriod: '',
      OtherDetails: '',
    },
    PaymentTerms: {
      AmountPerStudent: '',
      PaymentSchedule: {
        FirstInstallment: '',
        SecondInstallment: '',
        ThirdInstallment: '',
        FinalInstallment: '',
      },
      PaymentMethod: '',
    },
    Termination: {
      TerminationConditions: '',
      PaymentDue: '',
    },
  };

  const [mouData, setMOUData] = useState(initialMOUData);
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const [section, field] = name.split('.');
    setMOUData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = () => {
    axios
      .post('/MOU/create', mouData)
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
      <p className="text-uppercase text-sm">MOU Form</p>
          {message && (
            <div className="alert alert-custom" role="alert">
              <span>{message}</span>
            </div>
          )}
        <div className="form-group">
          <label htmlFor="Date" className="form-control-label">Date:</label>
          <input
            className="form-control"
            type="text"
            id="Date"
            name="Date"
            value={mouData.Date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Location" className="form-control-label">Location:</label>
          <input
            className="form-control"
            type="text"
            id="Location"
            name="Location"
            value={mouData.Location}
            onChange={handleInputChange}
          />
        </div>
        <p className="text-uppercase text-sm">First Party</p>
        <div className="form-group">
          <label htmlFor="FirstParty.Name" className="form-control-label">Name:</label>
          <input
            className="form-control"
            type="text"
            id="FirstParty.Name"
            name="FirstParty.Name"
            value={mouData.FirstParty.Name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="FirstParty.Address" className="form-control-label">Address:</label>
          <input
            className="form-control"
            type="text"
            id="FirstParty.Address"
            name="FirstParty.Address"
            value={mouData.FirstParty.Address}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="FirstParty.Representative" className="form-control-label">Representative:</label>
          <input
            className="form-control"
            type="text"
            id="FirstParty.Representative"
            name="FirstParty.Representative"
            value={mouData.FirstParty.Representative}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="FirstParty.Contact" className="form-control-label">Contact:</label>
          <input
            className="form-control"
            type="text"
            id="FirstParty.Contact"
            name="FirstParty.Contact"
            value={mouData.FirstParty.Contact}
            onChange={handleInputChange}
          />
        </div>
        <p className="text-uppercase text-sm">Second Party</p>
        <div className="form-group">
          <label htmlFor="SecondParty.Name" className="form-control-label">Name:</label>
          <input
            className="form-control"
            type="text"
            id="SecondParty.Name"
            name="SecondParty.Name"
            value={mouData.SecondParty.Name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="SecondParty.Location" className="form-control-label">Location:</label>
          <input
            className="form-control"
            type="text"
            id="SecondParty.Location"
            name="SecondParty.Location"
            value={mouData.SecondParty.Location}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="SecondParty.Representative" className="form-control-label">Representative:</label>
          <input
            className="form-control"
            type="text"
            id="SecondParty.Representative"
            name="SecondParty.Representative"
            value={mouData.SecondParty.Representative}
            onChange={handleInputChange}
          />
        </div>
        <p className="text-uppercase text-sm">Terms and Conditions</p>
        <div className="form-group">
          <label htmlFor="TermsConditions.NatureRelationship" className="form-control-label">Nature of Relationship:</label>
          <input
            className="form-control"
            type="text"
            id="TermsConditions.NatureRelationship"
            name="TermsConditions.NatureRelationship"
            value={mouData.TermsConditions.NatureRelationship}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="TermsConditions.MutualObligation" className="form-control-label">Mutual Obligation:</label>
          <input
            className="form-control"
            type="text"
            id="TermsConditions.MutualObligation"
            name="TermsConditions.MutualObligation"
            value={mouData.TermsConditions.MutualObligation}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="TermsConditions.LimitationsWarranties" className="form-control-label">Limitations and Warranties:</label>
          <input
            className="form-control"
            type="text"
            id="TermsConditions.LimitationsWarranties"
            name="TermsConditions.LimitationsWarranties"
            value={mouData.TermsConditions.LimitationsWarranties}
            onChange={handleInputChange}
          />
        </div>
        <p className="text-uppercase text-sm">Purpose and Scope</p>
        <div className="form-group">
          <label htmlFor="PurposeScope.Details" className="form-control-label">Details:</label>
          <input
            className="form-control"
            type="text"
            id="PurposeScope.Details"
            name="PurposeScope.Details"
            value={mouData.PurposeScope.Details}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="PurposeScope.CollaborationPeriod" className="form-control-label">Collaboration Period:</label>
          <input
            className="form-control"
            type="text"
            id="PurposeScope.CollaborationPeriod"
            name="PurposeScope.CollaborationPeriod"
            value={mouData.PurposeScope.CollaborationPeriod}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="PurposeScope.OtherDetails" className="form-control-label">Other Details:</label>
          <input
            className="form-control"
            type="text"
            id="PurposeScope.OtherDetails"
            name="PurposeScope.OtherDetails"
            value={mouData.PurposeScope.OtherDetails}
            onChange={handleInputChange}
          />
        </div>
        <p className="text-uppercase text-sm">Payment Terms</p>
        <div className="form-group">
          <label htmlFor="PaymentTerms.AmountPerStudent" className="form-control-label">Amount Per Student:</label>
          <input
            className="form-control"
            type="text"
            id="PaymentTerms.AmountPerStudent"
            name="PaymentTerms.AmountPerStudent"
            value={mouData.PaymentTerms.AmountPerStudent}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="PaymentTerms.PaymentSchedule.FirstInstallment" className="form-control-label">First Installment:</label>
          <input
            className="form-control"
            type="text"
            id="PaymentTerms.PaymentSchedule.FirstInstallment"
            name="PaymentTerms.PaymentSchedule.FirstInstallment"
            value={mouData.PaymentTerms.PaymentSchedule.FirstInstallment}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="PaymentTerms.PaymentSchedule.SecondInstallment" className="form-control-label">Second Installment:</label>
          <input
            className="form-control"
            type="text"
            id="PaymentTerms.PaymentSchedule.SecondInstallment"
            name="PaymentTerms.PaymentSchedule.SecondInstallment"
            value={mouData.PaymentTerms.PaymentSchedule.SecondInstallment}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="PaymentTerms.PaymentSchedule.ThirdInstallment" className="form-control-label">Third Installment:</label>
          <input
            className="form-control"
            type="text"
            id="PaymentTerms.PaymentSchedule.ThirdInstallment"
            name="PaymentTerms.PaymentSchedule.ThirdInstallment"
            value={mouData.PaymentTerms.PaymentSchedule.ThirdInstallment}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="PaymentTerms.PaymentSchedule.FinalInstallment" className="form-control-label">Final Installment:</label>
          <input
            className="form-control"
            type="text"
            id="PaymentTerms.PaymentSchedule.FinalInstallment"
            name="PaymentTerms.PaymentSchedule.FinalInstallment"
            value={mouData.PaymentTerms.PaymentSchedule.FinalInstallment}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="PaymentTerms.PaymentMethod" className="form-control-label">Payment Method:</label>
          <input
            className="form-control"
            type="text"
            id="PaymentTerms.PaymentMethod"
            name="PaymentTerms.PaymentMethod"
            value={mouData.PaymentTerms.PaymentMethod}
            onChange={handleInputChange}
          />
        </div>
        <p className="text-uppercase text-sm">Termination</p>
        <div className="form-group">
          <label htmlFor="Termination.TerminationConditions" className="form-control-label">Termination Conditions:</label>
          <input
            className="form-control"
            type="text"
            id="Termination.TerminationConditions"
            name="Termination.TerminationConditions"
            value={mouData.Termination.TerminationConditions}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Termination.PaymentDue" className="form-control-label">Payment Due:</label>
          <input
            className="form-control"
            type="text"
            id="Termination.PaymentDue"
            name="Termination.PaymentDue"
            value={mouData.Termination.PaymentDue}
            onChange={handleInputChange}
          />
        </div>

      <button className="btn btn-primary btn-sm ms-auto" onClick={handleSubmit}>Submit</button>
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

export default MOUTable;
