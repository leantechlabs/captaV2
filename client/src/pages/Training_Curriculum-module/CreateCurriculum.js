import React, { useState } from 'react'
import Sidebar from '../Includes/Sidebar';
import Navbar from '../Includes/Navbar';

const Curriculum = () => {
  const [curriculumData,setCurriculumData] = useState({
    name:'',
    totalHours:'',
    totalDays:'',
  });


  const handleSubmit=(e)=>{
    e.preventDefault();
    // api implements to backend
    console.log(curriculumData)
  }

  
  return (
    <div className="bg-gray-100 g-sidenav-show">
    <div className="min-height-300 bg-primary position-absolute w-100"></div>
    <Sidebar />
    <div className="container-fluid py-4">
    <Navbar/>
    <div className="col-md-12 d-flex justify-content-center">
      <div className="p-3 shadow-lg p-5 mb-5 bg-body rounded main-content position-relative">
      <h6 className="text-secondary">CURRICULUM INFORMATION</h6>
      <br/>
        <div>
        <div className="row">
    
            <div className="form-group m-1">
                <label className="form-label">Enter Curriculum Name</label>
                <input className="form-control" type="text" name="cname" required
                  onChange={(e) => setCurriculumData({ ...curriculumData, name: e.target.value })}
                />
              </div>
              <br/>
              <div className="form-group">
                <label className="form-label ">Total Hours</label>
                <input className="form-control" type="text" name="hours"   required
                  onChange={(e) => setCurriculumData({ ...curriculumData, totalHours: e.target.value })}
                />
              </div>
              <br/>
              <div className="form-group">
                <label className="form-label">Total Days</label>
                <input className="form-control" type="number" name="days"  required
                  onChange={(e) => setCurriculumData({ ...curriculumData, totalDays: e.target.value })}
                />
              </div>    
              <br/>     
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <label className="form-label text-gray">Upload Excel Curriculum </label>
                      <p className="text-secondary">Download Sample Excel Format <span>Download Here</span></p>
                      <input className="form-control" type="file" name="excel"  required
                        onChange={(e) => setCurriculumData({ ...curriculumData, file: e.target.value })}
                      />
                    </div>
              </div>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Curriculum
