import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const DashboardTabs = () => {
  const params = useLocation();

  return (
    <Container className='my-bookings-tabs'>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            className={`nav-link ${
              params.pathname === '/dashboard/bookings' && 'active'
            }`}
            to="/dashboard/bookings"
          >
            My Bookings
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              params.pathname === '/dashboard/seller' && 'active'
            }`}
            to="/dashboard/seller"
          >
            My Hotels
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default DashboardTabs;
