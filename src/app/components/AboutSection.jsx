'use client';
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React, { useState, useTransition } from 'react';
import aboutMe from '../../../public/images/about-me-picture.jpg';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>Node.js</li>
        <li>Express</li>
        <li>Graphql</li>
        <li>React</li>
        <li>Javascript</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc pl-2'>
        <li>Front-End Developer</li>
        <li>Usak University</li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className='list-disc pl-2'>
        <li>Udemy Sadık Turhan Front-End developer course</li>
        <li>Still continue learning in Youtube</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
        <Image src={aboutMe} alt='about-image' height={500} width={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-5'>About Me</h2>
          <p className='text-base md:text-lg'>
            I'm Muhammet Emin METİN. Although I started my university journey in
            a non-traditional way, I've been honing my skills in this field for
            about two years now. During this time, I've focused on mastering
            modern web technologies such as React, Next.js, CSS, HTML, and
            TypeScript. I've gained hands-on experience in real-world projects
            and am now ready to utilize these skills to contribute to a
            company's successful projects. Frameworks like React and Next.js
            empower me to develop user-friendly and impressive web applications.
            Additionally, I can effectively design user interfaces using CSS and
            HTML, while TypeScript ensures a safer codebase.
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              Education
            </TabButton>{' '}
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              Experience
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
