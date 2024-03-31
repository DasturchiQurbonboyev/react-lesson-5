import React from 'react'
import img1 from "../../images/hero/latest/Image1.png";
import img2 from "../../images/hero/latest/Image2.png";
import img3 from "../../images/hero/latest/Image3.png";
import icon from "../../images/hero/latest/Icon.png";
import "./Blog_post.css"


function Blog_post() {
    return (
        <div className='container blog__post'>
            <h1>All posts</h1>
            <div className='latest__box'>
                <div className='latest__card'>
                    <img className='latest__card__img' src={img1} alt="" />
                    <div id='color' className='latest__card__bottom'>
                        <h5>Why you have to digitalize in 2021</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                        <div>
                            <img src={icon} alt="" />
                        </div>
                    </div>
                </div>
                <div className='latest__card'>
                    <img className='latest__card__img' src={img2} alt="" />
                    <div id='color' className='latest__card__bottom'>
                        <h5>Why you have to digitalize in 2021</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                        <div>
                            <a href="#">Learn More</a> <img src={icon} alt="" />
                        </div>
                    </div>
                </div>
                <div className='latest__card'>
                    <img className='latest__card__img' src={img3} alt="" />
                    <div id='color' className='latest__card__bottom'>
                        <h5>Why you have to digitalize in 2021</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                        <div>
                            <a href="#">Learn More</a> <img src={icon} alt="" />
                        </div>
                    </div>
                </div>
                <div className='latest__card'>
                    <img className='latest__card__img' src={img3} alt="" />
                    <div id='color' className='latest__card__bottom'>
                        <h5>Why you have to digitalize in 2021</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                        <div>
                            <a href="#">Learn More</a> <img src={icon} alt="" />
                        </div>
                    </div>
                </div>
                <div className='latest__card'>
                    <img className='latest__card__img' src={img1} alt="" />
                    <div id='color' className='latest__card__bottom'>
                        <h5>Why you have to digitalize in 2021</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                        <div>
                            <a href="#">Learn More</a> <img src={icon} alt="" />
                        </div>
                    </div>
                </div>
                <div className='latest__card'>
                    <img className='latest__card__img' src={img2} alt="" />
                    <div id='color' className='latest__card__bottom'>
                        <h5>Why you have to digitalize in 2021</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                        <div>
                            <a href="#">Learn More</a> <img src={icon} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blog_post