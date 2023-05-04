/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
    return (
        <div className='mt-5 text-white bg-dark'>
            <footer>
                <div className=" ms-5">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <h3>About Us</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                lobortis magna at dui tristique malesuada. Nullam gravida lorem
                                ut ex egestas, vel iaculis odio ultricies.
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <h3>Quick Links</h3>
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                                <li>
                                    <a href="#">Projects</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <h3>Contact Us</h3>
                            <ul>
                                <li>
                                    <i className="fa fa-map-marker"></i> 123 Main Street, New York,
                                    NY 10001
                                </li>
                                <li>
                                    <i className="fa fa-phone"></i> (123) 456-7890
                                </li>
                                <li>
                                    <i className="fa fa-envelope"></i>{" "}
                                    <a href="mailto:info@company.com">info@company.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p>
                                    &copy; {new Date().getFullYear()} Company Name. All Rights
                                    Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
