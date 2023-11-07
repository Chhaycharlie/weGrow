import React from 'react'

function Posts() {
  return (
    <>
    <div>
        <h1 className='flex justify-center items-center text-5xl mt-24 font-semibold'>The Platform for Voluntary Work</h1>
        <p className='flex justify-center items-center text-xl text-grey-600 my-5'>is the heart of the change-maker community and the best resource to discover and connect with change-makers worldwide.</p>
        <div className='flex justify-center items-center my-20'><div className='font-semibold text-lg flex justify-center items-center max-w-xs bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full'>Post Recruitment Now +</div></div>
    </div>
    <form class="flex items-center w-4/6 ml-4">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  " placeholder="Search branch name..." required/>
    </div>
    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search</span>
    </button>
</form>
    <h1 className='font-bold text-3xl text-gray-900 p-6'>Recents Post</h1>
    <div className='container flex justify-between w-4/6 mx-4  border-solid border-2 border-grey-600 rounded-lg shadow-2xl'>
      <div className=''>
        <div className='flex justify-center items-center '>
          <img class="w-24 h-24 my-10 mx-12 rounded-full" src="src/assets/icons/people.png" alt="Rounded avatar"/>
        <div className='flex-col justify-start my-12'>
          <span className='text-base text-grey-300'>Org. Name</span>
          <h2 className='font-bold text-2xl'>Title</h2>
          <p className='mt-2 font-normal text-lg'>helloworld</p>
          </div>
        </div>
      </div>
      <div className='flex space-x-2 items-center my-12 mr-10 '>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-10'>View Details </button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-10'>Apply Now</button>
      </div>
    </div>
    <div className='container flex justify-between w-4/6 mx-4 my-4 border-solid border-2 border-grey-600 rounded-lg shadow-2xl'>
      <div className=''>
        <div className='flex justify-center items-center '>
          <img class="w-24 h-24 my-10 mx-12 rounded-full" src="src/assets/icons/people.png" alt="Rounded avatar"/>
        <div className='flex-col justify-start my-12'>
          <span className='text-base text-grey-300'>Org. Name</span>
          <h2 className='font-bold text-2xl'>Title</h2>
          <p className='mt-2 font-normal text-lg'>helloworld</p>
          </div>
        </div>
      </div>
      <div className='flex space-x-2 items-center my-12 mr-10 '>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-10'>View Details </button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-10'>Apply Now</button>
      </div>
    </div>
    <div className='container flex justify-between w-4/6 mx-4 my-4 border-solid border-2 border-grey-600 rounded-lg shadow-2xl'>
      <div className=''>
        <div className='flex justify-center items-center '>
          <img class="w-24 h-24 my-10 mx-12 rounded-full" src="src/assets/icons/people.png" alt="Rounded avatar"/>
        <div className='flex-col justify-start my-12'>
          <span className='text-base text-grey-300'>Org. Name</span>
          <h2 className='font-bold text-2xl'>Title</h2>
          <p className='mt-2 font-normal text-lg'>helloworld</p>
          </div>
        </div>
      </div>
      <div className='flex space-x-2 items-center my-12 mr-10 '>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-10'>View Details </button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-10'>Apply Now</button>
      </div>
    </div>
    <div className='container flex justify-between w-4/6 mx-4 my-4  border-solid border-2 border-grey-600 rounded-lg shadow-2xl'>
      <div className=''>
        <div className='flex justify-center items-center '>
          <img class="w-24 h-24 my-10 mx-12 rounded-full" src="src/assets/icons/people.png" alt="Rounded avatar"/>
        <div className='flex-col justify-start my-12'>
          <span className='text-base text-grey-300'>Org. Name</span>
          <h2 className='font-bold text-2xl'>Title</h2>
          <p className='mt-2 font-normal text-lg'>helloworld</p>
          </div>
        </div>
      </div>
      <div className='flex space-x-2 items-center my-12 mr-10 '>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-10'>View Details </button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-10'>Apply Now</button>
      </div>
    </div>

    </>
  )
}

export default Posts