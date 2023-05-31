import React from 'react'
import { Element } from 'react-scroll';
import Experience from '../ExperienceBox/Experience'; 
import "./ExperienceContainer.css"
const ExperienceContainer = () => {
  return (
    <Element className='experienceContainer' id='exp'>
        <h1>Experience</h1>
        <div className="experienceContainer__info"> 
            <Experience number='90,000/-' title="Highest Salary"/>
            <Experience number='60+' title="Projects" style={{backgroundColor:"#f64c08"}} text-align="align"/>
            <Experience number='2+' title="Years Experience"/>
            <Experience number='20+' title="Completed Courses"/>           

        </div>
    </Element>
  ) 
}

export default ExperienceContainer