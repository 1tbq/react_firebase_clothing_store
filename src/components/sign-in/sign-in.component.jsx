import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signInWithGoogle}  from '../../firebase/firebase.utils';


class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleSubmit = async(e) => {
        e.preventDefault();
        const {email,password}= this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        } catch (error) {
            console.log(error);
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({[name]:value})
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Singin with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    handleChange={this.handleChange} 
                    name="email" type="email" 
                    value={this.state.email} 
                    required 
                    label='email'
                    />
                    <FormInput 
                    handleChange={this.handleChange} 
                    type="password" 
                    name="password" 
                    value={this.state.password} 
                    label="password"
                    />
                   <div className="buttons">
                   <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>
                    <CustomButton isGoogleSignIn onClick={signInWithGoogle} value="Submit Form">Sign In with Google</CustomButton>
                   </div>
                </form>
            </div>
        );
    }
}

export default SignIn;