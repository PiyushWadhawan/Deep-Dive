import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './homepage-components/Button'
import { GiSharkFin } from 'react-icons/gi'
import './Footer.css'
function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">You have a question?</p>
            <p className="footer-subscription-text">Contact us anytime</p>
            <div className="input-areas">
                <form >
                    <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                    <Button buttonStyle='btn-outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <section className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' className='social-logo'>
                        DeepDive <GiSharkFin className='fa-typo3'/>
                    </Link>
                </div>
                <small className="website-rights">DeepDive © 2022</small>
                <div className="social-icons">
                    <Link className='social-icon-link facebook' to='/' aria-label='Facebook'>
                        <i className='fab fa-facebook-f'></i>
                    </Link>
                    <Link className='social-icon-link facebook' to='/' aria-label='Facebook'>
                        <i className='fab fa-facebook-f'></i>
                    </Link>
                    <Link className='social-icon-link facebook' to='/' aria-label='Facebook'>
                        <i className='fab fa-facebook-f'></i>
                    </Link>
                </div>
            </section>
        </section>
    </div>
  )
}

export default Footer
