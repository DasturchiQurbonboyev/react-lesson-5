import { React, memo } from 'react'
import location_img from "../../images/contact/location.png"
import "./Contact_location.css"

function Contact_location() {
    return (
        <>
            <div className='contact__location'>
                <div className='contact__location__left'>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                    <input type="text" placeholder='Email address' />
                    <textarea name="" id="" cols="30" placeholder='Type message' rows="10"></textarea>
                </div>
                <div className='contact__location__reight'>
                    <img src={location_img} alt="" />
                </div>
            </div>
            <button style={{ marginBottom: "100px" }} className='buttonlar'>Submit</button>
        </>
    )
}

export default memo(Contact_location)