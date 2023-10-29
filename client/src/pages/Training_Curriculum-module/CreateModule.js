import React, { useState } from 'react';
import Navbar from '../Includes/Navbar';
import Sidebar from '../Includes/Sidebar';

/// create module
const module = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [moduleData, setModuleData] = useState({
        name:'',
        startDate:'',
        endDate:'',
        selectCuricullum:'',
      });

      const handleSubmit = (e) => {
        e.preventDefault();
        // API call to backend
        console.log('Module Data',moduleData)
      };

  return (
    <div className="container1">
    <div className="min-height-300 bg-primary position-absolute w-100"></div>
        <Sidebar />
      <div className="shadow-lg p-5 mr-5 ml-5 bg-body rounded main-content position-relative ">
      <Navbar />
      <div className=''>
        <div className='col-md-12'>
            <h5 class="text-secondary">Select College</h5>
            <br/>
        <div class="col-md-10">
            <div class="form-group">
                <label class="form-label">Enter Module Name</label>
                <input class="form-control" type="text" name="mname"  required
                    onChange={(e) => setModuleData({ ...moduleData, name: e.target.value })}
                />
                </div>
                </div>
                <br/>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-label">Module Start Date</label>
                        <input class="form-control" type="date" name="sdate" required
                            onChange={(e) => setModuleData({ ...moduleData, startDate: e.target.value })}
                        />
                        </div>
                </div>
                <br/>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-label">Module End Date</label>
                        <input class="form-control" type="date" name="edate" required
                        onChange={(e) => setModuleData({ ...moduleData, endDate: e.target.value })}
                        />
                        </div>
                </div>
                <br/>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-label">Select Curicullum</label>
                        <select class="form-select" 
                        onChange={(e) => setModuleData({ ...moduleData, selectCuricullum: e.target.value })}
                        >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                </div>
                </div>
                <br/>
            <button class="btn btn-primary " type="submit" name="submit" onClick={handleSubmit} >Submit </button>
        </div>
        </div>
      </div>
    </div>
  );
}



export default module;


