import React from "react";
// import '../css/testimonial.css'

const Card = ({ image, title, description, name, position, link }) => {
  return (
    <div className="col-md-4">
      <div className="card d-flex mx-auto">
        <div className="card-image">
          <img className="img-fluid d-flex mx-auto" src={image} alt={name} />
        </div>
        <div className="card-text">
          <div className="card-title">{title}</div>
          {description}
        </div>
        <div className="footer">
          <span id="name">{name}<br /></span>
          <span id="position">
            {position} <a href={link}>{link}</a>
          </span>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const cards = [
    {
      image: "https://i.imgur.com/3TlwnLF.jpg",
      title: "Lorem Ipsum!",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus Duis leo. Donec sodales sagittis magna",
      name: "Micheal Smith",
      position: "CEO of",
      link: "https://google.com",
    },
    {
      image: "https://i.imgur.com/Uz4FjGZ.jpg",
      title: "Lorem Ipsum!",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus Duis leo. Donec sodales sagittis magna",
      name: "Angellia Miller",
      position: "CEO of",
      link: "https://facebook.com",
    },
    {
      image: "https://i.imgur.com/udGH5tO.jpg",
      title: "Lorem Ipsum!",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus Duis leo. Donec sodales sagittis magna",
      name: "Christina Williams",
      position: "UX Designer at",
      link: "https://youtube.com",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
