import React from 'react'
import './Footer.css'
import footer_icon from '../Assets/footer_icon.png'
import printerest_icon from '../Assets/printerest_icon.png'
import instagram_icon from '../Assets/instagram_icon.png'
import watsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_icon} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-socials-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={printerest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={watsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
