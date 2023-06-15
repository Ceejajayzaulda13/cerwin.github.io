import React from 'react';
import { 
  FaReact,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaDiscord,
} from 'react-icons/fa';




const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[orange]'>
        Contact Me
      </h1>
      <br></br>
      <div class="flex justify-center">
     </div>
     <div class="container my-24 mx-auto md:px-6">

     <div class="bg-black-50 py-2">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-xl font-medium mb-4">Get in Touch</h3>
        <p class="text-gray-600 mb-4">Have a question or want to work together? Send me a message!</p>
        <form>
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="name">Your Name</label>
            <input class="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" placeholder="Cerwin John" required></input>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="email">Your Email</label>
            <input class="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" placeholder="Ceejayzaulda@example.com" required></input>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="message">Message</label>
            <textarea class="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" rows="4" placeholder="Write your message here..." required></textarea>
          </div>
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md" type="submit">Send Message</button>
        </form>
      </div>
      <div class="rounded-md bg-orange p-4">
        <h3 class="text-xl font-medium mb-4 text-[#001b5e]">Contact Information</h3>
        <p class="text-gray-600 mb-4">Feel free to reach out to me using the following details:</p>
        <ul class="space-y-2">
        <li className="flex items-center pt-1">
    <FaFacebook className="cursor-pointer" size={30} style={{ color: 'darkorange', marginRight: '20px' }} />
    <p className ="text-[#001b5e] font-bold" >Ceejayzaulda13@gmail.com</p>
  </li>
  <li className="flex items-center pt-1">
    <FaGithub className="cursor-pointer" size={30} style={{ color: 'darkorange', marginRight: '20px' }} />
    <p className ="text-[#001b5e] font-bold" >+639605587944</p>
  </li>
  <li className="flex items-center pt-1">
    <FaLinkedin className="cursor-pointer" size={30} style={{ color: 'darkorange', marginRight: '20px' }} />
    <p className ="text-[#001b5e] font-bold" >Longos, Malabon City</p>
  </li>
  <li className="flex items-center pt-1">
    <FaDiscord className="cursor-pointer" size={30} style={{ color: 'darkorange', marginRight: '20px' }} />
    <p className ="text-[#001b5e] font-bold" >Longos, Malabon City</p>
  </li>
        </ul>
      </div>
    </div>
  </div>
</div>

</div>
     </div>
    
    
  );
};

export default Contact;
