import Card from 'react-bootstrap/Card';
import { IoIosBed } from 'react-icons/io';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import { diffDays } from '../../actions/hotels';
import moment from 'moment/moment';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

const HotelCard = ({ hotel, isOwner = false, setSmShow, setId }) => {
  const navigate = useNavigate();
  const navigateToEdit = (e) => {
    e.preventDefault();
    navigate('/hotels/edit', { state: { id: hotel._id } });
  };

  const openDeleteModal = (e) => {
    e.preventDefault();
    setSmShow(true);
    setId(hotel._id);
  };

  return (
    <Card className="mb-3 hotel-card">
      <Card.Img
        variant="top"
        src={`${import.meta.env.VITE_APP_API}/hotel/image/${hotel._id}`}
        className="hotel-image"
      />
      <Card.Body>
        <Card.Title className='hotel-title mt-1'>{hotel.title}</Card.Title>
        <Card.Text className="mb-1 mt-2 hotel-location">
          <ImLocation fill='#eeb96a' style={{marginRight:"5px", fontSize: "20px"}}/>
          {hotel.location}
        </Card.Text>
        <Card.Text className="mb-1 hotel-calendar">
          <BsFillCalendarCheckFill fill='#ff6363' style={{marginRight:"10px", fontSize: "17px"}}/>
          for {diffDays(hotel.from, hotel.to)}{' '}
          {diffDays(hotel.from, hotel.to) <= 1 ? ' day' : ' days'}
        </Card.Text>
        <Card.Text className="mb-1 hotel-bed">
          <IoIosBed fill='#4d7cfd' style={{marginRight:"5px", fontSize: "20px"}}/> {hotel.bed} bed
        </Card.Text>
        <Card.Text className="text-muted additional-info">
          <small>
            Available from {new Date(hotel.from).toLocaleDateString()}
          </small>
        </Card.Text>
        <Card.Text className="text-muted ">
          <small>
            <i>Posted {moment(hotel.createdAt).fromNow()}</i>
          </small>
        </Card.Text>
        {isOwner && (
          <div className="d-grid gap-1">
            <Button variant="warning" onClick={navigateToEdit}>
              Edit
            </Button>
            <Button variant="danger" onClick={openDeleteModal}>
              Delete
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default HotelCard;
