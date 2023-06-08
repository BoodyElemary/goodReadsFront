import React from 'react';
import { ListGroup } from 'react-bootstrap';

function SideNavbar({ activeItem, onNavbarItemClick }) {
  return (
    <ListGroup defaultActiveKey="all">
      <ListGroup.Item
        action
        eventKey="all"
        active={activeItem === 'all'}
        onClick={() => onNavbarItemClick('all')}
      >
        All
      </ListGroup.Item>
      <ListGroup.Item
        action
        eventKey="read"
        active={activeItem === 'read'}
        onClick={() => onNavbarItemClick('read')}
      >
        Read
      </ListGroup.Item>
      <ListGroup.Item
        action
        eventKey="currentlyReading"
        active={activeItem === 'currentlyReading'}
        onClick={() => onNavbarItemClick('currentlyReading')}
      >
        Currently Reading
      </ListGroup.Item>
      <ListGroup.Item
        action
        eventKey="wantToRead"
        active={activeItem === 'wantToRead'}
        onClick={() => onNavbarItemClick('wantToRead')}
      >
        Want to Read
      </ListGroup.Item>
    </ListGroup>
  );
}

export default SideNavbar;
