import React from 'react'
import { Link } from 'react-router-dom'
import Rectangle from '../assets/imgs/Rectangle 45.png'

function HomePage() {
  return (
    <>
        <section id='landing-page1' className='w-100 p-3 h-auto d-inline-block' style={{backgroundColor: '#495E57'}}>
            <div className='container position-relative'>
                <div className='row'>
                    <div className="col-md-2 d-none d-md-block"></div>
                    <div className='col-6 col-md-4 text-start'>
                        <h1 id='main-heading' className='fs-md-1'>Little Lemon <br/><span className='fs-5 fs-md-3 text-light'>Chicago</span></h1>
                        <div className='mt-md-5'>
                            <p id='para-home'>
                                We are a family owned <br />Mediterranean restaurant,<br />focused on traditional <br/>recipes served with a modern <br />twist.
                            </p>
                            <button className='btn text-dark fw-semibold' as={Link} to={'/reservations'} style={{backgroundColor : '#F4CE14'}}>Reserve a Table</button>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 text-center col-md-auto">
                        <img src={Rectangle} className="rounded img-fluid mt-5" alt="Restaurant Food" style={{marginBottom: '-80px'}}/>
                    </div>
                    <div className="col-md-2 d-none d-md-block"></div>
                </div>
            </div>
        </section>
        <section>
            
        </section>
    </>
  )
}

export default HomePage