/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Carousel from './Carousel';
import Card from './Card';
import { Link, useLoaderData } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import HomeTitle from './HomeTitle';
import MainBanner from './MainBanner';
import Marquee from "react-fast-marquee";
import AnimationProduct from './AnimationProduct';

import banner from '../../../public/images/icons/banner.jpg'

const Home = () => {


    const datas = useLoaderData();
    const [cheap, setCheap] = useState([])

    console.log(cheap)
    const handleAddToCart = (data) => {
        const exist = datas.find(da => data.id === data.id)
        setCheap(exist)

        console.log(exist)
    }



    return (
        <div>
            <Carousel></Carousel>


            <Marquee>
                <h1 style={{ fontSize: '120px', color: 'green' }}
                    className='d-flex justify-content-center hover:text-primary'>NATURAL FOOD</h1>
            </Marquee>


            {/* home banner */}

            <Container>
                <div className='d-flex bg-dark border rounded shadow mt-5'>

                    <img src={banner} alt="" />

                    <div>
                        <h1 className='fw-bold' style={{ fontSize: '70px', padding: '30px', marginTop: '20px' }}><span style={{ color: 'red' }}>Inspiration</span> <span style={{ color: 'white' }}>for the master in you.</span></h1>

                        <Link to='/about'>  <button style={{ backgroundColor: 'yellow', fontSize:'30px', marginLeft: '30px' }} className='rounded shadow fw-bold'>Read about the latest culinary trends</button>
                        </Link>

                    </div>



                </div>
            </Container>


            {/* home banner */}


            <Container>
                <h1 className='mt-5 d-flex justify-content-center'>Our chef</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4 p-2">
                    {
                        datas.map(data => <Card
                            key={data.id}
                            data={data}
                            handleAddToCart={handleAddToCart}
                        ></Card>)

                    }
                </div>
                <HomeTitle></HomeTitle>

                <MainBanner></MainBanner>
                <h1 className='mt-5 d-flex justify-content-center'>Countries foods</h1>
                <AnimationProduct></AnimationProduct>
            </Container>

        </div>
    );
};

export default Home;