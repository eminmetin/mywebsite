'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const AnimatedNumbers = dynamic(
  () => {
    return import('react-animated-numbers');
  },
  { ssr: false }
);

const achievementList = [
  { metric: 'Projects', value: '100+', postfix: '+' },
  { metric: 'Users', value: '100,000', prefix: '~' },
  { metric: 'Awards', value: '10' },
  { metric: 'Years', value: '5' },
];

const AchievementSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <div className='border-[#33353f] border rounded-md py-8 px-18 flex flex-row items-center justify-between'>
        {achievementList.map((achievement, index) => {
          return (
            <div
              key={index}
              className='flex flex-col items-center justify-center mx-4 '
            >
              <h2 className='text-white text-4xl flex flex-row font-bold'>
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale='en-US'
                  className='text-white text-4xl font-bold'
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tension: 140 * (index + 1),
                    };
                  }}
                ></AnimatedNumbers>
                {achievement.postfix}
              </h2>
              <p className='text-[#adb7be] text-base'>{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementSection;
