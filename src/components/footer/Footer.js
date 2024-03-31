import React from 'react'
import logo from "../images/footer/logoFooter.png";
import "./Footer.css"
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer container'>
            <div className='footer__top'>
                <div className='footer__top_1'>
                    <img style={{ color: "white" }} src={logo} alt="" />
                    <h3>Bespoke software solutions</h3>
                    <div>
                        <FaFacebook className='icon__color' />
                        <FaYoutube className='icon__color' />
                        <FaInstagram className='icon__color' />
                        <FaTwitter className='icon__color' />
                    </div>
                </div>
                <div className='footer__top_2'>
                    <h3>Company</h3>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Services</a>
                    <a href="#">Blog</a>
                </div>
                <div className='footer__top_3'>
                    <h3>Connect</h3>
                    <p>hi@finsweet.com</p>
                    <a href="tel:+1234567890">+(123) 456-7890</a>
                </div>
                <div className='footer__top_4'>
                    <h3>Join Newsletter</h3>
                    <input type="text" name="" id="" placeholder='Type email here' />
                    <button className='buttonlar'>Subscribe</button>
                </div>
            </div>
            <div className="footer__bottom">
                <p>© All rights reserved – Finsweet</p>
                <div>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer