import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from "react-router-dom";

const ProjectList = ( { projects }) => {
    return (
        <div className="project-list section">
            {projects && projects.map(project => {
                return(
                    <Link to={ '/project/' + project.id}  key={project.id}>
                    <ProjectSummary project={project}></ProjectSummary>
                    </Link>
                )
            })}
            
            
        </div>
    )
}

export default ProjectList

// function Numlist(prop){
//     const number = prop.number;
//     const list = number.map((num) =>
//     <li>{num}</li>);
//     return(
        
//     )
// }

// const number = [1,3,4,5];