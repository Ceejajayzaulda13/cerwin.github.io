import React from 'react';
import{

FaCheckCircle,

}from 'react-icons/fa';

const Skill = () => {
    return (
<div id='skill' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
  <h1 className='text-4xl font-bold text-center text-[orange]'>
    Skills
  </h1>
  <p className='text-center py-8' style={{ textAlign:'justify'}}>
  With a diverse skill set covering both front-end and back-end development, I possess proficiency in a wide array of programming languages and frameworks. When it comes to front-end work, I excel in HTML, CSS3, and JavaScript, enabling me to craft visually impressive and responsive user interfaces. By leveraging popular frameworks like React and Bootstrap, I can create dynamic and user-friendly web applications that enhance engagement. In the realm of back-end development, my expertise extends to JavaScript, PHP, Java, C#, Kotlin, and NodeJS. This broad knowledge base allows me to design robust and scalable back-end systems, ensuring smooth data processing and efficient functionality. Equipped with a strong grasp of both front-end and back-end technologies, I am capable of delivering comprehensive and high-quality solutions that cater to the demands of modern web development.
    </p>
    <br></br>
  <div className="flex justify-center items-center ">
    <div className="w-80 h-95 p-4 bg-[#001b5e] rounded-lg shadow-md " >
      <h2 className="text-xl font-bold mb-2 text-center text-[white]">Front-end Development</h2>
      
      <ul className="max-w-[310px] w-full grid grid-cols-2 gap-4 "style={{maxHeight:'400px', overflowY:'auto'}}>
   <li className="flex items-center pt-7">
    <FaCheckCircle className="cursor-pointer" size={15} style={{ color: 'darkorange', marginRight: '20px' }} />
    <p className ="text-[white] font-bold" >HTML</p>
  </li>
  <li className="flex items-center pt-7">
    <FaCheckCircle className="cursor-pointer" size={15} style={{ color: 'darkorange', marginRight: '20px' }} />
    <p className ="text-[white] font-bold">CSS3</p>
  </li>
  <li className="flex items-center pt-7">
    <FaCheckCircle className="cursor-pointer" size={15} style={{ color: 'darkorange', marginRight: '20px' }} />
    <p className ="text-[white] font-bold">JavaScript</p>
  </li>
  <li className="flex items-center pt-7">
    <FaCheckCircle className="cursor-pointer" size={15} style={{ color: 'darkorange', marginRight: '20px' }} />
    <p className ="text-[white] font-bold">React</p>
  </li>
  <li className="flex items-center pt-7">
    <FaCheckCircle className="cursor-pointer" size={15} style={{ color: 'darkorange', marginRight: '20px' }} />
    <p className ="text-[white] font-bold">Bootstrap</p>
  </li>
  
</ul>

    </div>

    <div className="w-80 h-95 p-4 bg-[#001b5e] rounded-lg shadow-md ml-4 ">
      <h2 className="text-xl font-bold mb-2 text-center text-[white]">Back-end Development</h2>
      <ul className="max-w-[310px] w-full grid grid-cols-2 gap-4 "style={{maxHeight:'400px', overflowY:'auto'}}>
  <li className="flex items-center pt-7">
    <FaCheckCircle className="cursor-pointer" size={15} style={{ color: 'darkorange', marginRight: '20px' }} />
    <p className ="text-[white] font-bold">Javascript</p>
  </li>
  <li className="flex items-center pt-7">
    <FaCheckCircle className="cursor-pointer" size={15} style={{ color: 'darkorange', marginRight: '20px' }} />
    <p className ="text-[white] font-bold">PHP</p>
  </li>
  <li className="flex items-center pt-7">
    <FaCheckCircle className="cursor-pointer" size={15} style={{ color: 'darkorange', marginRight: '20px' }} />
    <p className ="text-[white] font-bold">Java</p>
  </li>
  <li className="flex items-center pt-7">
    <FaCheckCircle className="cursor-pointer" size={15} style={{ color: 'darkorange', marginRight: '20px' }} />
    <p className ="text-[white] font-bold">C#</p>
  </li>
  <li className="flex items-center pt-7">
    <FaCheckCircle className="cursor-pointer" size={15} style={{ color: 'darkorange', marginRight: '20px' }} />
    <p className ="text-[white] font-bold">Kotlin</p>
  </li>
  <li className="flex items-center pt-7">
    <FaCheckCircle className="cursor-pointer" size={15} style={{ color: 'darkorange', marginRight: '20px' }} />
    <p className ="text-[white] font-bold">NodeJS</p>
  </li>
</ul>
    </div>
  </div>
</div>

    );
};
export default Skill;