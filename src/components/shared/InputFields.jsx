import React from 'react'

const InputFields = ({placeholder,label,value,className}) => {
  return (
    <>
        <h1 className= {`-mb-1 ${className} text-2xl`}>{label}</h1>
        <input
            placeholder={placeholder}
            className="focus:border-gray-800 focus:border-2 outline-none pl-5 h-16 text-xl border border-gray-300 rounded-xl"
            value={value}
        />
    </>
  )
}

export default InputFields