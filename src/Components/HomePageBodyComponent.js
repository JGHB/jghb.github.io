import React from "react"
import { Link } from "react-router-dom"
import HomePageComponent from "./HomePageComponent"

function HomePageBodyComponent() {
    return (
        <div className="w3-padding-large" id="main">
            <header class="w3-container w3-padding-32 w3-center w3-black" id="home">
                <h1 class="w3-center" id="me"> James Blanchard</h1>
                <p>Full Stack Developer</p>
                <img src="portrait.jpg" alt="boy" class="w3-image" width="992" height="1108" />
            </header>
            <div class="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
                <h2 class="w3-text-light-grey">About Me</h2>
                <hr style={{ width: "200px" }} class="w3-opacity" />
                <p class="w3-text-light-grey"> Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h3 class="w3-padding-16 w3-text-light-grey">My Skills</h3>
                <p class="w3-wide w3-text-light-grey">Full Stack Javascript</p>
                <div class="w3-white skill-bar">
                    <div class="w3-yellow skill-bar-inner" style={{ width: "60%" }}>Vanilla Javascript</div>
                </div>
                <div class="w3-white skill-bar">
                    <div class="w3-blue skill-bar-inner" style={{ width: "75%" }}>React</div>
                </div>
                <div class="w3-white skill-bar">
                    <div class="w3-purple skill-bar-inner" style={{ width: "65%" }}>Redux</div>
                </div>
                <div class="w3-white skill-bar">
                    <div class="w3-deep-orange skill-bar-inner" style={{ width: "70%" }}>HTML/CSS</div>
                </div>
                <div class="w3-white skill-bar">
                    <div class="w3-red skill-bar-inner" style={{ width: "40%" }}>Angular</div>
                </div>
                <div class="w3-white skill-bar">
                    <div class="w3-green skill-bar-inner" style={{ width: "60%" }}>NodeJS</div>
                </div>
                <div class="w3-white skill-bar">
                    <div class="w3-teal skill-bar-inner" style={{ width: "65%" }}>Express</div>
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
                            JUM
                        </li>
                    </ul>
                </div>
                <br />

                <div>
                    <button class="w3-button w3-light-grey w3-padding-large w3-section">
                        <i class="fa fa-download"></i> Download Resume
                    </button>
                </div>
            </div>




            <div class="w3-padding-64 w3-content" id="projects">
                <h2 class="w3-text-light-grey">My Projects</h2>
                <hr style={{ width: "200px" }} class="w3-opacity" />

                <div class="w3-row-padding" style={{ margin: "0 -16px" }}>
                    <div class="w3-half">
                        <Link to="/portfolio-project" style={{ textDecoration: 'none' }}>
                            <div href="#about" class="project-item">
                                <p>PORTFOLIO WEBSITE</p>
                            </div>
                        </Link>
                        <div href="#" class="project-item">
                            <p>WEATHER APP</p>
                        </div>
                    </div>

                    <div class="w3-half">
                        <div href="#" class="project-item">
                            <p>MEDITATIVE TRACKER</p>
                        </div>
                        <div href="#" class="project-item">
                            <p>COURSE MANAGER</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w3-padding-64 w3-content w3-text-grey" id="contact">
                <h2 class="w3-text-light-grey">Contact Me</h2>
                <hr style={{ width: "200px" }} class="w3-opacity" />

                <div class="w3-section">
                    <p><i class="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: blanchard.ja@northeastern.edu</p>
                    <p><i class="fa fa-linkedin fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Linkedin</p>
                </div><br />

            </div>
            <footer class="w3-content w3-padding-64 w3-text-grey w3-xlarge">
                <p class="w3-medium">James Blanchard | Portfolio</p>
            </footer>
        </div>
    )
}

export default HomePageBodyComponent