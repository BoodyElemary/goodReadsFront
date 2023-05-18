import React from "react";
import { ListGroup } from "react-bootstrap";

function SideNavbar() {
  return (
    <ListGroup defaultActiveKey="#link1">
      <ListGroup.Item action>All</ListGroup.Item>
      <ListGroup.Item action>Read</ListGroup.Item>
      <ListGroup.Item action className="active">
        Currently Reading
      </ListGroup.Item>
      <ListGroup.Item action>Want to Read</ListGroup.Item>
    </ListGroup>
  );
}

export default SideNavbar;
