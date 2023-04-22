import { projects } from "../data/projects";
import Slide from "./AndrewKit/slide/slide.component";
import { ProjectCard } from "./ProjectCard";
import React from "react";

export default function Projects() {
    let projectCards: React.ReactNode[] = [];

    projects.map((project) => projectCards.push(<ProjectCard icon={project.icon} title={project.title} description={project.description} />))

    return (
        <><h2>Meus Projetos</h2>
            <Slide data={projectCards} hideBoxShadow customCSS={{ width: "65%", marginLeft: "auto", marginRight: "auto" }} /></>
    )
}