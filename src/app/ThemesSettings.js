import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
//import Axios from 'axios';

const ThemesSettings = () => {
    return (
	<section className='DigiHangout'>
	<ThemeSelection/>
	</section>
	);
};

const ThemeSelection = () => {
    return (
	<article className='themeConfigArea'>
	
	<p>Make option for Light Mode and Dark Mode</p>
	<p>Option for customising colors</p>
	
	</article>
	);
};


export default ThemesSettings;