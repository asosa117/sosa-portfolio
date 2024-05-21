import React from 'react'
import NavBar from "../Components/NavBar.js";
import githubMark from '../githubMark.png';
import GitHubLogo from '../GitHubLogo.png';
import languages from '../languages.png';
import services from '../services.png';
import assembly from '../assembly.png';
import fluent from '../fluent.png';
import "../CompSkills.css";

function MySkills() {


  return (
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="style.css" />
        </head>

        <body>
            <NavBar/>
            <img src={githubMark} className="logo" alt="githubMark" />
            <img src={GitHubLogo} className="logoWords" alt="GitHubLogo" />
            <div className='github'>
            <a href='https://github.com/asosa117?tab=repositories'>
            <button className="gButton">
              My Projects
            </button>
            </a>
            </div>
            <p className='intro'>
            Through school and curtiosity, I became knowledgeable in various languages and services in software. 
            The school I attended, WPI, had a saying in the computer science department, be the toolbox not the tool.
            I wanted to know all the skills I could in STEM and non STEM related subjects to become the toolbox.
            After graduating from college, I am confident I have the right tools for any job I go into but just as
            the power drill improved on the screwdriver, there will always be new tools to be mastered. 
            </p>

            <div className='skills'>
            <img src={languages} className="langauges" alt="languages" />
            <img src={services} className="services" alt="services" />
            </div>

            <img src={fluent} className="othSkillsF" alt="fluent" />
            <img src={assembly} className="othSkillsA" alt="assembly" />
            
        </body>
    </html>
  )
}

export default MySkills;
