import React from 'react'

const GridMusicApp = () => {
  return (
    <div className='GridMusicApp'>
        <h1>Grid Music app</h1>
        <div className="grid md:grid-cols-5 md:grid-rows-5 gap-4">
            <div className="col-span-2 bg-orange-600 text-white flex justify-center items-center rounded-md">
                <div className="user flex justify-around items-center gap-3">
                    <img src="" alt="userImage" className="userImage bg-gray-800" />
                    <div className="userName">UserName</div>
                </div>
            </div>
            <div className="col-span-3 row-span-3 col-start-3 rounded-md">
                <img className='artistImage w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Mw40H5TkYW_50uSZnmRBTJwMy9c-ySrmNB1IgT2oEfmkVhTv" alt="artist image" />
            </div>
            <div className="col-span-2 row-span-4 row-start-2 bg-slate-500 rounded-md">songs</div>
            <div className="col-span-3 row-span-2 col-start-3 row-start-4 bg-black text-white rounded-md flex justify-center items-center">
                <h1 className='artistName text-4xl font-bold'>King Gnu</h1>
            </div>
        </div>
    </div>
  )
}

export default GridMusicApp;