import React from 'react'
import { useNavigate } from "react-router-dom";
import "../NavBar.css";
import logo from '../AjsLogo.png';



function NavBar(){

    const navigate = useNavigate();
 
    const homePage = () => {
        navigate("/")
    }

    /*
    const skillsPage = () => {
        navigate("/MySkills")
    }

    const contactPage = () => {
        navigate("/Contact")
    }
    */

    

    return(
        <header>
            <button className="LogoBut" type='submit' onClick={homePage}>
                <img src={logo} className="Logo" alt="Logo" />
            </button>
            
            <div className='NavButtons'>
            <a className="buttonLink" href="https://drive.google.com/file/d/1EB_yIniJq9PoGGwQwrx8ejS0ggh16ev5/view?usp=sharing" target="_blank">
                <button>Résumé</button>       
            </a>
            <a className="buttonLink" href="https://www.linkedin.com/in/andrew-sosa-aba4a9231/" target="_blank">
                <button>Linkedin</button> 
            </a>
            <a className="buttonLink" href="https://github.com/asosa117" target="_blank">
                <button>Github</button>      
            </a>
            </div>
            
        </header>
    )
}
export default NavBar;