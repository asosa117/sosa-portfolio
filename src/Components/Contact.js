import React from 'react'
import NavBar from "../Components/NavBar.js";
import Grad from '../Grad.jpeg';
import "../CompSkills.css";

function Contact() {


  return (
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="style.css" />
        </head>

        <body>
            <NavBar/>
            

            <div className='contactBio'>
            <img src={Grad} className="Grad" alt="Grad" />
            <p className='bio'>
              My name is Andrew Sosa. I am a recent college graduate who is looking for software engineering opportunities to
              further my passion of Computer Science. I have been working to improve my skills in both back-nd and frontend development
              through various projects, school and internships. If you want to get in contact with me click the resume button where my phone number and email are 
              available. Thank you!
            </p>
            
            <a href='https://docs.google.com/document/d/14n5fgHb9rA3dTXkfDCzvkxvIr9IeNSHCBkF7IHY9nNE/edit?usp=share_link'>
            <button className="Resume">
              Resume
            </button>
            </a>
            </div>

            
            
        </body>
    </html>
  )
}

export default Contact;
