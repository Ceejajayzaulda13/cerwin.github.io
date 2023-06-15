import React from 'react';
import picture from '../assets/ee.jpg';
import hello from '../assets/mukha.jpg'
import { TypeAnimation } from 'react-type-animation';
import {
  FaReact,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaPhp,
  FaHtml5,
  FaCss3,
  FaPython,
  FaJava,
  FaBootstrap,
  

} from 'react-icons/fa';

const Main = () => {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover '
        src={picture}
        alt=''
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-darkwhite/o.5'>
        <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
        <h1 className= 'flex sm:text-3xl text-2xl pt-4 text-white' style={{color:'orange' ,
        fontFamily:'',
      }}>
            Good Day 
            </h1>
          <table>
          <th>
            <h1 className= 'flex sm:text-4xl text-2xl pt-4 text-white'>
            I'm Cerwin John T. Zaulda 
            </h1>
            </th>
            <th>
            <img src={hello} alt='' width={200} height={200} 
            style={{width: 200, height: 190, 
              border: '0.5px solid black',
              borderRadius: '61% 39% 70% 30%',
              position:'absolute' ,
              marginLeft:'100px',
            }}
            />
            </th>
          </table>
          <h2 className='flex sm:text-2xl text-2xl pt-4 text-white'>
            I'm a 
            <TypeAnimation
              sequence={[
                'Fullstack Developer', // Types 'One'
                2000, // Waits 1s
                'IT Technician', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'UI / UX Designer', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className='flex justify-between pt-7 max-w-[310px] w-full'style={{}}>
            <FaReact className='cursor-pointer' size={30} style={{color:'darkorange'
            }} />
            <FaPhp className='cursor-pointer' size={30} style={{color:'darkorange'
            }}/>
            <FaHtml5 className='cursor-pointer' size={30} style={{color:'darkorange'
            }}/>
            <FaBootstrap className='cursor-pointer' size={30} style={{color:'darkorange'
            }}/>
            <FaPython className='cursor-pointer' size={30} style={{color:'darkorange'
            }}/>
            <FaJava className='cursor-pointer' size={30} style={{color:'darkorange'
            }}/>
            <FaCss3 className='cursor-pointer' size={30} style={{color:'darkorange'
            }}/>
          </div>
          <br></br>
          
          <h5 className='text-white' style={{
           textAlign:'left',
           fontSize:'30px' ,
           font:'white',
           fontFamily:'',
           color:'lightblue' ,
          }}>
            About Me
            </h5>
            <br />
            <h4 className= 'flex  text-white' style={{fontFamily:'cursive', color:'white'
            }}>
              <b>
            It is a pleasure to introduce myself to you. My name is Cerwin John T. Zaulda, and I am currently pursuing a Bachelor of Science in Information Technology.
            I recently graduated from the esteemed City of Malabon University,
            where I had the privilege of completing my degree in Information Technology.
            Throughout my academic journey, I have developed a strong foundation in various aspects of
            My coursework has equipped me with essential knowledge in areas such as programming,
            database management, network administration, and software development.
            I have also gained hands-on experience through practical projects and internships,
            which have further deepened my understanding of real-world applications.
            </b>
            </h4>
        </div>
      </div>
    </div>
  );
};

export default Main;
