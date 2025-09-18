import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'

function CardTemple(props) {
  return (
    <Card  className='h-100 d-flex flex-column'>
      <Card.Img variant="top" src={props.img} alt={props.title} style={{ objectFit: 'cover', height: '200px' }}/>
      <Card.Body className='d-flex flex-column'>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Card.Title>{props.title}</Card.Title>
          <span className="fw-bold" style={{color: '#EE9972'}}>${props.price}</span>
        </div>
        <Card.Text className='flex-grow-1 text-secondary fw-medium'>
          {props.desc}
        </Card.Text>
        <button className='btn' >Order a delivery <FontAwesomeIcon icon={faMotorcycle} /></button>
      </Card.Body>
    </Card>
  );
}

export default CardTemple;