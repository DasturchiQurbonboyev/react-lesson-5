import { React, memo } from 'react'
import "./Careers_applay.css"

function Careers_applay() {
    return (
        <div className='container careers__applay'>
            <h1 className=''>Apply Now</h1>
            <div className='careers__inputs'>
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
                <input type="text" placeholder='Email Id' />
                <input type="text" placeholder='Mobile No' />
            </div>
            <div className='careers__textarea'>
                <textarea placeholder='Why do you thing you are good fit for Ether?'></textarea>
            </div>
            <button className='buttonlar'>Submit</button>

        </div>
    )
}

export default memo(Careers_applay)