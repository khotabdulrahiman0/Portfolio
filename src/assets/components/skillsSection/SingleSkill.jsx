import React from 'react'

const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className='relative hover:translate-y-2 transition-all duration-500 group'>
      <div className="flex flex-col items-center gap-3 relative z-10">
        <div
          className="bg-gradient-to-r from-blue-400 to-purple-600 text-white h-[110px] w-[110px] flex items-center justify-center rounded-3xl
            hover:shadow-[0px_0px_20px_5px_rgba(128,90,213,0.7)] transform transition-all duration-500 text-5xl"
        >
          {imgSvg}
        </div>
        <p className='text-white font-medium text-lg mt-2 group-hover:scale-110 transform transition-all duration-500'>{text}</p>
      </div>
      <div
        className="w-[150px] h-[150px] bg-gradient-to-r from-pink-400 to-orange-400 absolute top-[50px] -z-10 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"
      ></div>
    </div>
  )
}

export default SingleSkill