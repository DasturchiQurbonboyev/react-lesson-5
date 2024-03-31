import { React, memo } from 'react'
import "./Hero.css"
import Hero_header from './hero_header/Hero_header'
import Positions from './positions/Positions'
import Lastest from './lastest/Lastest'

function Hero() {
    return (
        <>
            <Hero_header />
            <Positions />
            <div style={{ background: "#DCEAF5" }}>
                <Lastest />
            </div>
        </>
    )
}

export default memo(Hero)