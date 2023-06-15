import React from 'react';
import WorkItem from './WorkItem';

const data = [
  {
    year: 2021,
    title: 'Freelance Web Developer',
    duration: '2 years',
    details:
      'Developing Web System applications for clients',
      
  },
  {
    year: 2022,
    title: 'Freelance IT Technician',
    duration: '1 year',
    details:
      'Repairing Operating System of Andriod Devices',
  },
  {
    year: 2023,
    title: 'DevOps',
    duration: '486 Hours',
    details:
      'Developing QR Code Based Attendance Monitoring System.',
  },
  
];
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-10 py-20'>
      <h1 className='text-4xl font-bold text-center'
      style={{color:'orange'}} >Work</h1><br></br>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};


export default Work;
