import { React, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { AppAPI } from '../../API/axiosAPI';

function Topbar() {
  const location = useLocation();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await AppAPI.getUserProfile();
        // Handle the response data
        // console.log(response.data.data);

        setUserData(response.data.data);
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    };

    fetchUserProfile();
  }, []);
  if (location.pathname === '/' || location.pathname === '/') {
    return null;
  } else {
    return (
      <header className="container-fluid bg-dark text-light px-0">
        {/* Header content */}
        <div className="d-flex justify-content-between align-items-baseline mx-4">
          <div>
            <p>
              Welcome{' '}
              <span>{`${userData.firstName} ${userData.lastName}`}</span>
            </p>
          </div>
          <Button variant="transparent">
            <img
              src={`${AppAPI.back_Url}/${userData.Image}`}
              alt="avatar"
              className="avatar"
            />
          </Button>
        </div>
      </header>
    );
  }
}

export default Topbar;
