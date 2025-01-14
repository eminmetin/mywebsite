import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? 'text-white border-purple-500'
    : 'text-[#adb7be] border-orange-500';
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-6 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
