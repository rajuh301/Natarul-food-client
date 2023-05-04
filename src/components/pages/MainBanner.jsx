/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const MainBanner = () => {
    return (
        <div>

            <div className="card mb-3" style={{ width: '100%', marginTop: '100px' }}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src="https://img.freepik.com/free-photo/medium-shot-people-cooking-pizza-together_23-2150283009.jpg?w=996&t=st=1683076895~exp=1683077495~hmac=de754c384ef2fe9e8af39805be03b2e369b73b1d40d253f380265ab17a14f7e2" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="card-body">

                            <div className=''>
                                <p className='text-danger'>JOIN US</p>
                                <h1 style={{}}>Let s start sharing your awesome recipes
                                </h1>
                                <br />
                                <Link to='/about'>
                                    <button className='btn btn-danger'>Join us</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MainBanner;