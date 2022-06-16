import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
//import Axios from 'axios';

const DisplayMyAccData = () => {
	return (
	<section className='DigiHangout'>
	<DisplayAccData/>
	<div id='guideHeading'><h1>Your Account Data</h1></div>
	<div id='guideText'>
	<p>You can easily update your account details to the new ones<br/> or fix details which might be wrongly entered during the registration</p>
	</div>
	</section>
	);
};

const DisplayAccData = () => {
	return(
	<article className='myAccDataArea'>
	
	{/*Add a Link which takes to Change Account Data Page*/}
	
	</article>
	);
};

export default DisplayMyAccData;