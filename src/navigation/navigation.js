import './navigation.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import classNames from "classnames";

const Nav = ({activeTo}) => {
    return (
        <nav>
            <NavLinkItem to='/main' activeTo={activeTo} text='Main' />
            <NavLinkItem to='/player'activeTo={activeTo} text='Player' />
            <NavLinkItem to='/login'activeTo={activeTo} text='Login' />
            <NavLinkItem to='/register'activeTo={activeTo} text='Register' />
        </nav>
    );
}

const NavLinkItem = ({ to, text, activeTo }) => {

    const isActive = activeTo===to;

    const activeClassNames = classNames("link", {
        activeLink: isActive,
    });

    return (
        <div className='linkContainer'>
            <Link
                className={activeClassNames}
                to={to} >
                {text}
            </Link>
        </div>
    );
}

export default Nav;