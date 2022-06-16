import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
//import Axion from 'axios';


const Login = () => {
	return (
	<section className='DigiHangout'>
	    <LoginForm/>
		<h1>Welcome to DigiHangout Social Media!</h1>
		<p>You can login here or click on Create New Account to Register</p>
	</section>
	);
};

const LoginForm = () => {
	return (
	<article className='loginForm'>
	
	<form action='php/login.inc.php' method='post'>
	<div id='loginText'>
	<h1>Login:</h1>
	</div>
	
	<div id='loginEmailOrUsernameTxtFldPosition'>
	<input type='text' id='loginEmailOrUsernameTxtFld' name='loginEmailOrUsernameTxtFld' placeholder='Email or Username'/>
	</div>
	
	<div id='loginPasswordTxtFldPosition'>
	<input type='password' id='loginPasswordTxtFld' name='loginPasswordTxtFld' placeholder='Password'/>
	</div>
	
	<div id='loginButton'>
	<button type='submit' name='submit'>Sign In</button>
	</div>
	</form>
	
	<div id='LinkToRegisterFormPage'>
	<Link to='./CreateAcc'>Create New Account</Link>
	</div>
	
	<div id='LinkToPwdRecoveryPage'>
	<Link to='./PwdRecovery'>Forgot Password?</Link>
	</div>
	
	</article>
	)
};

export default Login;