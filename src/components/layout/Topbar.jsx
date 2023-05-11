import React from 'react';
import { Button } from 'react-bootstrap';

function Topbar() {
  return (
    <header className="container-fluid bg-dark text-light px-0 ">
      {/* <div className="row gx-0  d-lg-flex">
        <div className="col-lg-7 px-5 text-start">
          <div className="h-100 d-inline-flex align-items-center">
            <span>Welcome Abdelrahman</span>
          </div>
        </div>
        <div className="col-lg-5 px-5 text-end">
          <div className="h-100 d-inline-flex align-items-center mx-n2">
            <span>Follow Us:</span>
            <a className="btn btn-link text-light" href="assa">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-link text-light" href="asas">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-link text-light" href="asas">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="btn btn-link text-light" href="saas">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div> */}
      <div className="d-flex justify-content-between align-items-baseline mx-4 ">
        <div>
          <p>
            Welcome <span>Abdelrahman</span>
          </p>
        </div>
        <Button variant="transparent">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQF7MPtZpSGufw/profile-displayphoto-shrink_800_800/0/1664541894707?e=1689206400&v=beta&t=4HiQIxOxoSM-a52BCRSqHMr1TL6bntBPNJ-3_opwlLY"
            alt="avatar"
            className="avatar"
          />
        </Button>
      </div>
    </header>
  );
}

export default Topbar;
