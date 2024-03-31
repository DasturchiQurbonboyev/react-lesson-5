import React from 'react'
import Contact_hero from './contact_hero/Contact_hero'
import Contact_location from './contact_location/Contact_location'

function Contact() {
    return (
        <div className='container'>
            <Contact_hero />
            <Contact_location />
        </div>
    )
}

export default Contact