/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const MainBanner = () => {
    return (
        <div>

      
            <div className='d-flex gap-5 mt-5 border shadow p-3 rounded'>



                <div className='mt-5'>
                    <p className='text-danger'>JOIN US</p>

                    <h1 style={{}}>Let s start sharing your awesome recipes
                    </h1>
                    <br />


                    <Link to='/about'>
                        <button className='btn btn-danger'>Join us</button>
                    </Link>
                </div>



                <img style={{ width: "600px", height: '400px' }} src="https://img.freepik.com/free-photo/medium-shot-people-cooking-pizza-together_23-2150283009.jpg?w=996&t=st=1683076895~exp=1683077495~hmac=de754c384ef2fe9e8af39805be03b2e369b73b1d40d253f380265ab17a14f7e2" alt="" />

            </div>


        </div>
    );
};

export default MainBanner;