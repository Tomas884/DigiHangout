import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
//import Axios from 'axios';

const PwdRecovery = () => {
	return(
	<section className='DigiHangout'>
	<PwdRecoveryForm/>
	<h1>Have you forgotten your password?</h1>
	<p>Forgetting password is quite unpleasant situation since you are unable to login to your account, but fortunately you can simply just enter your email address which was<br/>
	used during registration, once you entering your email address and proceeding, the automated email containing temporary password will be sent to your specified email address. </p>
	</section>
	);
};

const PwdRecoveryForm = () => {
	return(
	<article className='pwdRecoveryForm'>
	
	<div id='pwdRecoveryText'><h1>Password Recovery:</h1></div>
	
	<div id='pwdRecEmailTxtFldAndPwdRecBtn'>
	<input type='text' id='pwdRecEmailTxtFld' name='pwdRecEmailTxtFld' placeholder='Email'/>
	<button>Recover My Password</button>
	</div>
	
	</article>
	);
};

export default PwdRecovery;