/* eslint-disable no-unused-vars */
import React from 'react';

const HomeTitle = () => {
    return (
        <div>

            {/* -------------------- */}

            <div>

                <div className="card mb-3" style={{ width: '100%', marginTop: '100px' }}>
                    <div className="row g-0">
                        <div className="col-md-6">

                            <div className='mt-5 px-5'>
                                <p className='text-danger'>WHO WE ARE</p>
                                <h1 style={{}}>One thousand flavors in one place.</h1>
                                <p>Flavorful Eats - Discover an abundance of savory, aromatic, and flavorful recipes from all over the world on this food website.</p>
                                <br />
                                <p>Foodie Frenzy - If you are a foodie looking for inspiration, Foodie Frenzy is the perfect place for you. Explore unique and innovative recipes that are sure to impress your guests.</p>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="card-body">

                                <img style={{ width: "100%" }} src="https://as1.ftcdn.net/v2/jpg/01/07/48/26/1000_F_107482697_Jp79znHmlxrJO15NzRHbKvf1dvDFdx3m.jpg" alt="" />

                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default HomeTitle;