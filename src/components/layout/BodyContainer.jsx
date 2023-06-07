import { React, useState } from 'react';
import SideNavbar from './SideNavbar';
import UserReadsTable from './UserReadsTable';
import PaginationComponent from '../shared/PaginationComponent';

function BodyContainer() {
  const [activeItem, setActiveItem] = useState('all');

  const handleNavbarItemClick = (item) => {
    setActiveItem(item);
  };
  console.log(activeItem);
  return (
    <div>
      <div className="container-fluid min-vh-100 d-flex flex-column">
        <div className="row"></div>
        <div className="row flex-grow-1 mt-2">
          <div className="col-md-2  ">
            <SideNavbar
              activeItem={activeItem}
              onNavbarItemClick={handleNavbarItemClick}
            ></SideNavbar>
          </div>
          <div className="col-md-10 ">
            <div className="container">
              <fieldset className="border rounded-3">
                <legend className="float-none w-auto px-3">{activeItem}</legend>
                <UserReadsTable
                  activeItem={activeItem}
                  onNavbarItemClick={handleNavbarItemClick}
                ></UserReadsTable>
                <div className="d-flex justify-content-center align-items-center">
                  <PaginationComponent></PaginationComponent>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyContainer;
