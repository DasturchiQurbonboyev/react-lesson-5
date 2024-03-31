import { React, memo } from 'react'
import "./Careers__testing.css"

function Careers__testing() {
    return (
        <div className='careers__testing container'>
            <h1>Testing Engineer</h1>
            <div className='careers__testing__description'>
                <div>
                    <h5>Job Discription</h5>
                    <p>Remote, India , 4 to 5 Years Of Experience Department: Website Design 5 Positions Available.</p>
                </div>
                <div>
                    <h5>Salary</h5>
                    <p>$30000 Per Anum </p>
                </div>
            </div>
        </div>
    )
}

export default memo(Careers__testing)