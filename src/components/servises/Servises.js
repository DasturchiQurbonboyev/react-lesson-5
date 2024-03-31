import { React, memo } from 'react'
import img from "../images/blog/Image.png"
import images from "../images/blog/Image_inner.png"
import "./Services.css"

function Services() {
    return (
        <div className='services container'>
            <div className="services__hero">
                <img src={images} alt="" />
            </div>

            <div className="services__breaking mini__container">
                <div className='blog__header__top__account'>
                    <img src={img} alt="" />
                    <p>Andrew Jonson</p>
                    <p>Posted on 27th January 2021</p>
                </div>
                <h1>Breaking the code How did we build our Figma plugin </h1>
                <p>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p>
                <p>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p>
                <p>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice.</p>
                <h2>Transform Your Idea Into Reality with Ether a Leading Digital Agency</h2>
                <p>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p>
                <p>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice.</p>
            </div>
        </div>
    )
}

export default memo(Services)