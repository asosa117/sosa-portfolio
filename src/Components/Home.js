import React from 'react'
import NavBar from "../Components/NavBar.js";
import yStar from '../yStar.png';

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
                <article>
                    <p class="greeting">Hi, I'm </p>
                    <p class="name">Andrew Sosa. </p>
                    <p class="statement">I write code sometimes. </p>
                    <p class="description">I am a computer science major with a passion for software engineering.
                        I have learned under various professors and industry professionals who have taught me lessons in
                        life, work, and academics. </p>
                    <p class="suspense">But... </p>
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
                </article>
            </section>
            <script src="endless.js"></script>
        </body>
    </html>
  )
}

export default Home;
