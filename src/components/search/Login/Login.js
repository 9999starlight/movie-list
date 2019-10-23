import React from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { auth } from './../../../Firebase.js'

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        errorMessage: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    createNewAccount = (e) => {
        e.preventDefault();
        const regEmail = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
        if (!regEmail.test(this.state.email) || this.state.password.length < 6) {
            alert(`You haven't entered valid e-mail or password, please try again!`);
            return;
        } else {
            auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((cred) => {
                    this.props.showForm()
                }).catch((err) => {
                    console.log(err.message)
                    this.setState({ errorMessage: err.message })
                });
        }
    }

    login = (e) => {
        e.preventDefault();
        const regEmail = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
        if (!regEmail.test(this.state.email) || this.state.password.length < 6) {
            alert(`You haven't entered valid e-mail or password, please try again!`);
            return;
        } else {
            auth.signInWithEmailAndPassword(this.state.email, this.state.password)
                .then((cred) => {
                    this.props.showForm()
                }).catch((err) => {
                    console.log(err.message)
                    this.setState({ errorMessage: err.message })
                });
        }
    }

    render() {
        return (
            <div className="login flex flexCenter shadow">
                <FontAwesomeIcon icon={faWindowClose}
                    className="loginX"
                    onClick={this.props.showForm} />
                <h2 className="formHeading">Login/Signup</h2>
                <span className="block formSpan">Login or Create account</span>
                <form className="login-form flex flexCenter p1">
                    <label htmlFor="login-email" className="block">Email</label>
                    <input type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        className="block formInput radius"
                        placeholder="Enter your email"
                        required />
                    <label htmlFor="login-password" className="block">Password</label>
                    <input type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        name="password"
                        className="block formInput radius"
                        placeholder="Enter your password"
                        minLength="6"
                        required />
                    <p className="error">{this.state.errorMessage}</p>
                    <button type="submit" onClick={this.login} className="submitLogin btn radius">Login</button>
                    <button type="submit" onClick={this.createNewAccount} className="submitSignup btn radius">Create account</button>
                </form>
            </div>
        )
    }
}

export default Login;