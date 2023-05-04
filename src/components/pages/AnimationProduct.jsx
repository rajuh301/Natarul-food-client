/* eslint-disable no-unused-vars */
import React from 'react';
import Marquee from "react-fast-marquee";

// ------------------------
import img1 from '../../../public/images/icons/03.jpg'
import img2 from '../../../public/images/icons/04.jpg'
import img3 from '../../../public/images/icons/05.jpg'
import img4 from '../../../public/images/icons/01.jpg'

// ------------------------



const AnimationProduct = () => {
    return (

        <Marquee>

            <div className='d-flex gap-5'>

                
                <div className='mt-5 border shadow'>

                    <img className='rounded' style={{ width: '280px' }} src={img1} />
                    <h3>Indian food</h3>
                    <p style={{ width: '280px' }}>Spicy, rich, flavourful and diverse are terms that are frequently used to describe Indian food.</p>
                </div>

                <div className='mt-5 border shadow'>

                    <img className='rounded' style={{ width: '280px' }} src={img2} />
                    <h3>Bangladeshi food</h3>
                    <p style={{ width: '280px' }}>Bangladeshi cuisine refers to the food and culinary traditions prevalent in Bangladesh.</p>
                </div>

                <div className='mt-5 border shadow'>

                    <img className='rounded' style={{ width: '280px' }} src={img3} />
                    <h3>Napal food</h3>
                    <p style={{ width: '280px' }}>The Nepali staples consist primarily of rice, wheat, corn and lentils, in addition to fresh vegetables and meats.</p>
                </div>

                <div className='mt-5 border shadow'>

                    <img className='rounded' style={{ width: '280px' }} src={img4} />
                    <h3>French  food</h3>
                    <p style={{ width: '280px' }}>French dishes often use simple ingredients transformed by artful techniques.</p>
                </div>



            </div>



        </Marquee>
    );
};

export default AnimationProduct;