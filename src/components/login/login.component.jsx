import { render } from '@testing-library/react';
import React from 'react';
import FormInput from '../form-input/form-input.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../../components/button/button.component';

import './login.styles.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className="login">
                <h1>Sign In</h1>
            <form onSubmit={this.handleSubmit}>
                <FormInput name='email' type='email' handleChange={this.handleChange} value={this.state.email} label="email" required />
                
                <FormInput name='password' type='password' handleChange={this.handleChange} value={this.state.password} label="password" required/>
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
            </form>
            </div>
        );
    }
}

export default Login;