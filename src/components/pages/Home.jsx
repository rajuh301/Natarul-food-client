/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Carousel from './Carousel';
import Card from './Card';
import { useLoaderData } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import HomeTitle from './HomeTitle';
import MainBanner from './MainBanner';
import Marquee from "react-fast-marquee";
import AnimationProduct from './AnimationProduct';

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