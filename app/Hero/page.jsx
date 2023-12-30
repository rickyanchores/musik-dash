import React from 'react'

const Hero = () => {
  return (
    <div className='Hero'>
        <div className="Musik-container p-5 text-center">
            <h1 className='title text-2xl font-bold'>Musik-Dash</h1>
            <div className="fetch-container mt-2">
                <input className='input bg-gray-800 text-white p-4 rounded-md' type="text"placeholder='Username' />
                <button className='btn bg-orange-600 text-white m-2 p-4 rounded-md'>Fetch</button>
            </div>
        </div>
    </div>
  )
}

export default Hero;