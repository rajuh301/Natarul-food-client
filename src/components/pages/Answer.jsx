/* eslint-disable no-unused-vars */
import React from 'react';

const Answer = () => {
    return (
        <div style={{fontSize:'30px'}} className='w-75 mx-5 mt-5'>

            1. Tell us the differences between uncontrolled and controlled components...
            <br />
            <br />
            Answer: <br />
            In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally...

            <br />
            <br />

            2. How to validate React props using PropTypes.
            <br />
            Answer: <br />

            <div className='ms-5'>

                1.PropTypes.any : The prop can be of any data type.
                2.PropTypes.bool : The prop should be a Boolean.
                3.PropTypes.number : The prop should be a number.
                4.PropTypes.string : The prop should be a string.
                5.PropTypes.func : The prop should be a function.
                6.PropTypes.array : The prop should be an array.

            </div>
            <br />


            3.Tell us the difference between nodejs and express js.
            <br />
            Answer: <br />

            NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses....

            <br />
            <br />

            5.What is a custom hook, and why will you create a custom hook?

            <br />
            
            Answer: <br />
            Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code... 





        </div>
    );
};

export default Answer;