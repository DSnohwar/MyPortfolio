"use client"
import React, { useState, useRef, } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: "FER-Music Recommendation System",
        description: "Facial Emotion Recognition based Music Recommendation System, Self build Model with CNN",
        image: "/images/projects/FER-Music.png",
        tag: ["All", "DS", "Web"],
        gitUrl: "https://github.com/DSnohwar/MyPortfolio",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "NextJs Portfolio Website",
        description: "A Modern Digital Portfolio Website built with NextJs and TailwindCSS",
        image: "/images/projects/portfolio.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "E-commerce Application",
        description: "Fully functional E-commerce Application with Authentication and CRUD operations",
        image: "/images/projects/ecom.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/DSnohwar/Orderly",
        previewUrl: "https://github.com/DSnohwar/Orderly",
    },
    {
        id: 4,
        title: "ChatBot AI Assistant Application",
        description: "Ai Assistant Chatbot Application with spam security and awareness",
        image: "/images/projects/chatbot.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/DSnohwar/Animebuddy",
        previewUrl: "https://animebuddy.vercel.app/",
    },
    {
        id: 5,
        title: "Realtime Emotion Recognition Application",
        description: "Realtime Emotion Recognition Application with OpenCV and Deep Learning Model",
        image: "/images/projects/realTimeFER.png",
        tag: ["All", "DS"],
        gitUrl: "https://github.com/DSnohwar/MoodSyncTunes/blob/main/FER.py",
        previewUrl: "https://github.com/DSnohwar/MoodSyncTunes/blob/main/FER.py",
    },
    {
        id: 6,
        title: "CIA Country Analysis",
        description: "CIA Country Analysis with Python and Pandas using Clustering and Classification techniques of ML",
        image: "/images/projects/cia.png",
        tag: ["All", "DS"],
        gitUrl: "https://github.com/DSnohwar/DS-ML-Projects/tree/main/CIA%20Country%20Analysis%20and%20Clustering",
        previewUrl: "https://github.com/DSnohwar/DS-ML-Projects/blob/main/CIA%20Country%20Analysis%20and%20Clustering/Country%20Analysis.ipynb",
    },
];

const ProjectSection = () => {
    const [selectedTag, setSelectedTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTabChange = (tag) => {
        setSelectedTag(tag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(selectedTag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    }

    return (
        <section 
            id='projects'
            ref={ref}>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
                <ProjectTag onClick={handleTabChange} name="All" isSelected={selectedTag === "All"} />
                <ProjectTag onClick={handleTabChange} name="Web" isSelected={selectedTag === "Web"} />
                <ProjectTag onClick={handleTabChange} name="DS" isSelected={selectedTag === "DS"} />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            imgUrl={project.image}
                            description={project.description}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl} />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectSection;
