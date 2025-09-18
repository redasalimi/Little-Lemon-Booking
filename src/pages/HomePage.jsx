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
    </>
  )
}

export default HomePage