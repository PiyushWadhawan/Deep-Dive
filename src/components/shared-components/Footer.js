import React from 'react'
// import { Link } from 'react-router-dom'
import { HashLink as Link} from 'react-router-hash-link';
import { Button } from '../home-page-components/Button'
import { GiSharkFin } from 'react-icons/gi'
import { FaLinkedin } from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
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
                <h2>Expore the Website</h2>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <Link className='options' to='/explore'>Career Options</Link>
                    <Link className='options' to='/test'>Take the Test</Link>
                    <Link className='options' to='/pricing'>View Pricing</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <section className="social-media-wrap">
                <div className="footer-logo">
                    <Link to={'#top'} className='social-logo'>
                        DeepDive <GiSharkFin className='fa-typo3'/>
                    </Link>
                </div>
                <small className="website-rights">DeepDive © 2022</small>
                <div className="social-icons">
                    <a className='social-icon-link facebook' href='https://www.linkedin.com/in/piyush-wadhawan-b6065a190/' target="blank">
                        <FaLinkedin/>
                    </a>
                    <a className='social-icon-link facebook' href='https://medium.com/me/stories/public' target="blank">
                        <BsMedium/>
                    </a>
                    <a className='social-icon-link facebook' href='https://twitter.com/wa_piyush' target="blank">
                        <BsTwitter/>
                    </a>
                </div>
            </section>
        </section>
    </div>
  )
}

export default Footer
