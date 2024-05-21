import React from 'react'
import { useNavigate } from "react-router-dom";
import "../NavBar.css";
import logo from '../AjsLogo.png';



function NavBar(){

    const navigate = useNavigate();
 
    const homePage = () => {
        navigate("/")
    }

    const skillsPage = () => {
        navigate("/MySkills")
    }

    const contactPage = () => {
        navigate("/Contact")
    }

    

    return(
        <header>
            <button className="LogoBut" type='submit' onClick={homePage}>
                <img src={logo} className="Logo" alt="Logo" />
            </button>
            <div className='NavButtons'>
                <button onClick={skillsPage}>Skills & Projects</button>
                <button onClick={contactPage} class = "contact">Contact</button>
            </div>
            
        </header>
    )
}
export default NavBar;