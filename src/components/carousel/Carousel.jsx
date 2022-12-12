import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel className='carousel-container' fade controls={false} indicators={false}>
      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src="https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/201092763.jpg?k=d7173a99679b0fe43ec7c31c1deb86e5d534f85e0aa1cd00bfcab6a147ab2bdd&o="
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src="https://media1.moneywise.com/a/2690/amazing-1-week-vacations-you-can-do-on-1000_full_width_24_1200x500_v20190123201316.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src="https://s27363.pcdn.co/wp-content/uploads/2018/05/Bangkok-for-Facebook.jpg.optimal.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src="https://www.goworldtravel.com/wp-content/uploads/2022/05/Yosemite-National-Park.-Photo-by-Mick-Haupt-e1652590223529-1200x500.jpg"
          alt="Forth slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src="https://blackplatinumgold.com/wp-content/uploads/2021/04/Article-Photos-2-2-1200x500.jpg"
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src="https://media-cdn.tripadvisor.com/media/photo-m/1280/23/54/b2/f4/rainier-lodge-large-cabin.jpg"
          alt="Sixth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;