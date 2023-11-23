import React from 'react';
const posts = [
    {
      id: 1,
      title: 'Title of Recruiment',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: 'Posted date',
      datetime: '2023-06-14',
      category: { title: 'Website', href: '#' },
      author: {
        name: 'Organization Name',
        role: 'Name of User',
        imageUrl:'src/assets/icons/people.png',
      },
    },
    {
        id: 2,
        title: 'Title of Recruiment',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: 'Posted date',
        datetime: '2023-06-14',
        category: { title: 'Website', href: '#' },
        author: {
          name: 'Organization Name',
          role: 'Name of User',
          imageUrl:'src/assets/icons/people.png',
        },
      },
      {
        id: 3,
        title: 'Title of Recruiment',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: 'Posted date',
        datetime: '2023-06-14',
        category: { title: 'Website', href: '#' },
        author: {
          name: 'Organization Name',
          role: 'Name of User',
          imageUrl:'src/assets/icons/people.png',
        },
      },
      {
        id: 4,
        title: 'Title of Recruiment',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: 'Posted date',
        datetime: '2023-06-14',
        category: { title: 'Website', href: '#' },
        author: {
          name: 'Organization Name',
          role: 'Name of User',
          imageUrl:'src/assets/icons/people.png',
        },
      },
      {
        id: 5,
        title: 'Title of Recruiment',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: 'Posted date',
        datetime: '2023-06-14',
        category: { title: 'Website', href: '#' },
        author: {
          name: 'Organization Name',
          role: 'Name of User',
          imageUrl:'src/assets/icons/people.png',
        },
      },
      {
        id: 6,
        title: 'Title of Recruiment',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: 'Posted date',
        datetime: '2023-06-14',
        category: { title: 'Website', href: '#' },
        author: {
          name: 'Organization Name',
          role: 'Name of User',
          imageUrl:'src/assets/icons/people.png',
        },
      },
  ]
  function Post2(){
    return (
      <>
      <section className='w-full lg:h-[90vh] mt-[-4px] h-auto object-cover'>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full flex justify-center items-center bg-no-repeat">
            <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-full lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                <h1 className="text-4xl font-bold text-black sm:text-6xl text-center ">The Platform for Voluntary Work</h1>
                <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-800  font-bold text-center text-sm sm:text-lg">is the heart of the change-maker community and the best resource to discover and connect with change-makers worldwide.</p>
            </div>
            <div className="flex justify-center items-center mt-2/3">
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-[#1400FF] transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded-full text-white px-4 sm:px-6 border border-indigo-700 py-2 sm:py-3 text-sm">Post Recruitment Now +</button>
            </div>
            </div>
        </div>
    </section>
    <section>
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-4">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Opportunity</h2>
            <p className="mt-3 text-lg leading-8 text-gray-600">Find opportunity to grow your experience and potential here.</p>
          </div>
          <div className="  mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                < div className="relative my-2 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />{post.author.name}
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">{post.date}</time>
                  <a href={post.category.href} className="relative z-10 rounded-full px-3 py-1.5 font-medium bg-gray-300 text-grey-100 hover:bg-blue-500 hover:text-white">
                    {post.category.title}
                  </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="absolute inset-0" />{post.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="flex space-x-2 mt-3">
                <a href="/VolunteerForm" class="text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-4 py-2 text-center">Apply Now</a>
                <button className="text-gray-500 bg-white hover:bg-gray-100  rounded-lg border border-gray-200 text-sm font-medium px-4 py-2 hover:text-gray-900 focus:z-10 ">View Detail</button>
              </div>
          </div>
            ))}
          </div>
        </div>
      </div>
      </section>
      </>
    )
  }

export default Post2;