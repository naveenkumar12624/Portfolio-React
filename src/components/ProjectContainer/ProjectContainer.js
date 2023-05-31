import React from 'react'
import {Element} from "react-scroll";
import Project from '../Project/Project';
import "./ProjectContainer.css";

const ProjectContainer = () => {
    
    const projects= [
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzm4Onw6ckeKLY-AI2nrxfwkwgUp60tiOCRw&usqp=CAU",
            title:"INTERNET OF THINGS",
            desc:"The Internet of Things (IoT) describes the network of physical objects—“things”—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet. ",
            link:"www.google.com",
        },
        {
            img:"https://dezyre.gumlet.io/images/blog/artificial-intelligence-project-ideas/image_59320476021652189617421.png?w=330&dpr=2.6",
            title:"FACE RECOGNITION SYSTEM",
            desc:" Face Recognition is a computer application that is capable of detecting, tracking, identifying or verifying human faces from an image or video captured using a digital camera. ",
            link:"www.google.com",
        },
        {
            img:"https://businesspost.ng/wp-content/uploads/2023/02/Google-AI.jpg",
            title:"GOOGLE OPEN SOURCE AI",
            desc:"Google AI projects are platforms empowered by google for building new projects based on AI or ML. They facilitate comfortable model building as compared to other AI projects and also help in experimenting with your ideas",
            link:"www.google.com",
        },
        {
            img:"https://rastart.fr/wp-content/uploads/2022/03/chatbot-scaled.jpg",
            title:"CHATBOT-HUMAN ASSITS",
            desc:" A chatbot is a computer program that uses artificial intelligence (AI) and natural language processing (NLP) to understand customer questions and automate responses to them, simulating human conversation. ",
            link:"www.google.com",
        },
        {
            img:"https://www.aroged.com/wp-content/uploads/2023/02/OpenAI-Launches-Paid-ChatGPT-Plus-Subscription.jpg",
            title:"OPENAI-CHATGPT",
            desc:"If you are struggling with writing code for a particular problem, then all your worries end here. ChatGPT can easily write a code snippet if you describe the problem statement correctly. ",
            link:"www.google.com",
        },
        {
            img:"https://techatronic.com/wp-content/uploads/2021/04/IMG_20210402_120713-scaled-e1617774808905-1024x768.jpg",
            title:"MOISTURE DETECTION",
            desc:"The soil moisture sensor is a simple device for measuring the moisture level in soil and similar materials. The soil moisture sensor is straight forward to use. The two large exposed pads function as probes for the sensor, together acting as a variable resistor. ",
            link:"www.google.com",
        }
    ];

return (
<Element className="projectContainer" id="projects">
    <h1>Projects</h1>
    <p>Here are some projects which I've done to make people lives easy!</p>
    <div className="projectContainer__projects">
{
        projects.map((project, index)=>{
            return(
                <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link}/>
            );
            
    })
}
    </div>
</Element>
);
};



export default ProjectContainer