import React, { useState } from "react";
import ProjectCardComponent from "../Components/ProjectCardComponent";

function PersonalSiteContainer() {

    const [projectState, setProjectState] = useState(null);

    return (
        <div class="w3-black">
            <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
                <img src="logo2.svg" style={{ width: "100%" }} class="corner-image" />
                <a href="#" class="w3-bar-item w3-button w3-padding-large w3-black sidebar-item">
                    <p>HOME</p>
                </a>
                <a href="#about" class="w3-bar-item w3-button w3-padding-large w3-black sidebar-item">
                    <p>ABOUT</p>
                </a>
                <a href="#projects" class="w3-bar-item w3-button w3-padding-large w3-black sidebar-item">
                    <p>PROJECTS</p>
                </a>
                <a href="#" class="w3-bar-item w3-button w3-padding-large w3-black sidebar-item">
                    <p>GITHUB</p>
                </a>
                <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-black sidebar-item">
                    <p>CONTACT</p>
                </a>
            </nav>
            <div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
                <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
                    <a href="#" class="w3-bar-item w3-button" style={{ width: "25% !important" }}>HOME</a>
                    <a href="#about" class="w3-bar-item w3-button" style={{ width: "25% !important" }}>ABOUT</a>
                    <a href="#projects" class="w3-bar-item w3-button" style={{ width: "25% !important" }}>PROJECTS</a>
                    <a href="#contact" class="w3-bar-item w3-button" style={{ width: "25% !important" }}>CONTACT</a>
                </div>
            </div>
            <div className="w3-padding-large" id="main">
                <header class="w3-container w3-padding-32 w3-center w3-black" id="home">
                    <h1 class="w3-jumbo"> James Blanchard</h1>
                    <p>Full Stack Developer</p>
                    <img src="portrait.jpg" alt="boy" class="w3-image" width="992" height="1108" />
                </header>
                <div class="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
                    <h2 class="w3-text-light-grey">My Name</h2>
                    <hr style={{ width: "200px" }} class="w3-opacity" />
                    <p>Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h3 class="w3-padding-16 w3-text-light-grey">My Skills</h3>
                    <p class="w3-wide">Photography</p>
                    <div class="w3-white">
                        <div class="w3-dark-grey" style={{ height: "28px", width: "95%" }}></div>
                    </div>
                    <p class="w3-wide">Web Design</p>
                    <div class="w3-white">
                        <div class="w3-dark-grey" style={{ height: "28px", width: "95%" }}></div>
                    </div>
                    <p class="w3-wide">Photoshop</p>
                    <div class="w3-white">
                        <div class="w3-dark-grey" style={{ height: "28px", width: "95%" }}></div>
                    </div><br />

                    <button class="w3-button w3-light-grey w3-padding-large w3-section">
                        <i class="fa fa-download"></i> Download Resume
                    </button>

                </div>

                <div class="w3-padding-64 w3-content" id="photos">
                    <h2 class="w3-text-light-grey">My Photos</h2>
                    <hr style={{ width: "200px" }} class="w3-opacity" />

                    <div class="w3-row-padding" style={{ margin: "0 -16px" }}>
                        <div class="w3-half">
                            <div href="#about" class="project-item" onClick={() => setProjectState("PORTFOLIO WEBSITE")}>
                                <p>PORTFOLIO WEBSITE</p>
                                {projectState && projectState === "PORTFOLIO WEBSITE" &&
                                    <div>
                                        IT WORKED
                                    </div>
                                }
                            </div>
                            <div href="#" class="project-item" onClick={() => setProjectState("WEATHER APP")}>
                                <p>WEATHER APP</p>
                                {projectState && projectState === "WEATHER APP" &&
                                    <div>
                                        IT WORKED
                                    </div>
                                }
                            </div>
                        </div>

                        <div class="w3-half">
                            <div href="#" class="project-item" onClick={() => setProjectState("MEDITATIVE TRACKER")}>
                                <p>MEDITATIVE TRACKER</p>
                                {projectState && projectState === "MEDITATIVE TRACKER" &&
                                    <div>
                                        IT WORKED
                                    </div>
                                }
                            </div>
                            <div href="#" class="project-item" onClick={() => setProjectState("COURSE MANAGER")}>
                                <p>COURSE MANAGER</p>
                                {projectState && projectState === "COURSE MANAGER" &&
                                    <div>
                                        IT WORKED
                                    </div>
                                }
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
                    <i class="fa fa-facebook-official w3-hover-opacity"></i>
                    <i class="fa fa-instagram w3-hover-opacity"></i>
                    <i class="fa fa-snapchat w3-hover-opacity"></i>
                    <i class="fa fa-pinterest-p w3-hover-opacity"></i>
                    <i class="fa fa-twitter w3-hover-opacity"></i>
                    <i class="fa fa-linkedin w3-hover-opacity"></i>
                    <p class="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" class="w3-hover-text-green">w3.css</a></p>
                </footer>
            </div>
        </div>

    )
}

export default PersonalSiteContainer;