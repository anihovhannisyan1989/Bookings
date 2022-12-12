import Hotels from '../components/Hotels';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Search from '../components/Search';
import HomeBanner from "../components/banners/HomeBanner";

const Home = () => {
  return (
    <>
    <HomeBanner />
    <Container fluid>
      <Row>
        <Search />
      </Row>
      <Row className='hotels-block'>
        <Hotels />
      </Row>
    </Container>
    </>
  );
};

export default Home;
