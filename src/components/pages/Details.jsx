/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from './Header';
import { useLoaderData } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Rating from 'react-rating';
import { FaBeer, FaHeart, FaRegStar, FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const diffToast = () => {
    toast("Food added!");
}

const Details = () => {

    const cheap = useLoaderData();
    const { id, name, image, user_rating, recipe, countery, experience } = cheap;

    console.log(cheap)

    const [ids, setIds] = useState([])


    const handleFovorit = () => {
        toast.success('Your food added in Favorite list!')
    }



    console.log(ids)


    return (
        <div>

            <div>
                <Header></Header>

                {/* ------------------------------------ */}

                <div className="d-flex justify-content-center mt-5">

                    <div style={{}} className="d-flex border shadow w-50 p-2 rounded gap-2">
                        <img style={{ width: '400px' }} className="rounded" src={image} alt="" />

                        <div>

                            <h1>{name}</h1>
                            <h3>Country:{countery}</h3>
                            <h3>Total Recipe: {recipe}</h3>
                            <h3>Experience: {experience} years</h3>

                            <div className='d-flex gap-3 align-items-center'>
                                <h4>Rating: {user_rating}</h4>

                                <Rating
                                    placeholderRating={user_rating}
                                    readonly

                                    emptySymbol={<FaRegStar style={{ color: 'red' }}></FaRegStar>}

                                    placeholderSymbol={<FaStar></FaStar>}
                                    fullSymbol={<FaStar style={{ color: 'red' }}></FaStar>}

                                />
                                <br />



                                <ToastContainer></ToastContainer>


                            </div>


                            <small><span><FaHeart style={{color:'red'}}></FaHeart></span> {experience}00</small>
                        </div>
                    </div>


                </div>


                {/* ------------------------------------ */}






                <Container>

                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                        <div className="col">
                            <div className="card">
                                <img style={{ height: '250px' }} src={cheap.foods[0].img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{cheap.foods[0].foods_name}</h5>
                                    <p className="card-text">{cheap.foods[0].description}</p>



                                    <button onClick={() => handleFovorit(id)} className='btn btn-primary'>Favorite</button>
                                </div>
                            </div>
                        </div>



                        <div className="col">
                            <div className="card">
                                <img style={{ height: '250px' }} src={cheap.foods[1].img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{cheap.foods[1].foods_name}</h5>
                                    <p className="card-text">{cheap.foods[1].description}</p>


                                    <button onClick={() => handleFovorit(id)} className='btn btn-primary'>Favorite</button>
                                </div>
                            </div>
                        </div>


                        <div className="col">
                            <div className="card">
                                <img style={{ height: '250px' }} src={cheap.foods[2].img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{cheap.foods[2].foods_name} </h5>
                                    <p className="card-text">{cheap.foods[2].description}</p>


                                    <button onClick={handleFovorit} className='btn btn-primary'>Favorite</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </Container>

                <Footer></Footer>

            </div>


        </div>



    );
};

export default Details;