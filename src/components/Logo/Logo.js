import React from 'react';
import Tilt from 'react-tilt';
import logo1 from './logo1.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 100, width: 125 }} >
 				<div className="Tilt-inner"><img className='logo' alt='logo' src={logo1} /> </div>
			</Tilt>
		</div>
	);
}

export default Logo;

