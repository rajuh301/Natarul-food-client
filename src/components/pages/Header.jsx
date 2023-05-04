/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()

            .then()
            .catch(error => {
                console.log(error)
            })
    }


    console.log(user)




    return (
        <div>
            <Navbar className='mt-2' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <h1 className='fa-1 text-success'>NATURAL FOOD</h1>
                        <Nav style={{ fontSize: '20px', }} className="mx-auto gap-5">


                            {/* --------------------- */}


                 <div>
                 <nav className='d-flex gap-5'>
                                <ul className='d-flex gap-5'>
                                    <li>
                                        <NavLink to="/" exact activeClassName="fw-bold">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about" activeClassName="fw-bold">
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/answer" activeClassName="fw-bold">
                                            Blog
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                 </div>





                            {/* <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>

                            <Link style={{ textDecoration: 'none' }} to='/answer'>Blog</Link> */}

                            {/* --------------------- */}


                        </Nav>

                        {user ?

                            // <Image className='rounded-circle' style={{ width: '40px' }} src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1" fluid /> :
                            // ""

                            <Image title={user.displayName} className='rounded-circle' style={{ width: '40px' }} src={user.photoURL} fluid /> :
                            ""

                        }


                        <Nav>
                            <Nav.Link eventKey={2} href="#memes">


                                {user ?

                                    <Button onClick={handleLogout}>LogOut</Button> :

                                    <Link to='/login'>
                                        <Button variant="secondary">Login</Button>
                                    </Link>

                                }


                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div>
    );
};

export default Header;