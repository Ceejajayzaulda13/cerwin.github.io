import React from 'react';
import ProjectItem from './ProjectItem';
import covid1 from '../assets/covid.jpg';
import attendance1 from '../assets/attendance.jpg';
import decision1 from '../assets/decision.jpg';



const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[orange]'>
        Projects
      </h1>
      <p className='text-center py-8' style={{ textAlign:'justify'}}>
      I have developed multiple projects that highlight my coding skills, expertise, and passion as a developer. Each project reflects a distinct voyage of creativity and problem-solving. Whether it involves devising efficient algorithms or designing user-friendly interfaces, my dedication to delivering top-notch software is evident in every line of code. I have successfully executed projects across various domains, including web and mobile applications, data analysis, and machine learning models. These projects serve as evidence of my critical thinking, effective collaboration, and adaptability to emerging technologies. With meticulous attention to detail and a profound understanding of software development best practices, my goal is to consistently create projects that surpass expectations and generate meaningful outcomes.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={covid1} title='Andriod based Covid-19 Tracker.' />
        <ProjectItem img={attendance1} title='Andriod based QR code Attendance Monitoring System.' />
        <ProjectItem img={decision1} title='Web based Academic Tracker with Decision Support.' />
      </div>
    </div>
  );
};

export default Projects;
