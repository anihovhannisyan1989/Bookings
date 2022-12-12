import UserInfo from '../components/user/UserInfo';
import DashboardTabs from '../components/DashboardTabs';
import { Outlet } from 'react-router';
import { Container } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <>
      <UserInfo />
      <DashboardTabs />
      <Container className='outlet-container'>
        <Outlet />
      </Container>
    </>
  );
};

export default Dashboard;
