/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import google from '../../../public/images/icons/google.png'
import fb from '../../../public/images/icons/fb.png'
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const { createUser, regWithGoogle, regWithGIt } = useContext(AuthContext)

    const [success, setSuccess] = useState([])
    const [error, setError] = useState([])


    const handleRegister = (event) => {
        event.preventDefault();

        setError('')
        setSuccess('')

        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm.value;


        if (password != confirm_password) {
            setError('Password and Confirm password not match')
            return;
        }

        else if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add last one uppercase');
            return;
        }



        else {
            createUser(email, password)
                .then(result => {
                    const createdUser = result.user;
                    setSuccess('User created successfully!!')
                })

                .catch(error => {
                    setError(error.message)
                })
        }

        console.log(name, email, password, confirm_password)
    }




    return (
        <div>
            <Container>
                <Form onSubmit={handleRegister} style={{ width: '350px' }} className='border p-2 rounded mt-5 shadow mx-auto'>
                    <h4>Please Register your account</h4>


                    <div className="mb-3 ">
                        <label htmlFor="">Name</label>
                        <input type="text" className="form-control" name='name' required />
                    </div>

                    <div className="mb-3 ">
                        <label htmlFor="">photo url</label>
                        <input type="text" className="form-control" name='photoUrl' required />
                    </div>

                    <div className="mb-3 ">
                        <label htmlFor="">Email Address</label>
                        <input type="email" className="form-control" name='email' required />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" name='password' required />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" name='confirm' required />
                    </div>


                    <button type="submit" className="btn btn-primary">Register</button>


                    <div className='text-center'>
                        <p className='text-[10px]'>{error}</p>
                        <p className='text-[10px]'>{success}</p>
                    </div>

                    <div style={{ fontSize: '16px' }} className='text-danger text-center'>
                        <p className='mt-2 text-[10px] justify-center'>Already have an account?
                            <span className='mx-1'><Link to='/login'> Login account</Link></span></p>
                    </div>

                    <div className='d-flex gap-2'>

                        <button onClick={regWithGoogle} className='rounded'>Login with <span> -</span> <img style={{ width: '50px' }} src={google}></img> </button>

                        <button onClick={regWithGIt} className='rounded'>Login with <span> -</span> <img style={{ width: '50px' }} src={fb}></img> </button>



                    </div>

                </Form>





            </Container>
        </div>





    );
};

export default Register;