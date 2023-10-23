const ModuleItem = ({ title, hours, status, trainers }) => (
  <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
    <div className="d-flex align-items-center">
      <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
        <i className="ni ni-mobile-button text-white opacity-10"></i>
      </div>
      <div className="d-flex flex-column">
        <h6 className="mb-1 text-dark text-sm">{title}</h6>
        <span className="text-xs">
          {hours} Hours <span className="font-weight-bold">{status}</span>
          <br />
          <span>{trainers} Trainers Deployed</span>
        </span>
      </div>
    </div>
    <div className="d-flex">
      <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
        <i className="ni ni-bold-right" aria-hidden="true"></i>
      </button>
    </div>
  </li>
);

export default ModuleItem;
