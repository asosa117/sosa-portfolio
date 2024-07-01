import React from 'react'
import NavBar from "../Components/NavBar.js";
import yStar from '../yStar.png';
import Skills from '../Lan-3.png';
import headshot from '../headshot.png';
import "../Components.css";

function Home() {

  return (
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>

        <body>
            <NavBar/>
            <section>
                <div className='opening'>
                    <section>
                        <p class="greeting">Hi, I'm </p>
                        <p class="name">Andrew Sosa. </p>
                        <p class="statement">I write code sometimes. </p>
                        <p class="description">I am a computer science major with a passion for software engineering.
                            I have learned under various professors and industry professionals who have taught me lessons in
                            life, work, and academics. </p>
                        <p class="suspense">But... </p>
                    </section>
                    <img className='headshot' src={headshot} alt="headshot"/>
                </div>
                    <div className="IWKL">
                        <div className="dipper">
                            <img src={yStar} className="star1" alt="yStar" />
                            <img src={yStar} className="star2" alt="yStar" />
                            <img src={yStar} className="star3" alt="yStar" />
                            <img src={yStar} className="star4" alt="yStar" />
                            <img src={yStar} className="star5" alt="yStar" />
                            <img src={yStar} className="star9" alt="yStar" />
                            <img src={yStar} className="star6" alt="yStar" />
                        </div>
                        <p class="Learn"> I will continue to learn.</p>
                        <div className="dipper">
                            <img src={yStar} className="star1" alt="yStar" />
                            <img src={yStar} className="star8" alt="yStar" />
                            <button className='starBut'>
                                <img src={yStar} className="star7" alt="yStar" />
                            </button>
                            
                            <img src={yStar} className="star2" alt="yStar" />
                            <img src={yStar} className="star3" alt="yStar" />
                            <img src={yStar} className="star4" alt="yStar" />
                            <img src={yStar} className="star5" alt="yStar" />
                        </div>
                    </div>
            </section>
                <div>
                    <img src={Skills} className="POM" alt="Skills" />
                </div>
                <section className='SaP'>
                    <text className='myP'>
                        My Projects
                    </text>
                    <text className='myPd'>
                        Here are some projects I've worked on that highlight my 
                        skills in full stack development
                    </text>
                    <div className='projbuts'>
                        <div className='proj1'>
                            <div className='te'>
                            Medication reminder system that utilizes an IOS app 
                            and a microcontroller programmed device.
                            </div>
                            <a className="buttonLink" href="https://youtu.be/OYtlWqiG4fU" target="_blank">
                                <button className='redirect'>
                                    Learn More {'>'}
                                </button>
                            </a>
                            
                        </div>
                        <div className='proj2'>
                            <div className='te'>
                            Vintage keyboard inspired by the Casio PT-80 that plays
                            notes corresponding to its keys.
                            </div>
                            <a className="buttonLink" href="https://github.com/asosa117/PianoKeyboard" target="_blank">
                                <button className='redirect'>
                                    Visit Repo {'>'}
                                </button>
                            </a>
                        </div>
                        <div className='proj3'>
                            <div className='te'>
                            Stock forecaster that takes in any stock ticker and
                            forecasts its price for any given portion of time.
                            </div>
                            <a className="buttonLink" href="https://github.com/asosa117/StockForecaster" target="_blank">
                                <button className='redirect'>
                                    Visit Repo {'>'}
                                </button>
                            </a>
                        </div>
                    </div>
                    <a className="buttonLink" href="https://github.com/asosa117" target="_blank">
                        <button className='GH'>
                            See more on GitHub {'>'}
                        </button>
                    </a>
                </section>
                <section className='WE'>
                    <div className='wTitle'>
                        <text className='wt'>
                            Work Experience
                        </text>
                        <text className='wd'>
                            I started working early on in my life and continued working
                            whenever I had any time from school. If theres one
                            thing I learned it's how much a dollar really cost.
                        </text>
                    </div>
                    <div className='work'>
                        <div className='YaT'>
                            <text className='yrs'>
                                2016 – 2023
                            </text>
                            <text className='companies'>
                                Software Engineer Intern/ Manufacturing Technician •
                            </text>
                            <a className='companies' href='http://www.vcinc.com' target="_blank"> Vector Controls Inc {">"}</a>
                        </div>
                        <text className='compDesc'> 
                            Programmed and tested a remote controller with a custom-built PCB and microcontroller 
                            to sail a water vessel from land. Manufactured control system boxes for government marine vessels by
                            reading assembly drawings and wiring schematics to build the system’s hardware and wired 
                            connectors. Tested all connectors, relay blocks, and control units using 
                            multimeter and custom test code. Responsible for maintaining an EOS 3D printer
                            by cleaning and loading up new material after each print. Cleaned printed parts 
                            and quality checked that their measurements matched their respective assembly drawings.
                        </text>
                        <div className='YaT'>
                            <text className='yrs'>
                                2022 – 2023
                            </text>
                            <text className='companies'>
                                Full Stack Developer (freelance)
                            </text>
                        </div>
                            <text className='compDesc'>
                                Created an inventory and transaction system for a distribution company.
                                The application held all of the company's inventory information,
                                transaction details, and list of upcoming and past orders. Maintained,
                                debugged and programmed newly desired features after completion of
                                application.
                            </text>
                    </div>
                </section>
                <section className='thanks'>
                    <text className='bye'>
                        Thanks for getting to know me!
                    </text>
                    <text className='contact'>
                        Need a hardworking software engineer with a <br/>fresh perspective?
                        Contact me.
                    </text>
                    <div className='email'>
                        Email: AndrewSosa5@gmail.com
                    </div>
                </section>

                <section className='info'>
                    <div className='findMe'>
                        <a className='links' href='https://drive.google.com/file/d/1NM2PJ8nqZdf8tRhxDXFXTKfR7uQhyuJ8/view?usp=sharing' target="_blank">My Résumé</a>
                        <br/><a className='links' href="https://www.linkedin.com/in/andrew-sosa-aba4a9231/" target="_blank" >My Linkedin</a>
                        <br/><a className='links' href="https://github.com/asosa117" target="_blank">My GitHub</a>
                    </div>
                    <text className='copyright'>
                        © Andrew Sosa 2024
                    </text>

                </section>
            <script src="endless.js"></script>
        </body>
    </html>
  )
}

export default Home;
