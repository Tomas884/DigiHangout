import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
//import Axios from 'axios';
import {Link} from 'react-router-dom';

const Home = () => {
	return(
	<section className='DigiHangout'>
	<HomePageHeader/>
	<HomePageContArea/>
	</section>
	);
};

const HomePageHeader = () => {
	return(
	<article className='homePgHeader'>
	
	</article>
	);
};

const HomePageContArea = () => {
	return (
	<article className='homePgContArea'>
	
	</article>
	);
};

export default Home;