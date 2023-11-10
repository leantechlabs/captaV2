
import React, { useState ,useRef} from 'react';
import Axios from 'axios';
import Layout from '../Layout/Layout';
import ScriptSection from '../Includes/ScriptSection';
import Navbar from '../Includes/Navbar';
import Sidebar from '../Includes/Sidebar';
import ApiUrls from '../Includes/corsUrls';
import DOMPurify from 'dompurify';
import { Toaster, toast } from 'sonner';
import { Editor } from '@tinymce/tinymce-react';

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
      NatureRelationship: `a) This MOU is for collaboration between both parties, for mutual benefit, for many purposes to enhance the quality of the educational experience for students of the college.

      b) This MOU shall be valid for three years from the date of signing of MOU and each party shall be at full liberty to terminate the collaboration with a notice period of 1 month.

      c) Both parties shall take all reasonable steps to ensure successful completion of the collaboration and cooperate with each other in duly carrying out the obligation agreed upon.

      d) The second party shall provide all the necessary facilities such as infrastructure, Network and Internet Access required for education and training as training is conducted in the college.
    `,
      MutualObligation: `a) This Collaboration shall not be exclusive to both parties and shall not disallow each party from having similar collaboration with others. Except as expressly stated in this MOU, there shall be no obligation on any party to compensate the other in any manner to make any claim.

b) Each party shall respect the others intellectual property (IP) and shall not use any trade name, trade mark, symbol or designation belonging to the other, without prior written approval. No party shall hold out as an agent or representative of the other or create any liability for the other.

c) Both parties shall maintain confidentiality about any information, plans, discussions, strategies or any material which shall be deemed to be confidential and marked accordingly.

d) Both the Parties should not interact with faculties provided by each other except for the purpose of the training program and should not hire or offer any other financial proposals to the aforesaid during the period of training program and for one year after completion of the training.
`,
      LimitationsWarranties: `
      a) Each party shall ensure that the other is not put to any liability for any actions of the one party.

      b)Each party represents that they have the full power and authority to enter into this MOU in general.
      `,
    },
    General: `
    a) Both parties will designate a representative from its side who will be the primary point of contact on behalf of that party.

    b) COIGN will provide the list of faculties who will be involved in the training program.
    
    c) COIGN will provide schedules for all the training programs and tests.
    
    d) COIGN will be submitting the reports for all the examinations on time to time basis.
    
    e) COIGN  to submit student progress report on regular basis
    
    f) College will provide the Labs with Internet facility for the conduction of the examinations for the students in case of offline training program
    
    h) COIGN will be responsible for the smooth handling of the college properties like Projector, Mic, Sound systems and COIGN will be held responsible for repairing the same in case of any damage.
    
    i) College is responsible for the conduction of the interim examinations for the students as per schedule.
    
    j) College is responsible for taking and maintaining the attendance of the students for the training program.
    
    l) College has to provide lunch & transport facility to the faculty coming for the training program.
    
    m) Both parties shall not use the name of the other in any advertisement or make any public announcement without the prior written approval of the other.
    
    n) Any dispute under this MOU will be settled in Hyderabad through arbitration, if necessary. In witness where both the parties have set their hands to this MOU on the 3rd-August-2016at Hyderabad.`,
    PurposeScope: {
      Details: `a) "M/S. COIGN CONSULTANTS PVT. LTD".  i.e. First Party shall conduct a Pre-Training Assessment Test and based on the results of the Assessment Test the students will be selected into 8 batches. 
      b) "M/S. COIGN CONSULTANTS PVT. LTD".  i.e. First Party shall conduct 132 hours “Campus Recruitment Training” for 8 batches starting from 3rd year-2 Semester for the students in our college.
      c) "M/S. COIGN CONSULTANTS PVT. LTD".  i.e. First Party will conduct regular assessments at the end of each module during the training program.
      d) "M/S. COIGN CONSULTANTS PVT. LTD".  i.e. First Party will conduct end of phase assessments and submit the reports of the progress of students to the college.`,
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
      TerminationConditions: `a) This contract will be terminated based on the consensus of both parties.
      b) If the contract is terminated, payment due for hours worked must be paid to the First Party i.e. training provider COIGN CONSULTANTS PVT. LTD.
      `,
      PaymentDue: '',
    },
  };

  const [mouData, setMOUData] = useState(initialMOUData);
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name.includes('.')) {
      const [section, field] = name.split('.');
      setMOUData((prevData) => ({
        ...prevData,
        [section]: {
          ...prevData[section],
          [field]: value,
        },
      }));
    } else {
      setMOUData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const finalMouData = {
    Date: DOMPurify.sanitize(mouData.Date).trim(),
    Location: DOMPurify.sanitize(mouData.Location).trim(),
    FirstParty: {
      Name: DOMPurify.sanitize(mouData.FirstParty.Name).trim(),
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
    General:DOMPurify.sanitize(mouData.General),
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
  const charNum = /^[a-zA-Z0-9]*$/;
  const uppercaseNum = /^[A-Z0-9]*$/;
  const nums = /^[0-9]*$/;

  const mailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleSubmit = async () => {
    if (!finalMouData.Date) {
      toast.error('Please enter Date');
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
    // if(!finalMouData.SecondParty.Address || !finalMouData.SecondParty.Address.match(charNum))
    // {
    //   toast.error("Please enter a  valid Second Party Address ");
    //   return;
    // }
    if(!finalMouData.SecondParty.Representative || !finalMouData.SecondParty.Representative.match(charOnly))
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

    // if(!finalMouData.PaymentTerms.FirstInstallment.AmountPerStudent || !finalMouData.PaymentTerms.FirstInstallment.match(nums))
    // {
    //   toast.error("Please enter a valid First Installment");
    //   return;
    // }
    // if(!finalMouData.PaymentTerms.SecondInstallment.AmountPerStudent || !finalMouData.PaymentTerms.SecondInstallment.match(nums))
    // {
    //   toast.error("Please enter a valid Second Installment");
    //   return;
    // }
    // if(!finalMouData.PaymentTerms.ThirdInstallment.AmountPerStudent || !finalMouData.PaymentTerms.ThirdInstallment.match(nums))
    // {
    //   toast.error("Please enter a valid Third Installment");
    //   return;
    // }
    // if(!finalMouData.PaymentTerms.FinalInstallment.AmountPerStudent || !finalMouData.PaymentTerms.FinalInstallment.match(nums))
    // {
    //   toast.error("Please enter a valid Final Installment");
    //   return;
    // }
    // if(!finalMouData.PaymentTerms.PaymentMethod.AmountPerStudent || !finalMouData.PaymentTerms.PaymentMethod.match(charOnly))
    // {
    //   toast.error("Please enter a valid Payment Method");
    //   return;
    // }


    if(!finalMouData.Termination.TerminationConditions)
    {
      toast.error("Please enter a Valid Termination Conditions");
      return;
    }
    // if(!finalMouData.Termination.Date)
    // {
    //   toast.error("Please enter a valid termination Date");
    //   return;
    // }

    try {
      const response = await Axios.post(ApiUrls['MouCreate'], finalMouData);
      console.log('Server response:', response.data);
      setMessage('Data submitted successfully');
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to submit data');
    }
  };
 const handleEditorChange = (content, editor) => {
    const name = editor.id;
    setMOUData((prevData) => ({
      ...prevData,
      [name]: DOMPurify.sanitize(content).trim(),
    }));
  };
  const editorRef = useRef(null);


  return (
    <div className="bg-gray-100 g-sidenav-show">
      <div className="min-height-300 bg-primary position-absolute w-100">  <Toaster richColors position="top-center" /></div>
      <Sidebar />
    
      <main className="main-content position-relative border-radius-lg">
        <Navbar />
        <div className="container-fluid py-4 ">
          <div className="card">
            <div className="card-body">
              <p className="text-uppercase text-sm">MOU Form</p>
              {message && (
                <div className="alert alert-custom" role="alert">
                  <span>{message}</span>
                </div>
              )}
              <div className="form-group">
                <label htmlFor="Date" className="form-control-label">
                  Date:
                </label>
                <input
                  className="form-control"
                  type="date"
                  id="Date"
                  name="Date"
                  value={mouData.Date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Location" className="form-control-label">
                  Location:
                </label>
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
        <div className="form-group">
          <label htmlFor="General" className="form-control-label">General:</label>
          <textarea
          height="200"
            className="form-control"
            type="text"
            id="General"
            name="General"
            value={mouData.General}
            onChange={handleInputChange}
          />
        </div>
        <p className="text-uppercase text-sm">Purpose and Scope</p>
        <div className="form-group">
          <label htmlFor="PurposeScope.Details" className="form-control-label">Details:</label>
          <textarea
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
          <textarea
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

export default MouCreate;
