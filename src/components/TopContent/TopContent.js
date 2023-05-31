import React from 'react'
import {Link} from "react-scroll"
import "./TopContent.css"
const TopContent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontentcontainer'>
            <h1> Mr.Naveen Kumar</h1>
            <p>A practicing Full Stack Developer</p>
            <a href="https://drive.google.com/u/0/uc?id=19Xp5V6zj6SPYx9LEcfdA7-xAtruR-r2X&export=download" download>
                <button className='downloadbutton'>
                    Download CV
                </button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button className='myworkbutton'>My Work</button>  
            </Link>
        </div>
    </div>
  )
}

export default TopContent