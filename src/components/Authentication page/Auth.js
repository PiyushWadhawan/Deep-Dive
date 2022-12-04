import React from 'react'
import './Auth.css'
import { FcGoogle } from 'react-icons/fc'
import { FiTwitter } from 'react-icons/fi'

function Auth() {
  return (
    <>
    <video src='/videos/video-3.mp4' autoPlay loop muted />
        <div className="sign-in-outer-container">
            <div className='sign-in-container'>
            <form className="sign-in-form" action="#">
                <div className="title">
                    Sign In
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Enter your Email' />
                    <div className="underline"></div>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Enter your Password'/>
                    <div className="underline"></div>
                </div>
                <div className="input-box btn-continue">
                    <input type="submit" value="Continue"/>
                </div>
            </form>
            <div className="option">or Connect with Social Media</div>
            <div className="social_media social1">
                <a href="/#"><FcGoogle/></a>
                <div className="google">Sign in with Google</div>
            </div>
            <div className="social_media social2">
                <a className='twitter-icon' href="/#"><FiTwitter/></a>
                <div className="google">Sign in with Twitter</div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Auth
