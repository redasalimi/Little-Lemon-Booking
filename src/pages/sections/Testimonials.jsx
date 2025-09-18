import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card'

export default function Testimonials({ name, img, review, rating }) {
  return (
    <Card className="p-3 shadow-sm" style={{ width: '18rem', borderRadius: '12px' }}>
      {/* Rating */}
      <div className="mb-2 text-warning">
        {[...Array(rating)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} />
        ))}
      </div>

      {/* Image + Name */}
      <div className="d-flex align-items-center mb-2">
        <img 
          src={img} 
          alt={name} 
          className="rounded-circle me-2" 
          style={{ width: '40px', height: '40px', objectFit: 'cover' }} 
        />
        <span className="fw-semibold">{name}</span>
      </div>

      {/* Review text */}
      <Card.Text className="text-muted">
        {review}
      </Card.Text>
    </Card>
  )
}
