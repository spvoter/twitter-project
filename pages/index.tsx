import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import TwitterPost from './Components/TwitterPost'

const Home: NextPage = () => {
  return (

    <div className="w-full flex flex-row">


      
      <div className='bg-black w-3/12 h-screen'>

        <div className='mx-24'>

          <div className='flex flex-row py-3 bg-black rounded-full cursor-pointer hover:bg-zinc-900 ease in duration-200'>
            <a className='px-3 py-3'><img src='twitter.svg'></img></a>
          </div>

          <div className='flex flex-row py-3 bg-black rounded-full cursor-pointer hover:bg-zinc-900 ease in duration-200'>
            <a className='mr-10 px-3 rounded-full '><img src='home.svg'></img></a>
            <h1 className='text-white'>Home</h1>
          </div>

          <div className='flex flex-row py-3 bg-black rounded-full cursor-pointer hover:bg-zinc-900 ease in duration-200'>
            <a className='mr-10 px-3 rounded-full'><img src='hash.svg'></img></a>
            <h1 className='text-white'>Explore</h1>
          </div>

          <div className='flex flex-row py-3 bg-black rounded-full cursor-pointer hover:bg-zinc-900 ease in duration-200'>
            <a className='mr-10 px-3 rounded-full'><img src='bell.svg'></img></a>
            <h1 className='text-white'>Notifications</h1>
          </div>

          <div className='flex flex-row py-3 bg-black rounded-full cursor-pointer hover:bg-zinc-900 ease in duration-200'>
            <a className='mr-10 px-3 rounded-full'><img src='mail (1).svg'></img></a>
            <h1 className='text-white'>Mail</h1>
          </div>

          <div className='flex flex-row py-3 bg-black rounded-full cursor-pointer hover:bg-zinc-900 ease in duration-200'>
            <a className='mr-10 px-3 rounded-full'><img src='user (1).svg'></img></a>
            <h1 className='text-white'>Profile</h1>
          </div>

          <div className='flex flex-row py-3 bg-black rounded-full cursor-pointer hover:bg-zinc-900 ease in duration-200'>
            <a className='mr-10 px-3 rounded-full'><img src='more-horizontal.svg'></img></a>
            <h1 className='text-white'>Options</h1>
          </div>

          <div className='flex flex-row py-3 bg-black rounded-full cursor-pointer hover:bg-zinc-900 ease in duration-200'>
            <a className='mr-10 px-3 rounded-full'><img src='pen-tool.svg'></img></a>
            <h1 className='text-white'>Write</h1>
          </div>

          <div className='flex flex-row py-3 bg-black rounded-full cursor-pointer hover:bg-zinc-900 ease in duration-200'>
            <a className='mr-10 px-3 rounded-full'><img src='list.svg'></img></a>
            <h1 className='text-white'>More</h1>
          </div>
          


          <div className='bg-blue-300 h-12 rounded-3xl flex flex-row justify-center py-3 min-w-min'>
            <h1 className='text-white'>Tweet</h1>
          </div>

          <div className='bg-black w-56 h-16 rounded-full flex flex-row justify-evenly py-2 my-20'>
            <div>
              <img src='/zdjprof.jpeg' className='w-10 h-10 object-cover rounded-full .py-40'></img>
            </div>
            <div className='flex flex-col align-middle my-auto'>
              <div className='text-white font-bold'>Profile Name</div>
              <div className='text-white'>@Twitterhandle</div>
            </div>
            <div className='my-auto'>
              <a className=''><img src='more-horizontal.svg'></img></a>
            </div>
          </div>
        </div>

      </div>




      <div className='bg-black w-5/12 h-screen'>


        <div className='bg-black w-full h-16 flex flex-row justify-between py-2 px-4'>
          <h1 className='text-white text-lg font-semibold py-3'>Notifications</h1>
          <a className='py-3'><img src='more-horizontal.svg'></img></a>
        </div>

        <div className='w-full h-12 flex flex-row'>
          <div className='bg-black w-1/2 h-full flex flex-row justify-center py-2 px-4 border-b-2 hover:border-y-2 border-slate-500'>
            <h1 className='text-white text-base font-medium py-1'>Recent</h1>
          </div>
          <div className='bg-black w-1/2 h-full flex flex-row justify-center py-2 px-4 border-b-2 hover:border-y-2 border-slate-500'>
            <h1 className='text-white text-base font-medium py-1'>All</h1>
          </div>
        </div>

        <div className='bg-black w-full h-12 flex flex-row justify-center py-3 border-b-2 border-slate-500'>
          <a><div></div></a>
          <div className='text-blue-400 text-base font-medium'>Show 2346 tweets</div>
        </div>

        



          <div className='flex flex-col py-4'>
            <TwitterPost></TwitterPost>
            <TwitterPost></TwitterPost>
            <TwitterPost></TwitterPost>
            <TwitterPost></TwitterPost>
          </div>

        
        

      </div>




      <div className='bg-black w-4/12 h-screen'>

        <div className=' bg-opacity-10 bg-white w-8/12 h-10 flex flex-row rounded-2xl mx-10 my-8'>
          <a className='py-2 px-2'><img src='search.svg' ></img></a>
          <h1 className='py-2.5 px-4 text-gray-500 text-sm'>Search...</h1>
        </div>

        <div className=' bg-opacity-10 bg-white w-8/12 h-96 rounded-2xl mx-10 my-8'>
          <div className='py-4 px-4 text-white'>Trending</div>

          <div className='flex flex-row justify-between py-2 px-4'>
            <div className='flex flex-col'>
              <div className='text-gray-500 text-sm'>Trending in...</div>
              <div className='text-white text-base'>Topic trending</div>
            </div>
            <div>
              <a><img src='more-horizontal.svg'></img></a>
            </div>
          </div>

          <div className='flex flex-row justify-between py-2 px-4'>
            <div className='flex flex-col'>
              <div className='text-gray-500 text-sm'>Trending in...</div>
              <div className='text-white text-base'>Topic trending</div>
            </div>
            <div>
              <a><img src='more-horizontal.svg'></img></a>
            </div>
          </div>

          <div className='flex flex-row justify-between py-2 px-4'>
            <div className='flex flex-col'>
              <div className='text-gray-500 text-sm'>Trending in...</div>
              <div className='text-white text-base'>Topic trending</div>
            </div>
            <div>
              <a><img src='more-horizontal.svg'></img></a>
            </div>
          </div>

          <div className='flex flex-row justify-between py-2 px-4'>
            <div className='flex flex-col'>
              <div className='text-gray-500 text-sm'>Trending in...</div>
              <div className='text-white text-base'>Topic trending</div>
            </div>
            <div>
              <a><img src='more-horizontal.svg'></img></a>
            </div>
          </div>

          <div className='flex flex-row justify-between py-2 px-4'>
            <div className='flex flex-col'>
              <div className='text-gray-500 text-sm'>Trending in...</div>
              <div className='text-white text-base'>Topic trending</div>
            </div>
            <div>
              <a><img src='more-horizontal.svg'></img></a>
            </div>
          </div>


        </div>

        <div className=' bg-opacity-10 bg-white w-8/12 h-56 rounded-2xl mx-10 my-auto'>
          <div className='py-4 px-4 text-white font-extrabold text-lg'>Who to follow</div>

          <div className='flex flex-row py-2 px-3'>
            <div>
              <img src='/zdjprof.jpeg' className='w-10 h-10 object-cover rounded-full .py-40'></img>
            </div>
            <div className='flex flex-col pl-4 pr-16'>
              <div className='text-white font-bold'>UserName.eth</div>
              <div className='text-gray-500 font-light text-sm'>@UserAnchor2137</div>
            </div>
            <div className='h-8 w-16 py-1 px-2.5 bg-white rounded-full'>Follow</div>
          </div>

          <div className='flex flex-row py-2 px-3'>
            <div>
              <img src='/zdjprof.jpeg' className='w-10 h-10 object-cover rounded-full .py-40'></img>
            </div>
            <div className='flex flex-col pl-4 pr-16'>
              <div className='text-white font-bold'>UserName.eth</div>
              <div className='text-gray-500 font-light text-sm'>@UserAnchor2137</div>
            </div>
            <div className='h-8 w-16 py-1 px-2.5 bg-white rounded-full '>Follow</div>
          </div>   
        </div>

      </div>


    </div>
  )
}

export default Home
