import React from "react";

function ProjectCardComponent(props) {
    return (
        <a class="project-card" href="#">
                {props.title}
        </a>
        

    )
}

export default ProjectCardComponent