import React from 'react';
import { Element } from 'react-scroll';
import {IconButton } from "@material-ui/core";
import { LinkedIn,Facebook,Instagram } from '@material-ui/icons';
import "./Contact.css";
const Contact = () => {
  return (
    <Element className="contact" id="contact"> 
    <h1>Get Me Through :</h1>
    <div className='contact_container'>
        <p>
        Email : <a href="https://mail.google.com/mail/u/0/#chats?compose=GTvVlcSMTgmLsPcqfKsqWLwkXlzzffzNdlbRVZZnJgPnPNPjpqBgpxVFntmqGBHNChLHwDpCdtJNv"><span>naveenkumar12624@gmail.com</span></a>
        </p>
        <p>
            Github Username : <a href="https://github.com/naveenkumar12624"><span>@naveen12624</span></a>
        </p>
        <div className='contact_icons'>
            <a href="https://www.linkedin.com/in/naveen-kumar-s-bb63b3247/">
                <IconButton>
                <LinkedIn/>
                </IconButton>
            </a>

            <a href="https://www.facebook.com/profile.php?id=100009473983665">
                <IconButton>
                <Facebook/>
                </IconButton>
            </a>

            <a href="https://www.instagram.com/">
                <IconButton>
                <Instagram/>
                </IconButton>
            </a>
        </div>
    </div>
    </Element>
  ) 
}

export default Contact