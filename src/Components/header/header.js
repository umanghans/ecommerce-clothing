import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'
const Header = () =>(
	<div className='header'>
			<Link to="/" className='logo-container'>
				<Logo className='logo'/>
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/shop'>
					Contact
				</Link>
			</div>
	</div>
	)

export default Header;