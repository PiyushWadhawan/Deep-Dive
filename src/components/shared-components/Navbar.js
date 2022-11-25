import React, { useState, useEffect } from 'react';
import { Button } from '../home-page-components/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { GiSharkFin } from 'react-icons/gi'

function Navbar() 
{
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) 
    {
      setButton(false);
    } 
    else 
    {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>

        <div className='navbar-container'>
          
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            DeepDive <GiSharkFin className='fa-typo3'/>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/explore' className='nav-links' onClick={closeMobileMenu}>
                Explore
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/test' className='nav-links' onClick={closeMobileMenu}>
                Test
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/pricing' className='nav-links' onClick={closeMobileMenu}>
                Pricing
              </Link>
            </li>

            <li>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>

          {button && <Button buttonStyle='btn--signup' link={"/sing"}>SIGN UP</Button>}
        
        </div>

      </nav>
    </>
  );
}

export default Navbar;

