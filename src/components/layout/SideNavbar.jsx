import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';

function SideNavbar({ onNavbarItemClick }) {
  const [activeItem, setActiveItem] = useState('all');

  const handleItemClick = (eventKey) => {
    setActiveItem(eventKey);
    onNavbarItemClick(eventKey); // Pass the active item value to the parent component
  };

  return (
    <ListGroup defaultActiveKey="all">
      <ListGroup.Item
        action
        eventKey="all"
        active={activeItem === 'all'}
        onClick={() => handleItemClick('all')}
      >
        All
      </ListGroup.Item>
      <ListGroup.Item
        action
        eventKey="read"
        active={activeItem === 'read'}
        onClick={() => handleItemClick('read')}
      >
        Read
      </ListGroup.Item>
      <ListGroup.Item
        action
        eventKey="currentlyReading"
        active={activeItem === 'currentlyReading'}
        onClick={() => handleItemClick('currentlyReading')}
      >
        Currently Reading
      </ListGroup.Item>
      <ListGroup.Item
        action
        eventKey="wantToRead"
        active={activeItem === 'wantToRead'}
        onClick={() => handleItemClick('wantToRead')}
      >
        Want to Read
      </ListGroup.Item>
    </ListGroup>
  );
}

export default SideNavbar;
