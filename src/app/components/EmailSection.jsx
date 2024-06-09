'use client';
import React, { useState } from 'react';
import GithubIcon from '../../../public/github-icons.svg';
import LinkedInIcon from '../../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = 'api/send';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();
    if (response.status === 200) {
      console.log('Message sent successfully!');
      setEmailSubmitted(true);
    } else console.log('Message not sent successfully!');
  };

  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-950 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2'></div>
      <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>Lets Connect</h5>
        <p className='text-[#adb7be] mb-4 max-w-md'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure
          accusamus eius adipisci velit quos architecto! Expedita aperiam vitae
          eum?
        </p>
        <div className='flex flex-row socials gap-2'>
          <Link href='https://github.com'>
            <Image src={GithubIcon} alt='githubicon' />
          </Link>
          <Link href='https://linkedin.com'>
            <Image src={LinkedInIcon} alt='linkedinicon' />
          </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label
              htmlFor='email'
              className='text-white block mb-2  text-sm font-medium'
            >
              Your Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              className='bg-[#18191E] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='abc@hotmail.com'
            />
            <label
              htmlFor='subject'
              className='text-white block mb-2 text-sm font-medium'
            >
              Subject
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              required
              className='bg-[#18191E] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='Just saying hi'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='message'
              className='text-white block text-sm mb-2 font-medium'
            >
              Message
            </label>
            <textarea
              name='message'
              id='message'
              className='bg-[#18191E] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder="Let's talk about.."
            ></textarea>
          </div>
          <button
            type='submit'
            className='bg-orange-500 hover:bg-blue-950 text-white font-medium py-2.5 px-5 rounded-lg w-full'
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className='text-green-500 text-sm mt-2'>
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
