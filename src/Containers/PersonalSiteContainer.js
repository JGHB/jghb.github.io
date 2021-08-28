import React, { useState } from "react";
import ProjectCardComponent from "../Components/ProjectCardComponent";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import HomePageComponent from "../Components/HomePageComponent";
import PortfolioProjectComponent from "../Components/PortfolioProjectComponent";
import ScrollToTop from "../Components/ScrollToTop";

function PersonalSiteContainer() {

    const [projectState, setProjectState] = useState(null);

    return (
        <div class="w3-black">
            <Router>
                <ScrollToTop/>
                <Switch>
                <Route path="/" exact={true} render={() =>
                    <HomePageComponent />
                } />
                <Route path="/portfolio-project" exact={true} render={() =>
                    <PortfolioProjectComponent />
                } />
                </Switch>
            </Router>

        </div>

    )
}

export default PersonalSiteContainer;