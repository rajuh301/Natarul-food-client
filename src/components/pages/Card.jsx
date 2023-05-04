/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data, handleAddToCart }) => {

    const { id, name, image } = data;


    return (



        <div className='mt-5'>

            <div className="col">
                <div className="card h-100">
                    <img style={{ height: '300px' }} src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>

                    <div className='py-2 px-2'>
                        <Link to={`/details/${id}`}>
                            <button className='btn btn-primary' onClick={() => handleAddToCart(data)}>Recipe</button>
                        </Link>
                    </div>

                </div>
            </div>

        </div>



    );
};

export default Card;