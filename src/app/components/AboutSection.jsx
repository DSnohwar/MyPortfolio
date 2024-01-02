"use client"
import React,{useTransition,useState}from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java/Python</li>
        <li>JavaScript/React</li>
        <li>NextJs</li>
        <li>TailwindCss</li>
        <li>MongoDB/SQL</li>
        <li>Numpy/Pandas/Seaborn</li>
        <li>Scikit-learn/Tensorflow</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Netaji Subhas University of Technology, Delhi</li>
        <li>Kendriya Vidyalaya, Karkardooma, Delhi</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Deep Learning-IIT Madras, NPTEL(Course Topper-Top1%)</li>
        <li>Data Science and Machine Learning, Udemy</li>
        <li>Data Structures and Algorithms in Java, Coding Ninja</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [isPending,startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }


  return (
    <section
      id='about'
    className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
        <Image src="/images/about-image.png" width={500} height={500} alt="About Image" />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
           I am a web developer/Data Scientist with Proficiency in a range of technologies, including JavaScript, Python, React, MongoDB, and more. My technical toolkit includes Flask, TensorFlow/Keras, NextJS, and TailWindCSS. With a solid foundation in HTML, CSS, and JavaScript, coupled with my keen analytical skills in Data Science and Machine Learning, I bring a dynamic and versatile skill set to the table. As a proactive learner, I am enthusiastic about collaborating with teams to craft exceptional applications, contributing to the ever-evolving landscape of technology.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection