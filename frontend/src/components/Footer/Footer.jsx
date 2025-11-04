import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>At EasyEats, we are passionate about crafting unforgettable dining experiences, blending culinary expertise with locally sourced ingredients to create innovative dishes that celebrate flavor and quality. Our commitment to exceptional service and ambiance ensures that every visit is more than a meal – it’s a journey of taste, comfort, and warmth.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="https://www.facebook.com/" />
                <img src={assets.twitter_icon} alt="https://x.com/?lang=en" />
                <img src={assets.linkedin_icon} alt="https://sg.linkedin.com/" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@EasyEats.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © EasyEats.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
