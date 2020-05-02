import React from 'react';
import './Header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    Shop
                </Link>
                <Link className="option" to="/contact">Contact</Link>
                {
                    currentUser ? 
                    <div className="option" onClick={() => auth.signOut()}>Logout</div>
                    : <Link to="/signin">Sign In</Link>
                
                }
            </div>
        </div>
    );
}

export default Header;