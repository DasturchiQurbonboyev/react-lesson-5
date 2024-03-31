import { React, memo } from 'react'
import Careers__testing from './testing/Careers__testing'
import Careers_details from './details/Careers_details'
import Careers_applay from './applay/Careers_applay'

function Careers() {
    return (
        <div>
            <Careers__testing />
            <Careers_details />
            <Careers_applay />
        </div>
    )
}

export default memo(Careers)