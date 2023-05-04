/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {


    const { login } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    console.log('Login page location', location)

    const from = location.state?.from?.pathname || '/'

    const [success, setSuccess] = useState([])
    const [error, setError] = useState([])

    const handleLogin = (event) => {

        setError('')
        setSuccess('')

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess('User Login successfully!!')

                navigate(from, {replace: true})
            })

            .catch(error => {
                setError(error.message)
            })

    }







    return (
        <div>


            <Container>
                <form onSubmit={handleLogin} style={{ width: '350px' }} className='border p-2 rounded mt-5 shadow mx-auto'>
                    <h4>Please login your account</h4>



                    <div className="mb-3 mt-5 ">
                        <label htmlFor="">Email Address</label>
                        <input type="email" className="form-control" name='email' required />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" name='password' required />
                    </div>


                    <button type="submit" className="btn btn-primary">Login</button>

                    <div className='text-center'>
                        <p className='text-[10px]'>{error}</p>
                        <p className='text-[10px]'>{success}</p>
                    </div>

                    <div style={{ fontSize: '16px' }} className='text-danger text-center'>
                        <p className='mt-2 text-[10px] justify-center'>Don not have an account?
                            <span className='mx-1'><Link to='/register'> Create an account</Link></span></p>
                    </div>
                </form>



            </Container>

        </div>
    );
};

export default Login;