import { React, memo } from 'react';
import "./Contact__hero.css";

function Contact_hero() {
    return (
        <div className='contact__hero'>
            <div className='contact__hero__left'>
                <h2>Have a question ? Let’s get in touch with us.</h2>
                <p>Fill up the Form  and ou team will get back to within 24 hrs</p>
            </div>
            <div className='contact__hero__reight'>
                <div className='contact__hero__location'>
                    <h5>Location</h5>
                    <p>DLF Cybercity, Bhubaneswar,</p>
                    <p>India, &52050</p>
                </div>
                <div className='contact__hero__contact'>
                    <h5>Contact Us</h5>
                    <p>020 7993 2905</p>
                    <p>hi@finsweet.com</p>
                </div>
            </div>
        </div>
    )
}

export default memo(Contact_hero)