import React from 'react';

const data = [
    {
      orgName: 'Org. Name 1',
      title: 'Title 1',
      description: 'Description 1',
    },
    {
      orgName: 'Org. Name 2',
      title: 'Title 2',
      description: 'Description 2',
    },
    {
      orgName: 'Org. Name 3',
      title: 'Title 3',
      description: 'Description 3',
    },
    {
      orgName: 'Org. Name 4',
      title: 'Title 4',
      description: 'Description 4',
    },
    {
      orgName: 'Org. Name 5',
      title: 'Title 5',
      description: 'Description 5',
    },
    {
      orgName: 'Org. Name 6',
      title: 'Title 6',
      description: 'Description 6',
    },
  ];
  
function Post() {
  return (
    <>
    <h1 className='font-bold text-3xl text-gray-900 p-6'>Recents Post</h1>
      <div>
        {data.map((item, index) => (
          <div key={index} className='container flex flex-row justify-between mb-3 border-2 border-grey-600 rounded-lg shadow-md'>
              <div className='flex justify-center items-center pt-5 md:items-start'>
                <img class="w-24 h-24 my-10 mx-12 rounded-full" src="src/assets/icons/people.png" alt="Rounded avatar"/>
                <div className='flex-col justify-start my-12'>
                  <span className='text-base text-grey-300'>Org. Name</span>
                  <h2 className='font-bold text-2xl'>Title</h2>
                  <p className='mt-2 font-normal text-lg'>Description</p>
                </div>
              </div>
              <div className='flex flex-col md:flex-row space-x-2 items-center my-12 mr-10'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-10'>View Details</button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-10'>Apply Now</button>
              </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Post