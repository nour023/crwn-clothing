import React from 'react'

import './sign-in.style.scss'

import CustomButton from '../custom-button/custom-buttom.component';
// import  { signInWithGoogle } from '../../firebase/firebase.utils'
import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit= event =>{
        event.preventDefault();
        this.setState({email:'', password:''})
    }
    handleChange = event =>{
        const { value , name } = event.target ;

        this.setState({ [name]:value })
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" type="email" name="email" value={this.state.email} id="" handleChange={this.handleChange} required />
                   
                    <FormInput label="password" type="password" name="password" value={this.state.password} id="" handleChange={this.handleChange} required />
                    
                    <CustomButton type="submit" >Sign In</CustomButton>
                    {/* <input onclick={signInWithGoogle} value="sign in with google" /> */}
                </form>
            </div>
        )
    }
}

export default SignIn;