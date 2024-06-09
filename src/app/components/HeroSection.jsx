'use client';
import Image from 'next/image';
import HeroImage from '../../../public/images/memoji-mac.png';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-8 place-self-center text-center sm:text-left justify-self-start'
        >
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600'>
              {' '}
              Hello I am{'  '}
            </span>
            <TypeAnimation
              sequence={[
                'Emin',
                3000,
                'Mobile Developer',
                3000,
                'Web Developer',
                3000,
                'UI/UX Designer',
                3000,
              ]}
              wrapper='span'
              speed={20}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
            ;
          </h1>
          <p className='text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            eos suscipit soluta!
          </p>
          <div>
            <a
              href='../../../public/cv/yenicvemin.pdf'
              download='../../../public/cv/yenicvemin.pdf'
              className='px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-primary-500  to-pink-600 text-white font-bold mb-4'
            >
              Hire Me
            </a>
            <button className='px-6 py-3 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 mr-4 w-full sm:w-fit bg-green-600 text-white hover:bg-slate-300'>
              Download CV
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-4 place-self-center mt-4 lg:mt-0'
        >
          <div className='rounded-full bg-[#181818] w-[250px] h-[300px] relative lg:w-[400px]'>
            <Image
              src={HeroImage}
              alt='hero-image'
              width={300}
              height={300}
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
