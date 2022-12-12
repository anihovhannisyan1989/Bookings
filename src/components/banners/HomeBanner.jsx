import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CarouselFadeExample from '../carousel/Carousel';

const HomeBanner = () => {
  return (
    <div className="home-banner">
        <div className="center-white-gradient">
        <Container>
            <Row className='home-banner img'>
                <CarouselFadeExample />
            </Row>
        </Container>
        </div>
    </div>
  );
};

export default HomeBanner;
