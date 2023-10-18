import React from 'react'

import AvatarIcon from '../../assets/profiles/avatar_icon.svg'

const AvatarOption = ({title}) => {
    const user = {
        id : 1,
        name: "Son chhay",
    };

  return (
    <div className='w-full h-auto flex flex-wrap mt-10 text-center lg:text-left lg:justify-normal justify-center lg:space-x-10 lg:items-center lg:m-10'>
        <img src={AvatarIcon} width={70} alt="profile avatar" />
        <div>
            <h1 className='font-thin text-3xl'>{user.name} / {title} </h1>
            <p className='pt-2 text-base opacity-30 tracking-[.10em]'>Set up your weGrow present and hiring needs</p>
        </div>
    </div>
  )
}

export default AvatarOption