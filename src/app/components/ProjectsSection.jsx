'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { animate, motion, useInView } from 'framer-motion';

const projectData = [
  {
    id: 1,
    title: 'React Portfolio Website',
    description: 'Project 1 description',
    image: '/images/projects/1.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'React Portfolio Website',
    description: 'Project 2 description',
    image: '/images/projects/2.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'React Portfolio Website',
    description: 'Project 3 description',
    image: '/images/projects/3.png',
    tag: ['All', 'Mobile'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'React Portfolio Website',
    description: 'Project 4 description',
    image: '/images/projects/2.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section ref={ref}>
      <h2 className='text-center text-4xl font-bold text-white'>My Projects</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag
          onClick={handleTagChange}
          name='All'
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Web'
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Mobile'
          isSelected={tag === 'Mobile'}
        />
      </div>
      <ul className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              description={project.description}
              imgUrl={project.image}
              title={project.title}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
