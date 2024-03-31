import { React, memo } from 'react'
import heraderImg from "../../images/hero/Header_image.png"
import "./Hero_header.css"


function Hero_header() {
    return (
        <div className='hero container'>
            <div className='hero__left'>
                <h1>We hired people who are very passionate about what they do</h1>
                <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw.</p>
                <button className='buttonlar'>View Positions</button>
            </div>
            <div className='hero__reight'>
                <img src={heraderImg} alt="" />
            </div>
        </div>
    )
}

export default memo(Hero_header)