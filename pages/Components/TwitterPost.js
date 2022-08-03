import React from 'react'

function TwitterPost() {
    return (
      <div className='bg-black w-full h-40 flex flex-row'>
          <div className='py-6 px-6'>
            <img src='/zdjprof.jpeg' className='w-10 h-10 object-cover rounded-full .py-40'></img>
          </div>  
        <div className='flex flex-col py-6'>
            <div>
              <div className='text-white font-bold'>UserName.eth</div>
              <div className='text-gray-500 font-light text-sm'>@UserAnchor2137</div>
            </div>
            
            <div className='text-gray-100 py-4 max-w-7xl'>
              Yo i made a poop today it was nice its twitter so i had to post about it lmao
              </div>
            <div className='text-gray-100'>like unlike share</div>
          </div>

      </div>    
    )
}

export default TwitterPost;