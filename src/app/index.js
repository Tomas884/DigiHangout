import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import PwdRecovery from './PwdRecovery';
import CreateAccount from './CreateAcc';
import ChangeAccData from './ChangeAccData';
import DisplayMyAccData from './DisplayMyAccData';
import DeleteAcc from './DeleteAcc';
import Home from './Home';
import AboutDigiHangout from './AboutDigiHangout';
import ThemesSettings from './ThemesSettings';

const ReactRouterSetup = () => {
	return (
	<Router>
	    <Switch>
		    
			<Route exact path='/'>
			<Login/>
			</Route>
			
			<Route path='/CreateAcc'>
			<CreateAccount/>
			</Route>
			
			<Route path='/PwdRecovery'>
			<PwdRecovery/>
			</Route>
			
			<Route path='/DeleteAcc'>
			<DeleteAcc/>
			</Route>
			
			<Route path='/DisplayMyAccData'>
			<DisplayMyAccData/>
			</Route>
			
			<Route path='/ChangeAccData'>
			<ChangeAccData/>
			</Route>
			
			<Route path='/Home'>
			<Home/>
			</Route>
			
			<Route path='/AboutDigiHangout'>
			<AboutDigiHangout/>
			</Route>
			
			<Route path='/ThemesSettings'>
			<ThemesSettings/>
			</Route>
			
		</Switch>
	</Router>
	);
};

export default ReactRouterSetup;