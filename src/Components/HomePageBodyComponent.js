import React from "react"
import { Link } from "react-router-dom"
import HomePageComponent from "./HomePageComponent"
import resume from "../resume.pdf"

function HomePageBodyComponent() {
    return (
        <div className="w3-padding-large" id="main">
            <header class="w3-container w3-padding-32 w3-center w3-black" id="home">
                <h1 class="w3-center" id="me"> James Blanchard</h1>
                <p>Full Stack Developer</p>
                <img src="portrait.jpg" alt="boy" class="w3-image" width="496" height="554" />
            </header>
            <div class="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
                <h2 class="w3-text-light-grey">About Me</h2>
                <hr style={{ width: "200px" }} class="w3-opacity" />
                <p class="w3-text-light-grey"> Hi, I'm James. I'm a student at Northeastern University studying Computer
                                                Science and Economics, expecting to graduate in the fall of 2022. I am
                                                currently seeking full-time front end and full stack development
                                                opportunities. I am available starting January 2023 or later. I am
                                                looking for job opportunities that will allow me to pursue my passion
                                                for full stack development, work with other developers, and build my
                                                skill set. Right now I am located in Boston, MA, but I am open to the
                                                idea of relocating or remote work!
                </p>
                <h3 class="w3-padding-16 w3-text-light-grey">My Skills</h3>
                <p class="w3-wide w3-text-light-grey">Full Stack TypeScript/JavaScript</p>
                <div class="w3-white skill-bar">
                    <div class="w3-blue skill-bar-inner" style={{ width: "75%" }}>React</div>
                </div>
                <div class="w3-white skill-bar">
                    <div class="w3-deep-orange skill-bar-inner" style={{ width: "70%" }}>HTML/CSS</div>
                </div>
                <div class="w3-white skill-bar">
                    <div class="w3-purple skill-bar-inner" style={{ width: "65%" }}>Redux</div>
                </div>
                <div class="w3-white skill-bar">
                    <div class="w3-teal skill-bar-inner" style={{ width: "65%" }}>Express</div>
                </div>
                <div class="w3-white skill-bar">
                    <div class="w3-green skill-bar-inner" style={{ width: "60%" }}>NodeJS</div>
                </div>
                <div class="w3-white skill-bar">
                    <div class="w3-yellow skill-bar-inner" style={{ width: "60%" }}>Vanilla JavaScript</div>
                </div>
                <div class="w3-white skill-bar">
                    <div class="w3-red skill-bar-inner" style={{ width: "40%" }}>Angular</div>
                </div>


                <p class="w3-wide w3-text-light-grey">Other Languages</p>
                <div class="w3-white skill-bar">
                    <div class="w3-deep-purple skill-bar-inner" style={{ width: "75%" }}>Python</div>
                </div>
                <div class="w3-white skill-bar">
                    <div class="w3-deep-orange skill-bar-inner" style={{ width: "55%" }}>Java</div>
                </div>
                <p class="w3-wide w3-text-light-grey">Other Skills</p>
                <div class="w3-text-light-grey">
                    <ul class="w3-half">
                        <li>
                            SQL
                        </li>
                        <li>
                            Git
                        </li>
                        <li>
                            MongoDB
                        </li>
                    </ul>
                    <ul class="w3-half">
                        <li>
                            IntelliJ
                        </li>
                        <li>
                            REST API Design
                        </li>
                        <li>
                            AWS (Cloudfront, Lambda, S3)
                        </li>
                    </ul>
                </div>
                <br />

            </div>




            <div class="w3-padding-64 w3-content" id="projects">
                <h2 class="w3-text-light-grey">My Projects</h2>
                <hr style={{ width: "200px" }} class="w3-opacity" />

                <div class="w3-row-padding" style={{ margin: "0 -16px" }}>
                    <div class="w3-half">
                        <Link to="/portfolio-project" style={{ textDecoration: 'none' }}>
                            <div class="project-item">
                                <p>PORTFOLIO WEBSITE</p>
                            </div>
                        </Link>
                        <Link to="/weather-project" style={{ textDecoration: 'none' }}>
                            <div class="project-item">
                                <p>WEATHER APP</p>
                            </div>
                        </Link>
                    </div>

                    <div class="w3-half">
                        <Link to="/course-manager-project" style={{ textDecoration: 'none' }}>
                            <div class="project-item">
                                <p>COURSE MANAGER</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div class="w3-padding-64 w3-content w3-text-grey" id="contact">
                <h2 class="w3-text-light-grey">Contact Me</h2>
                <hr style={{ width: "200px" }} class="w3-opacity" />

                <div class="w3-section">
                    <p><i class="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: Jamesghblanchard@gmail.com</p>
                    <a href="https://www.linkedin.com/in/james-blanchard-365b78172/" style={{ textDecoration: "none" }}><a href="https://www.linkedin.com/in/james-blanchard-365b78172/" style={{ textDecoration: "none" }}
                        class="fa fa-linkedin fa-fw w3-text-white w3-xxlarge w3-margin-right"></a> Linkedin</a>
                </div><br />

            </div>
            <footer class="w3-content w3-padding-64 w3-text-grey w3-xlarge">
                <p class="w3-medium">James Blanchard | Portfolio</p>
            </footer>
        </div>
    )
}

export default HomePageBodyComponent