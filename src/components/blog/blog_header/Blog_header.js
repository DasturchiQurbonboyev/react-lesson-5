import { React, memo } from 'react'
import img from "../../images/blog/Image.png"
import icon from "../../images/hero/latest/Icon.png";
import header from "../../images/blog/Header_Image.png"
import { Link } from 'react-router-dom';
import "./Blog_header.css"


function Blog_header() {
    return (
        <div className='container blog__header'>
            <div className='blog__header__top'>
                <div className='blog__header__top__account'>
                    <img src={img} alt="" />
                    <p>Andrew Jonson</p>
                    <p>Posted on 27th January 2021</p>
                </div>
                <h2>Our internal process and longerm vision</h2>
                <p className='blog__header__top__about'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the</p>
                <div className='blog__header__top__learn'>
                    {/* <Link to={"../blog_inner"}>Lean more</Link><img src={icon} alt="" /> */}
                    <a href="../blog_inner/Blog_inner.js">learn more</a><img src={icon} alt="" />
                </div>
            </div>
            <div>
                <img src={header} alt="" />
            </div>
        </div>
    )
}

export default memo(Blog_header)