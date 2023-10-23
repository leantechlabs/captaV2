import React, { useState } from 'react';
import axios from 'axios';
import Layout from './Layout';
import ScriptSection from './ScriptSection';
import Navbar from './Navbar';

const ModuleConfirmationSheet = () => {
  const [collegeName, setCollegeName] = useState('');
  const [pocName, setPocName] = useState('');
  const [designation, setDesignation] = useState('');
  const [pocEmail, setPocEmail] = useState('');
  const [pocContact, setPocContact] = useState('');
  const [address, setAddress] = useState('');
  const [suitableTransport, setSuitableTransport] = useState('');
  const [food, setFood] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [localTransport, setLocalTransport] = useState('');
  const [majorTransport, setMajorTransport] = useState('');
  const [previousVendor, setPreviousVendor] = useState('');
  const [feedback, setFeedback] = useState('');
  const [interestGoals, setInterestGoals] = useState('');
  const [day1Company, setDay1Company] = useState('');
  const [otherCompanies, setOtherCompanies] = useState('');
  const [moduleName, setModuleName] = useState('');
  const [hoursPerBatch, setHoursPerBatch] = useState('');
  const [modulesCovered, setModulesCovered] = useState('');
  const [executionType, setExecutionType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numStudents, setNumStudents] = useState('');
  const [numBatches, setNumBatches] = useState('');
  const [startPreferredTimings, setStartPreferredTimings] = useState('');
  const [endPreferredTimings, setEndPreferredTimings] = useState('');
  const [marketingPerson, setMarketingPerson] = useState('');
  const [marketingContact, setMarketingContact] = useState('');
  const [marketingEmail, setMarketingEmail] = useState('');
  const [trainingManager, setTrainingManager] = useState('');
  const [trainingContact, setTrainingContact] = useState('');
  const [trainingEmail, setTrainingEmail] = useState('');
  const [unitBasis, setUnitBasis] = useState('');
  const [unitCost, setUnitCost] = useState('');
  const [numUnits, setNumUnits] = useState('');
  const [totalCost, setTotalCost] = useState('');
  const [gst, setGst] = useState('');
  const [grossIncome, setGrossIncome] = useState('');
  const [tds, setTds] = useState('');
  const [amountToCoignAccount, setAmountToCoignAccount] = useState('');
  const [instackExams, setInstackExams] = useState('');
  const [instackMonths, setInstackMonths] = useState('');
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [totalDaysTraining, setTotalDaysTraining] = useState('');
  const [perDayPerTrainer, setPerDayPerTrainer] = useState('');
  const [totalContractValueBatch, setTotalContractValueBatch] = useState('');
  const [totalTrainingHours, setTotalTrainingHours] = useState('');
  const [companySpecificHours, setCompanySpecificHours] = useState('');
  const [totalHours, setTotalHours] = useState('');
  const [perHourPerBatch, setPerHourPerBatch] = useState('');
  const [perDayPerBatch, setPerDayPerBatch] = useState('');
  const [totalStudents, setTotalStudents] = useState('');
  const [totalBatches, setTotalBatches] = useState('');
  const [totalTrainingDays, setTotalTrainingDays] = useState('');
  const [totalContractValueCOIGN, setTotalContractValueCOIGN] = useState('');
  const [numberOfTrainers, setNumberOfTrainers] = useState('');
  const [perHeadPerDay, setPerHeadPerDay] = useState('');
  const [numberOfDaysPerTrainer, setNumberOfDaysPerTrainer] = useState('');
  const [portalCostPerStudent, setPortalCostPerStudent] = useState('');
  const [numberOfStudents, setNumberOfStudents] = useState('');
  const [travelling, setTravelling] = useState('');
  const [commission, setCommission] = useState('');
  const [indirectExpenses, setIndirectExpenses] = useState('');
  const [totalExpenses, setTotalExpenses] = useState('');
  const [totalProfit, setTotalProfit] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('collegeName', collegeName);
    formData.append('pocName', pocName);
    formData.append('designation', designation);
    formData.append('pocEmail', pocEmail);
    formData.append('pocContact', pocContact);
    formData.append('address', address);
    formData.append('suitableTransport', suitableTransport);
    formData.append('food', food);
    formData.append('accommodation', accommodation);
    formData.append('localTransport', localTransport);
    formData.append('majorTransport', majorTransport);
    formData.append('previousVendor', previousVendor);
    formData.append('feedback', feedback);
    formData.append('interestGoals', interestGoals);
    formData.append('day1Company', day1Company);
    formData.append('moduleName', moduleName);
    formData.append('hoursPerBatch', hoursPerBatch);
    formData.append('modulesCovered', modulesCovered);
    formData.append('executionType', executionType);
    formData.append('startDate', startDate);
    formData.append('endDate', endDate);
    formData.append('numStudents', numStudents);
    formData.append('numBatches', numBatches);
    formData.append('startPreferredTimings', startPreferredTimings);
    formData.append('endPreferredTimings', endPreferredTimings);
    formData.append('marketingPerson', marketingPerson);
    formData.append('marketingContact', marketingContact);
    formData.append('marketingEmail', marketingEmail);
    formData.append('trainingManager', trainingManager);
    formData.append('trainingContact', trainingContact);
    formData.append('trainingEmail', trainingEmail);
    formData.append('unitBasis', unitBasis);
    formData.append('unitCost', unitCost);
    formData.append('numUnits', numUnits);
    formData.append('totalCost', totalCost);
    formData.append('gst', gst);
    formData.append('grossIncome', grossIncome);
    formData.append('tds', tds);
    formData.append('amountToCoignAccount', amountToCoignAccount);
    formData.append('instackExams', instackExams);
    formData.append('instackMonths', instackMonths);
    formData.append('income', income);
    formData.append('expenses', expenses);
    formData.append('totalDaysTraining', totalDaysTraining);
    formData.append('perDayPerTrainer', perDayPerTrainer);
    formData.append('totalContractValueBatch', totalContractValueBatch);
    formData.append('totalTrainingHours', totalTrainingHours);
    formData.append('companySpecificHours', companySpecificHours);
    formData.append('totalHours', totalHours);
    formData.append('perHourPerBatch', perHourPerBatch);
    formData.append('perDayPerBatch', perDayPerBatch);
    formData.append('totalStudents', totalStudents);
    formData.append('totalBatches', totalBatches);
    formData.append('totalTrainingDays', totalTrainingDays);
    formData.append('totalContractValueCOIGN', totalContractValueCOIGN);
    formData.append('numberOfTrainers', numberOfTrainers);
    formData.append('perHeadPerDay', perHeadPerDay);
    formData.append('numberOfDaysPerTrainer', numberOfDaysPerTrainer);
    formData.append('portalCostPerStudent', portalCostPerStudent);
    formData.append('numberOfStudents', numberOfStudents);
    formData.append('travelling', travelling);
    formData.append('commission', commission);
    formData.append('indirectExpenses', indirectExpenses);
    formData.append('totalExpenses', totalExpenses);
    formData.append('totalProfit', totalProfit);

    axios
      .post('/module-confirmation', formData, {
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
    <div className="g-sidenav-show bg-gray-100">
      <Layout />
      <div className="min-height-300 bg-primary position-absolute w-100"></div>
      <Navbar />
      <div className="card">
        <div className="card-body">
          <p className="text-uppercase text-sm">Module Confirmation Information</p>
          {message && (
            <div className="alert alert-custom" role="alert">
              <span>{message}</span>
            </div>
          )}
          <div className="form-group">
            <label htmlFor="collegeName" className="form-control-label">
              College Name:
            </label>
            <input
              className="form-control"
              type="text"
              id="collegeName"
              name="collegeName"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pocName" className="form-control-label">
              Point of Contact (POC) Name:
            </label>
            <input
              className="form-control"
              type="text"
              id="pocName"
              name="pocName"
              value={pocName}
              onChange={(e) => setPocName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="designation" className="form-control-label">
              Designation of the POC:
            </label>
            <input
              className="form-control"
              type="text"
              id="designation"
              name="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pocEmail" className="form-control-label">
              Email of the POC:
            </label>
            <input
              className="form-control"
              type="email"
              id="pocEmail"
              name="pocEmail"
              value={pocEmail}
              onChange={(e) => setPocEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pocContact" className="form-control-label">
              Contact number of the POC:
            </label>
            <input
              className="form-control"
              type="text"
              id="pocContact"
              name="pocContact"
              value={pocContact}
              onChange={(e) => setPocContact(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address" className="form-control-label">
              Address of the College:
            </label>
            <input
              className="form-control"
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="suitableTransport" className="form-control-label">
              Details about Suitable Transport:
            </label>
            <input
              className="form-control"
              type="text"
              id="suitableTransport"
              name="suitableTransport"
              value={suitableTransport}
              onChange={(e) => setSuitableTransport(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="food" className="form-control-label">
              Details about Food Arrangements:
            </label>
            <input
              className="form-control"
              type="text"
              id="food"
              name="food"
              value={food}
              onChange={(e) => setFood(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="accommodation" className="form-control-label">
              Details about Accommodation:
            </label>
            <input
              className="form-control"
              type="text"
              id="accommodation"
              name="accommodation"
              value={accommodation}
              onChange={(e) => setAccommodation(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="localTransport" className="form-control-label">
              Details about Local Transport:
            </label>
            <input
              className="form-control"
              type="text"
              id="localTransport"
              name="localTransport"
              value={localTransport}
              onChange={(e) => setLocalTransport(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="majorTransport" className="form-control-label">
              Details about Major Transport:
            </label>
            <input
              className="form-control"
              type="text"
              id="majorTransport"
              name="majorTransport"
              value={majorTransport}
              onChange={(e) => setMajorTransport(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="previousVendor" className="form-control-label">
              Details about Previous Vendor:
            </label>
            <input
              className="form-control"
              type="text"
              id="previousVendor"
              name="previousVendor"
              value={previousVendor}
              onChange={(e) => setPreviousVendor(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="feedback" className="form-control-label">
              Feedback about the Training:
            </label>
            <textarea
              className="form-control"
              id="feedback"
              name="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="interestGoals" className="form-control-label">
              Goals and Interests related to the Training:
            </label>
            <textarea
              className="form-control"
              id="interestGoals"
              name="interestGoals"
              value={interestGoals}
              onChange={(e) => setInterestGoals(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="day1Company" className="form-control-label">
              Company Involved on the First Day:
            </label>
            <input
              className="form-control"
              type="text"
              id="day1Company"
              name="day1Company"
              value={day1Company}
              onChange={(e) => setDay1Company(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="otherCompanies" className="form-control-label">
              Details about other involved companies:
            </label>
            <input
              className="form-control"
              type="text"
              id="otherCompanies"
              name="otherCompanies"
              value={otherCompanies}
              onChange={(e) => setOtherCompanies(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="moduleName" className="form-control-label">
              Name of the Training Module:
            </label>
            <input
              className="form-control"
              type="text"
              id="moduleName"
              name="moduleName"
              value={moduleName}
              onChange={(e) => setModuleName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="hoursPerBatch" className="form-control-label">
              Hours Allocated per Batch for Training:
            </label>
            <input
              className="form-control"
              type="number"
              id="hoursPerBatch"
              name="hoursPerBatch"
              value={hoursPerBatch}
              onChange={(e) => setHoursPerBatch(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="modulesCovered" className="form-control-label">
              Details about Covered Modules in Training:
            </label>
            <input
              className="form-control"
              type="text"
              id="modulesCovered"
              name="modulesCovered"
              value={modulesCovered}
              onChange={(e) => setModulesCovered(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="executionType" className="form-control-label">
              Type of Execution (e.g., in-person, online):
            </label>
            <select
              className="form-control"
              id="executionType"
              name="executionType"
              value={executionType}
              onChange={(e) => setExecutionType(e.target.value)}
            >
              <option value="in-person">In-Person</option>
              <option value="online">Online</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="startDate" className="form-control-label">
              Start Date of the Training Module:
            </label>
            <input
              className="form-control"
              type="date"
              id="startDate"
              name="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate" className="form-control-label">
              End Date of the Training Module:
            </label>
            <input
              className="form-control"
              type="date"
              id="endDate"
              name="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="numStudents" className="form-control-label">
              Number of Students Participating:
            </label>
            <input
              className="form-control"
              type="number"
              id="numStudents"
              name="numStudents"
              value={numStudents}
              onChange={(e) => setNumStudents(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="numBatches" className="form-control-label">
              Number of Batches for the Training:
            </label>
            <input
              className="form-control"
              type="number"
              id="numBatches"
              name="numBatches"
              value={numBatches}
              onChange={(e) => setNumBatches(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="startPreferredTimings" className="form-control-label">
              Preferred Start Timings for the Training:
            </label>
            <input
              className="form-control"
              type="time"
              id="startPreferredTimings"
              name="startPreferredTimings"
              value={startPreferredTimings}
              onChange={(e) => setStartPreferredTimings(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="endPreferredTimings" className="form-control-label">
              Preferred End Timings for the Training:
            </label>
            <input
              className="form-control"
              type="time"
              id="endPreferredTimings"
              name="endPreferredTimings"
              value={endPreferredTimings}
              onChange={(e) => setEndPreferredTimings(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="marketingPerson" className="form-control-label">
              Name of the Marketing Person:
            </label>
            <input
              className="form-control"
              type="text"
              id="marketingPerson"
              name="marketingPerson"
              value={marketingPerson}
              onChange={(e) => setMarketingPerson(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="marketingContact" className="form-control-label">
              Contact number of the Marketing Person:
            </label>
            <input
              className="form-control"
              type="text"
              id="marketingContact"
              name="marketingContact"
              value={marketingContact}
              onChange={(e) => setMarketingContact(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="marketingEmail" className="form-control-label">
              Email of the Marketing Person:
            </label>
            <input
              className="form-control"
              type="email"
              id="marketingEmail"
              name="marketingEmail"
              value={marketingEmail}
              onChange={(e) => setMarketingEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="trainingManager" className="form-control-label">
              Name of the Training Manager:
            </label>
            <input
              className="form-control"
              type="text"
              id="trainingManager"
              name="trainingManager"
              value={trainingManager}
              onChange={(e) => setTrainingManager(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="trainingContact" className="form-control-label">
              Contact number of the Training Manager:
            </label>
            <input
              className="form-control"
              type="text"
              id="trainingContact"
              name="trainingContact"
              value={trainingContact}
              onChange={(e) => setTrainingContact(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="trainingEmail" className="form-control-label">
              Email of the Training Manager:
            </label>
            <input
              className="form-control"
              type="email"
              id="trainingEmail"
              name="trainingEmail"
              value={trainingEmail}
              onChange={(e) => setTrainingEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="unitBasis" className="form-control-label">
              Basis for Calculating Units:
            </label>
            <input
              className="form-control"
              type="text"
              id="unitBasis"
              name="unitBasis"
              value={unitBasis}
              onChange={(e) => setUnitBasis(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="unitCost" className="form-control-label">
              Cost per Unit:
            </label>
            <input
              className="form-control"
              type="number"
              id="unitCost"
              name="unitCost"
              value={unitCost}
              onChange={(e) => setUnitCost(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="numUnits" className="form-control-label">
              Number of Units:
            </label>
            <input
              className="form-control"
              type="number"
              id="numUnits"
              name="numUnits"
              value={numUnits}
              onChange={(e) => setNumUnits(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="totalCost" className="form-control-label">
              Total Cost:
            </label>
            <input
              className="form-control"
              type="number"
              id="totalCost"
              name="totalCost"
              value={totalCost}
              onChange={(e) => setTotalCost(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gst" className="form-control-label">
              Goods and Services Tax (GST):
            </label>
            <input
              className="form-control"
              type="number"
              id="gst"
              name="gst"
              value={gst}
              onChange={(e) => setGst(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="grossIncome" className="form-control-label">
              Gross Income from the Training:
            </label>
            <input
              className="form-control"
              type="number"
              id="grossIncome"
              name="grossIncome"
              value={grossIncome}
              onChange={(e) => setGrossIncome(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tds" className="form-control-label">
              Tax Deducted at Source (TDS):
            </label>
            <input
              className="form-control"
              type="number"
              id="tds"
              name="tds"
              value={tds}
              onChange={(e) => setTds(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amountToCoignAccount" className="form-control-label">
              Amount Transferred to Coign's Account:
            </label>
            <input
              className="form-control"
              type="number"
              id="amountToCoignAccount"
              name="amountToCoignAccount"
              value={amountToCoignAccount}
              onChange={(e) => setAmountToCoignAccount(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="instackExams" className="form-control-label">
              Indicator for INSTACK Exams:
            </label>
            <input
              className="form-control"
              type="text"
              id="instackExams"
              name="instackExams"
              value={instackExams}
              onChange={(e) => setInstackExams(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="instackMonths" className="form-control-label">
              Number of Months for INSTACK Exams:
            </label>
            <input
              className="form-control"
              type="number"
              id="instackMonths"
              name="instackMonths"
              value={instackMonths}
              onChange={(e) => setInstackMonths(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="income" className="form-control-label">
              Total Income from the Training:
            </label>
            <input
              className="form-control"
              type="number"
              id="income"
              name="income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expenses" className="form-control-label">
              Total Expenses for the Training:
            </label>
            <input
              className="form-control"
              type="number"
              id="expenses"
              name="expenses"
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="totalDaysTraining" className="form-control-label">
              Total Number of Training Days:
            </label>
            <input
              className="form-control"
              type="number"
              id="totalDaysTraining"
              name="totalDaysTraining"
              value={totalDaysTraining}
              onChange={(e) => setTotalDaysTraining(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="perDayPerTrainer" className="form-control-label">
              Cost per Day per Trainer:
            </label>
            <input
              className="form-control"
              type="number"
              id="perDayPerTrainer"
              name="perDayPerTrainer"
              value={perDayPerTrainer}
              onChange={(e) => setPerDayPerTrainer(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="totalContractValueBatch" className="form-control-label">
              Total Contract Value per Batch:
            </label>
            <input
              className="form-control"
              type="number"
              id="totalContractValueBatch"
              name="totalContractValueBatch"
              value={totalContractValueBatch}
              onChange={(e) => setTotalContractValueBatch(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="totalTrainingHours" className="form-control-label">
              Total Training Hours:
            </label>
            <input
              className="form-control"
              type="number"
              id="totalTrainingHours"
              name="totalTrainingHours"
              value={totalTrainingHours}
              onChange={(e) => setTotalTrainingHours(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="companySpecificHours" className="form-control-label">
              Company-Specific Training Hours:
            </label>
            <input
              className="form-control"
              type="number"
              id="companySpecificHours"
              name="companySpecificHours"
              value={companySpecificHours}
              onChange={(e) => setCompanySpecificHours(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="totalHours" className="form-control-label">
              Total Hours for Training:
            </label>
            <input
              className="form-control"
              type="number"
              id="totalHours"
              name="totalHours"
              value={totalHours}
              onChange={(e) => setTotalHours(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="perHourPerBatch" className="form-control-label">
              Cost per Hour per Batch:
            </label>
            <input
              className="form-control"
              type="number"
              id="perHourPerBatch"
              name="perHourPerBatch"
              value={perHourPerBatch}
              onChange={(e) => setPerHourPerBatch(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="perDayPerBatch" className="form-control-label">
              Cost per Day per Batch:
            </label>
            <input
              className="form-control"
              type="number"
              id="perDayPerBatch"
              name="perDayPerBatch"
              value={perDayPerBatch}
              onChange={(e) => setPerDayPerBatch(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="totalStudents" className="form-control-label">
              Total Number of Students:
            </label>
            <input
              className="form-control"
              type="number"
              id="totalStudents"
              name="totalStudents"
              value={totalStudents}
              onChange={(e) => setTotalStudents(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="totalBatches" className="form-control-label">
              Total Number of Batches:
            </label>
            <input
              className="form-control"
              type="number"
              id="totalBatches"
              name="totalBatches"
              value={totalBatches}
              onChange={(e) => setTotalBatches(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="totalTrainingDays" className="form-control-label">
              Total Training Days:
            </label>
            <input
              className="form-control"
              type="number"
              id="totalTrainingDays"
              name="totalTrainingDays"
              value={totalTrainingDays}
              onChange={(e) => setTotalTrainingDays(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="totalContractValueCOIGN" className="form-control-label">
              Total Contract Value for COIGN:
            </label>
            <input
              className="form-control"
              type="number"
              id="totalContractValueCOIGN"
              name="totalContractValueCOIGN"
              value={totalContractValueCOIGN}
              onChange={(e) => setTotalContractValueCOIGN(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfTrainers" className="form-control-label">
              Number of Trainers:
            </label>
            <input
              className="form-control"
              type="number"
              id="numberOfTrainers"
              name="numberOfTrainers"
              value={numberOfTrainers}
              onChange={(e) => setNumberOfTrainers(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="perHeadPerDay" className="form-control-label">
              Cost per Head per Day:
            </label>
            <input
              className="form-control"
              type="number"
              id="perHeadPerDay"
              name="perHeadPerDay"
              value={perHeadPerDay}
              onChange={(e) => setPerHeadPerDay(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfDaysPerTrainer" className="form-control-label">
              Number of Days per Trainer:
            </label>
            <input
              className="form-control"
              type="number"
              id="numberOfDaysPerTrainer"
              name="numberOfDaysPerTrainer"
              value={numberOfDaysPerTrainer}
              onChange={(e) => setNumberOfDaysPerTrainer(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="portalCostPerStudent" className="form-control-label">
              Portal Cost per Student:
            </label>
            <input
              className="form-control"
              type="number"
              id="portalCostPerStudent"
              name="portalCostPerStudent"
              value={portalCostPerStudent}
              onChange={(e) => setPortalCostPerStudent(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfStudents" className="form-control-label">
              Number of Students:
            </label>
            <input
              className="form-control"
              type="number"
              id="numberOfStudents"
              name="numberOfStudents"
              value={numberOfStudents}
              onChange={(e) => setNumberOfStudents(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="travelling" className="form-control-label">
              Travelling Cost:
            </label>
            <input
              className="form-control"
              type="number"
              id="travelling"
              name="travelling"
              value={travelling}
              onChange={(e) => setTravelling(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="commission" className="form-control-label">
              Commission Cost:
            </label>
            <input
              className="form-control"
              type="number"
              id="commission"
              name="commission"
              value={commission}
              onChange={(e) => setCommission(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="indirectExpenses" className="form-control-label">
              Indirect Expenses:
            </label>
            <input
              className="form-control"
              type="number"
              id="indirectExpenses"
              name="indirectExpenses"
              value={indirectExpenses}
              onChange={(e) => setIndirectExpenses(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="totalExpenses" className="form-control-label">
              Total Expenses:
            </label>
            <input
              className="form-control"
              type="number"
              id="totalExpenses"
              name="totalExpenses"
              value={totalExpenses}
              onChange={(e) => setTotalExpenses(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="totalProfit" className="form-control-label">
              Total Profit:
            </label>
            <input
              className="form-control"
              type="number"
              id="totalProfit"
              name="totalProfit"
              value={totalProfit}
              onChange={(e) => setTotalProfit(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <ScriptSection />
    </div>
  );
};

export default ModuleConfirmationSheet;
