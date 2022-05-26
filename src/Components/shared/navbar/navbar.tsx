import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Link,
    Navigate,
    useLocation,
    useNavigate
} from "react-router-dom";
import Wallet from '../../../assets/icons/wallet.svg';
import Tricked from '../../../assets/images/Esports-orgs/Tricked.svg';
import authStore from '../../../Stores/authStore';
import './navbar.css';
import Logo from '../../../Assets/Cappsule_logo.svg'


const Navbar = (props: any) => {
    const location = useLocation();

    return (
        <div className='Navbar'>
            <div className='Navbar__Wrapper'>
                <div className='NavbarLogo'>
                    <Link className='NavbarLogo_Link' to='/'>
                        <img className='logo' src={Logo} alt='Capsule' />
                    </Link>
                </div>
                <div className='NavbarMenu'>
                    <Link className='NavbarMenu__Links' style={{ opacity: location.pathname === '/' ? "1" : "0.5" }} to='/'>Home</Link>
                    {authStore.user !== undefined ? <LoggedInNavbar /> : <Link className='NavbarMenu__Links' to='/Login'>Login</Link>}
                </div>
            </div>
        </div>
    )
}
export default Navbar

const LoggedInNavbar = () => {
    const location = useLocation();

    const onClick = () => {
        setIsOpen(!isOpen);
    }

    const logout = () => {
        authStore.logout();
        window.location.reload();
    }
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Link className='NavbarMenu__Links' style={{ opacity: location.pathname === '/Cappsules' ? "1" : "0.5" }} to='/Cappsules'>Cappsules</Link>
            <div className='LoggedIn_Container' onClick={onClick}>
                <div className='LoggedIn_Wrapper'>
                    <div className='NavbarMenu__Links '>
                        {authStore.user?.username}
                    </div>
                </div>
                {isOpen ?
                    <div className='Dropdown'>
                        <div className='Dropdown__Logout'>
                            <div className='Dropdown__option__text' onClick={logout}>
                                Logout
                            </div>
                        </div>
                    </div>
                    : null}
            </div>
        </>
    )
}

