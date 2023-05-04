/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import slider_image_1 from "../../../public/images/icons/01.jpg"
import slider_image_2 from "../../../public/images/icons/02.jpg"
import slider_image_3 from "../../../public/images/icons/03.jpg"
import slider_image_4 from "../../../public/images/icons/04.jpg"
import slider_image_5 from "../../../public/images/icons/05.jpg"
import slider_image_6 from "../../../public/images/icons/06.jpg"
import slider_image_7 from "../../../public/images/icons/07.jpg"
import { Container } from 'react-bootstrap';


const Carousel = () => {
    return (
        <div>

{/* 
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5
                }}
                className='swiper_container'
            >


                <Container>

                    <SwiperSlide>
                        <img style={{ width: '100%', height: '500px' }} src={slider_image_1} alt="slider_image" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img style={{ width: '100%', height: '500px' }} src={slider_image_2} alt="slider_image" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img style={{ width: '100%', height: '500px' }} src={slider_image_3} alt="slider_image" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img style={{ width: '100%', height: '500px' }} src={slider_image_4} alt="slider_image" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img style={{ width: '100%', height: '500px' }} src={slider_image_5} alt="slider_image" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img style={{ width: '100%', height: '500px' }} src={slider_image_6} alt="slider_image" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img style={{ width: '100%', height: '500px' }} src={slider_image_7} alt="slider_image" />
                    </SwiperSlide>

                </Container>



                <div className='slider-controler'>

                    <div className='swiper-button-prev slider-arrow'>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>

                    <div className='swiper-button-next slider-arrow'>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>

                    <div className='swiper-pagination'>

                    </div>

                </div>


            </Swiper> */}





 
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <h1 style={{width: '400px', color:'green', marginTop:'400px'}} className='position-absolute fw-bold mx-2'>Up to 30% off with free home delivery</h1>
        <img style={{width:'100%', height:'550px'}} src={slider_image_1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <h1 style={{width: '400px', color:'green'}} className='position-absolute text-white fw-bold'>Indian foods, Up to 25% off</h1>
        <img style={{width:'100%', height:'550px'}} src={slider_image_2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <h1 style={{width: '400px', color:'white', marginTop:'400px'}} className='position-absolute fw-bold'>Bangladeshi Porata, 5% off</h1>
        <img style={{width:'100%', height:'550px'}} src={slider_image_3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <h1 style={{width: '400px', color:'yellow'}} className='position-absolute fw-bold'>Bangladeshi chicken roast</h1>
        <img style={{width:'100%', height:'550px'}} src={slider_image_4} alt="" />
      </SwiperSlide>
      ...
    </Swiper>









            {/* <img style={{width:'100%', height:'400px'}} src="https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="" />
 */}


            {/* Carusol Button not working */}


            {/* <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src= className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="..." className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}


        </div>
    );
};

export default Carousel;