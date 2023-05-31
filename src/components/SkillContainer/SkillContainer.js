import React from 'react'
import{Element} from "react-scroll"
import skillImg from "../../images/skills.png" 
import { LinearProgress} from '@material-ui/core'
import './SkillContainer.css'


const SkillContainer = () => {
  return (
   <Element className="skillcontainer" id="skills">
    <div className='skillcontainerimage'>
        <img src={skillImg} />

    </div>
    <div className='skillcontainertext'>
        <h2>SKILLSET</h2>
     
        <div className='skillcontainerskillsset'>
            <h5>DATABASE MANAGEMENT</h5>
            <div className='skillcontainerslider skillslide1'>
                <LinearProgress variant='determinate' value={90}/> 
            </div>   
        </div>

        <div className='skillcontainerskillsset'>
            <h5>JAVASCRIPT & REACT</h5>
            <div className='skillcontainerslider skillslide2'>
                <LinearProgress variant='determinate' value={70}/> 
            </div>   
        </div>

        <div className='skillcontainerskillsset'>
            <h5>JAVA</h5>
            <div className='skillcontainerslider skillslide3'>
                <LinearProgress variant='determinate' value={80}/> 
            </div>   
        </div>

        <div className='skillcontainerskillsset'>
            <h5>DEEP LEARNING</h5>
            <div className='skillcontainerslider skillslide4'>
                <LinearProgress variant='determinate' value={75}/> 
            </div>   
        </div>

        <div className='skillcontainerskillsset'>
            <h5>IOT</h5>
            <div className='skillcontainerslider skillslide5'>
                <LinearProgress variant='determinate' value={90}/> 
            </div>   
        </div>
    </div>
   </Element>
  )
}

export default SkillContainer