import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
//import Axios from 'axios';

const DeleteAcc = () => {
	return(
	<section className='DigiHangout'>
	<DeleteAccForm/>
	<h1>We are sorry that you have decided to leave DigiHangout</h1>
	<p>You can either permanently Delete your Account and never be able to login or you can Deactivate your account only, meaning that if you <br/>
	login next time to your account, your account is going to be automatically reactivated</p>
	</section>
	);
};

const DeleteAccForm = () => {
	return(
	<article className='deleteAccForm'>
	
	<div id='deleteAccText'><h1>Delete Account:</h1></div>
	
	<div id='delAccEmailOrUsernameTxtFld'>
	<input type='text' id='delAccEmailOrUsernameTxtFld' name='delAccEmailOrUsernameTxtFld' placeholder='Email/Username'/>
	</div>
	
	<div id='delAccPasswordTxtFld'>
	<input type='password' id='delAccPasswordTxtFld' name='delAccPasswordTxtFld' placeholder='Password'/>
	</div>
	
	<div id='delAccConfirmCheckBox'>
	<input type='checkbox' id='delAccConfirmCheckBox' name='delAccConfirmCheckBox'/>
	</div>
	
	<div id='delAccConfirmTxt'><p>I am sure that I want to permanently delete my account.</p></div>
	
	<div id='deleteOrDeactivateAccButton'>
	<button>Delete Account</button> <br/><br/>
	<button>Deactivate Account</button>
	</div>
	
	</article>
	);
};

export default DeleteAcc;