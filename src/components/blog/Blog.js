import { React, memo } from 'react'
import Blog_header from './blog_header/Blog_header'
import Blog_post from './blog_post/Blog_post'


function Blog() {
    return (
        <>
            <div style={{ background: "#DCEAF5" }}>
                <Blog_header />
            </div>
            <Blog_post />
        </>
    )
}

export default memo(Blog)