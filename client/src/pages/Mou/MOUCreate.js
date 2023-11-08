import React, { useState } from 'react';
import Axios from 'axios';
import Layout from '../Layout/Layout';
import ScriptSection from '../Includes/ScriptSection';
import Navbar from '../Includes/Navbar';
import Sidebar from '../Includes/Sidebar';
import ApiUrls from '../Includes/corsUrls';
import DOMPurify from 'dompurify';
import { Toaster,toast} from 'sonner';

const MouCreate = () => {
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

  const finalMouData={
    Date: DOMPurify.sanitize(mouData.Date).trim(),
    Location: DOMPurify.sanitize(mouData.Location).trim(),
    FirstParty: {
      Name:  DOMPurify.sanitize(mouData.FirstParty.Name).trim(),
      Address: DOMPurify.sanitize(mouData.FirstParty.Address).trim(),
      Representative: DOMPurify.sanitize(mouData.FirstParty.Representative).trim(),
      Contact: DOMPurify.sanitize(mouData.FirstParty.Contact).trim(),
    },
    SecondParty: {
      Name: DOMPurify.sanitize(mouData.SecondParty.Name).trim(),
      Location: DOMPurify.sanitize(mouData.SecondParty.Location).trim(),
      Representative: DOMPurify.sanitize(mouData.SecondParty.Representative).trim(),
    },
    TermsConditions: {
      NatureRelationship: DOMPurify.sanitize(mouData.TermsConditions.NatureRelationship).trim(),
      MutualObligation: DOMPurify.sanitize(mouData.TermsConditions.MutualObligation).trim(),
      LimitationsWarranties: DOMPurify.sanitize(mouData.TermsConditions.LimitationsWarranties).trim(),
    },
    PurposeScope: {
      Details: DOMPurify.sanitize(mouData.PurposeScope.Details).trim(),
      CollaborationPeriod: DOMPurify.sanitize(mouData.PurposeScope.CollaborationPeriod).trim(),
      OtherDetails: DOMPurify.sanitize(mouData.PurposeScope.OtherDetails).trim(),
    },
    PaymentTerms: {
      AmountPerStudent: DOMPurify.sanitize(mouData.PaymentTerms.AmountPerStudent).trim(),
      PaymentSchedule: {
        FirstInstallment: DOMPurify.sanitize(mouData.PaymentTerms.PaymentSchedule.FirstInstallment).trim(),
        SecondInstallment: DOMPurify.sanitize(mouData.PaymentTerms.PaymentSchedule.SecondInstallment).trim(),
        ThirdInstallment: DOMPurify.sanitize(mouData.PaymentTerms.PaymentSchedule.ThirdInstallment).trim(),
        FinalInstallment: DOMPurify.sanitize(mouData.PaymentTerms.PaymentSchedule.FinalInstallment).trim(),
      },
      PaymentMethod: DOMPurify.sanitize(mouData.PaymentTerms.PaymentMethod).trim(),
    },
    Termination: {
      TerminationConditions: DOMPurify.sanitize(mouData.Termination.TerminationConditions).trim(),
      PaymentDue: DOMPurify.sanitize(mouData.Termination.PaymentDue).trim(),
    },

  };
  const charOnly = /^[A-Za-z ]+$/;
  const charNum= /^[a-zA-Z0-9]*$/;
  const uppercaseNum=/^[A-Z0-9]*$/;
  const nums=/^[0-9]*$/;


  const mailCheck=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleSubmit = async () => {


    if(!finalMouData.Date)
    {
      toast.error("Please enter Date");
      return;
    }
    if(!finalMouData.Location)
    {
      toast.error("Please enter Location");
      return;
    }
    if(!finalMouData.FirstParty.Name || !finalMouData.FirstParty.Name.match(charOnly))
    {
      toast.error("Please enter a valid Name");
      return;
    }
    if(!finalMouData.FirstParty.Address || !finalMouData.FirstParty.Address.match(charNum))
    {
      toast.error("Please enter a  valid Address ");
      return;
    }if(!finalMouData.FirstParty.Representative || !finalMouData.FirstParty.Representative.match(charOnly))
    {
      toast.error("Please enter a valid Representative");
      return;
    }
    if(!finalMouData.FirstParty.Contact)
    {
      toast.error("Please enter a Valid Phone number");
      return;
    }
    if(!finalMouData.SecondParty.Name || !finalMouData.SecondParty.Name.match(charOnly))
    {
      toast.error("Please enter a valid Second party Name");
      return;
    }
    if(!finalMouData.SecondParty.Address || !finalMouData.SecondParty.Address.match(charNum))
    {
      toast.error("Please enter a  valid Second Party Address ");
      return;
    }if(!finalMouData.SecondParty.Representative || !finalMouData.SecondParty.Representative.match(charOnly))
    {
      toast.error("Please enter a valid Second Party Representative");
      return;
    }

    if(!finalMouData.TermsConditions.NatureRelationship)
    {
      toast.error("Please enter a valid Nature of Relationship");
      return;
    }
    if(!finalMouData.TermsConditions.MutualObligation)
    {
      toast.error("Please enter a valid Mutual Obligation");
      return;
    }
    if(!finalMouData.TermsConditions.LimitationsWarranties)
    {
      toast.error("Please enter a valid Limitations and Warranties");
      return;
    }

    if(!finalMouData.PurposeScope.Details)
    {
      toast.error("Please enter a valid Details");
      return;
    }  
     if(!finalMouData.PurposeScope.CollaborationPeriod)
    {
      toast.error("Please enter a valid Collaboration Period");
      return;
    }   if(!finalMouData.PurposeScope.OtherDetails)
    {
      toast.error("Please enter a valid OtherDetails");
      return;
    }

    if(!finalMouData.PaymentTerms.AmountPerStudent || !finalMouData.PaymentTerms.AmountPerStudent.match(nums))
    {
      toast.error("Please enter a valid Amount Per Student");
      return;
    }

    if(!finalMouData.PaymentTerms.FirstInstallment.AmountPerStudent || !finalMouData.PaymentTerms.FirstInstallment.match(nums))
    {
      toast.error("Please enter a valid First Installment");
      return;
    }
    if(!finalMouData.PaymentTerms.SecondInstallment.AmountPerStudent || !finalMouData.PaymentTerms.SecondInstallment.match(nums))
    {
      toast.error("Please enter a valid Second Installment");
      return;
    }
    if(!finalMouData.PaymentTerms.ThirdInstallment.AmountPerStudent || !finalMouData.PaymentTerms.ThirdInstallment.match(nums))
    {
      toast.error("Please enter a valid Third Installment");
      return;
    }
    if(!finalMouData.PaymentTerms.FinalInstallment.AmountPerStudent || !finalMouData.PaymentTerms.FinalInstallment.match(nums))
    {
      toast.error("Please enter a valid Final Installment");
      return;
    }
    if(!finalMouData.PaymentTerms.PaymentMethod.AmountPerStudent || !finalMouData.PaymentTerms.PaymentMethod.match(charOnly))
    {
      toast.error("Please enter a valid Payment Method");
      return;
    }


    if(!finalMouData.Termination.TerminationConditions)
    {
      toast.error("Please enter a Valid Termination Conditions");
      return;
    }
    if(!finalMouData.Termination.Date)
    {
      toast.error("Please enter a valid termination Date");
      return;
    }

    try {
      // process.env.API_SERVER check the env file
      const response = await Axios.post(ApiUrls['MouCreate'], finalMouData);
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
        {/* Include the sidebar component */}
        <Sidebar />
        <Toaster richColors position='top-center'/>
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
          <textarea
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
          <textarea
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
          <textarea
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
        

  );
};

export default MouCreate;
