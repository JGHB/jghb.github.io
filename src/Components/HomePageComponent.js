import React from "react"
import { Link, link } from "react-router-dom"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import FadeIn from 'react-fade-in';
import HomePageBodyComponent from "./HomePageBodyComponent";

function HomePageComponent() {

    const width = window.innerWidth

    return (
        <div>
            <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
                <FadeIn delay="300" transitionDuration="200">
                    <img src="logo.svg" style={{ width: "100%" }} class="corner-image" />
                </FadeIn>

                <FadeIn delay="300" transitionDuration="400">
                    <ScrollLink
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={1000}
                    >
                        <a class="w3-bar-item w3-button w3-padding-large w3-black sidebar-item">
                            <p>HOME</p>
                        </a>
                    </ScrollLink>

                    <ScrollLink
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={1000}
                    >
                        <a class="w3-bar-item w3-button w3-padding-large w3-black sidebar-item">
                            <p>ABOUT</p>
                        </a>
                    </ScrollLink>

                    <a href="#" class="w3-bar-item w3-button w3-padding-large w3-black sidebar-item">
                        <p>RESUME</p>
                    </a>
                    <ScrollLink
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={1000}
                    >
                        <a class="w3-bar-item w3-button w3-padding-large w3-black sidebar-item">
                            <p>PROJECTS</p>
                        </a>
                    </ScrollLink>

                    
                    <a href="https://www.github.com/JGHB" class="w3-bar-item w3-button w3-padding-large w3-black sidebar-item">
                        <p>GITHUB</p>
                    </a> 

                    {/* <ScrollLink
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={1000}
                    >
                        <a class="w3-bar-item w3-button w3-padding-large w3-black sidebar-item">
                            <p>GITHUB</p>
                        </a>
                    </ScrollLink> */}


                    <ScrollLink
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={1000}
                    >
                        <a class="w3-bar-item w3-button w3-padding-large w3-black sidebar-item">
                            <p>CONTACT</p>
                        </a>
                    </ScrollLink>
                </FadeIn>
                <div></div>
            </nav>
            <div class="w3-top w3-center" id="myNavbar">
                <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
                    <a href="#home" class="w3-bar-item w3-button" style={{ width: "25% !important" }}>HOME</a>
                    <ScrollLink
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={false}
                        duration={1500}
                    >
                        <a class="w3-bar-item w3-button" style={{ width: "25% !important" }}>
                            ABOUT
                        </a>
                    </ScrollLink>
                    <a href="" class="w3-bar-item w3-button" style={{ width: "25% !important" }}>RESUME</a>
                    <ScrollLink
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={false}
                        duration={1500}
                    >
                        <a class="w3-bar-item w3-button" style={{ width: "25% !important" }}>
                            PROJECTS
                        </a>
                    </ScrollLink>
                    <a href="" class="w3-bar-item w3-button" style={{ width: "25% !important" }}>GITHUB</a>
                    <ScrollLink
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={false}
                        duration={1500}
                    >
                        <a class="w3-bar-item w3-button" style={{ width: "25% !important" }}>
                            CONTACT
                        </a>
                    </ScrollLink>
                </div>
            </div>
            {width < 670 &&
                <HomePageBodyComponent />
            }
            {width >= 670 &&
                <FadeIn delay="400" transitionDuration="1000">
                    <HomePageBodyComponent />
                </FadeIn>
            }
        </div>
    )
}

export default HomePageComponent