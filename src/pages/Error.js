import React from 'react'
import './Error.css'
import { Button } from '../components/home-page-components/Button'

const Error = () => {
  return (
    <div className='error-page'>
      <img className="error-img" src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif" alt="" />
      <Button className='btns' link={'/'} buttonStyle='btn--signup' buttonSize='btn--large'>
                Home
            </Button>
    </div>
  )
}

export default Error