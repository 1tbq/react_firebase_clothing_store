import React from 'react';
import './sign-in-and-signup.scss';
import SignIn from '../sign-in/sign-in.component';
import Signup from '../sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <Signup />
    </div>
);

export default SignInAndSignUpPage;