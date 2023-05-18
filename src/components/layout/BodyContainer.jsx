import React from "react";
import SideNavbar from "./SideNavbar";
import UserReadsTable from "./UserReadsTable";

function BodyContainer() {
  return (
    <div>
      <div class="container-fluid min-vh-100 d-flex flex-column">
        <div class="row"></div>
        <div class="row flex-grow-1 mt-2">
          <div class="col-md-2  ">
            <SideNavbar></SideNavbar>
          </div>
          <div class="col-md-10 ">
            <div class="container">
              <fieldset class="border rounded-3 p-3">
                <legend class="float-none w-auto px-3">
                  Currently Reading
                </legend>
                <UserReadsTable></UserReadsTable>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyContainer;
