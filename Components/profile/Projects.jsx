
import React from 'react'
import ProjectCard from './ProjectCard';
const Projects = () => {
    return (
        <div className='grid mt-6 w-full grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6'>
            <ProjectCard title={"Project#1"} name={"Modren"} picture={'/project1.jpg'} />
            <ProjectCard title={"Project#2"} name={"Scandinavian"} picture={'/project2.jpg'} />
            <ProjectCard title={"Project#3"} name={"Minimalist"} picture={'/project3.jpg'} />
            <ProjectCard title={"Project#4"} name={"Gothic"} picture={'/project4.jpg'} />
        </div>
    )
}

export default Projects;