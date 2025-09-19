import React from 'react'
import { Link } from 'react-router-dom'
import Rectangle from '/assets/imgs/Rectangle 45.png'
import CardTemple from '../Components/Card'
import cards, {testimonialcards} from '../data/cardsdata'
import Testimonials from './sections/Testimonials'

function HomePage() {
  return (
    <>
        <section id='home-first-section' className='w-100 p-3 h-auto d-inline-block mb-5' style={{backgroundColor: '#495E57'}}>
            <div className='container position-relative'>
                <div className='row'>
                    <div className="col-md-2 d-none d-md-block"></div>
                    <div className='col-6 col-md-4 text-start'>
                        <h1 id='main-heading' className='fs-md-1'>Little Lemon <br/><span className='fs-5 fs-md-3 text-light'>Chicago</span></h1>
                        <div className='mt-md-5'>
                            <p id='para-home'>
                                We are a family owned <br />Mediterranean restaurant,<br />focused on traditional <br/>recipes served with a modern <br />twist.
                            </p>
                            <Link className='btn text-dark fw-semibold' to={'/reservations'}  style={{backgroundColor : '#F4CE14'}}>Reserve a Table</Link>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 text-center col-md-auto">
                        <img src={Rectangle} className="rounded img-fluid mt-5" alt="Restaurant Food" style={{marginBottom: '-80px'}}/>
                    </div>
                    <div className="col-md-2 d-none d-md-block"></div>
                </div>
            </div>
        </section >
        <section className='container mt-md-5 mb-5'>
            <div className="row mt-3">
                <div className="col-md-2 d-none d-md-block"></div>
                <div className="col-12 col-md-8 d-flex justify-content-between align-items-center">
                    <h2 id='second-heading' >This Weeks Specials!</h2>
                    <Link className='btn text-dark fw-semibold align-items-center' to={'/reservations'}  style={{backgroundColor : '#F4CE14'}}>Online Menu</Link>
                </div>
                <div className="col-md-2 d-none d-md-block"></div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                {cards.map(card => (
                <div className="col" key={card.id}>
                    <CardTemple title={card.title} img={card.img} desc={card.desc} price={card.price}/>
                </div>
                ))}
            </div>
        </section>
        <section className='container-fluid w-100 p-5 mt-md-5 h-auto d-inline-block mb-5' style={{backgroundColor: '#495E57'}}>
                <h2 id='second-heading' className='row my-5 pb-3 text-light justify-content-center fw-bolder '>Testimonials</h2>
                <div className='row gap-3 justify-content-center'>
                    {testimonialcards.map((testCard, index) => (
                        <Testimonials key={index} name={testCard.name} img={testCard.img} rating={testCard.rating} review={testCard.review}/>
                    ))}
                </div>
        </section>
        <section className="py-5 my-5">
            <div className="container">
                <div className="row gap-5 align-items-center">
                {/* Text section */}
                <div className="col-md-6 text-md-start text-center mb-4 mb-md-0 pe-md-5">
                    <h1 id="main-heading-last" className="fs-1 fw-bold">
                    Little Lemon <br />
                    <span className="fs-4 text-dark">Chicago</span>
                    </h1>
                    <p id="para-home-last" className="text-dark mt-4">
                    Little Lemon Chicago is a family-owned Mediterranean restaurant in
                    the heart of the city, run by brothers Mario and Adrian. Inspired by
                    their childhood recipes, they bring classic Mediterranean flavors with
                    a modern twist. The menu offers both quick lunches and leisurely
                    dinners, all served in a warm and welcoming atmosphere.
                    </p>
                </div>

                {/* Images */}
                <div
                    className="position-relative mt-5 mx-auto img-wrapper"
                    style={{ width: "272px", height: "338px" }}
                >
                    {/* الصورة الرئيسية */}
                    <img
                    src="/assets/imgs/restaurant-twin.jpg"
                    alt="Main Restaurant"
                    className="img-fluid rounded main-img shadow"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />

                    {/* الصورة اللي فوق */}
                    <img
                    src="/assets/imgs/Mario-and-Adrian.jpg"
                    alt="Overlay"
                    className="position-absolute rounded overlay-img shadow"
                    style={{
                        width: "272px",
                        height: "338px",
                        objectFit: "cover",
                        top: "-40%",
                        right: "-60%",
                    }}
                    />
                </div>
                </div>
            </div>
        </section>


    </>
  )
}

export default HomePage