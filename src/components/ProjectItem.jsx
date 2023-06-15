import React from 'react';


const ProjectItem = ({ img, title }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-blue-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[orange]'>
      <img src={img} alt='/' className='rounded-xl group-hover:opacity-10' style={{ width: '100%', height: '300px' }} />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-0.9xl font-Roboto-bold text-black tracking-wider text-center'>
          {title}
        </h3>
         <br></br>
        <a href='/'>
          <p className='text-center p-2 rounded-ld bg-white text-gray-600 font-bold cursor-pointer text-10'>
            More Info
          </p>
        </a>
      </div>
      
    </div>
  );
};


export default ProjectItem;
