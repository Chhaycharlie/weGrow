import React, { useState } from 'react';
import Modal_Post from '../course/Modal_Post';

const data = [
  {
    id: 1,
    author:'src/assets/icons/people.png',
    title: 'Charity at KompongCham Province on 28 May 2020',
    name: 'meow meow',
    category: 'popular',
    image:
      'https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg',
  },
  {
    id: 2,
    author:'src/assets/icons/people.png',
    title: 'Charity at KompongCham Province on 28 May 2020',
    name: 'meow meow',
    category: 'popular',
    image:
      'https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg',
  },
  {
    id: 3,
    author:'src/assets/icons/people.png',
    title: 'Charity at KompongCham Province',
    name: 'meow meow',
    category: 'popular',
    image:
      'https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg',
  },
  {
    id: 4,
    author: 'src/assets/icons/people.png',
    title: 'Charity at KompongCham Province',
    name: 'meow meow',
    category: 'popular',
    image:
      'https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg',
  },
  {
    id: 5,
    author:'src/assets/icons/people.png',
    title: 'Charity at KompongCham Province',
    name: 'meow meow',
    category: 'all',
    image:
      'https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg',
  },
  {
    id: 6,
    author:'src/assets/icons/people.png',
    name: 'meow meow',
    title: 'Charity at KompongCham Province',
    category: 'all',
    image:
      'https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg',
  },
  {
    id: 7,
    author:'src/assets/icons/people.png',
    name: 'meow meow',
    title: 'Charity at KompongCham Province',
    category: 'all',
    image:
      'https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg',
  },
  {
    id: 8,
    author:'src/assets/icons/people.png',
    name: 'meow meow',
    title: 'Charity at KompongCham Province',
    category: 'all',
    image:
      'https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg',
  },
  {
    id: 9,
    author:'src/assets/icons/people.png',
    name: 'meow meow',
    title: 'Charity at KompongCham Province',
    category: 'most_visited',
    image:
      'https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg',
  },
  {
    id: 10,
    author:'src/assets/icons/people.png',
    name: 'meow meow',
    title: 'Charity at KompongCham Province',
    category: 'most_visited',
    image:
      'https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg',
  },
  {
    id: 11,
    author:'src/assets/icons/people.png',
    name: 'meow meow',
    title: 'Charity at KompongCham Province',
    category: 'most_visited',
    image:
      'https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg',
  },
  {
    id: 12,
    title: 'Charity at KompongCham Province',
    name: 'meow meow',
    category: 'most_visited',
    image:
      'https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg',
  },
  {
    id: 13,
    author:'src/assets/icons/people.png',
    name: 'meow meow',
    imageUrl:'src/assets/icons/people.png',
    title: 'Charity at KompongCham Province',
    category: 'popular',
    image:
      'https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg',
  },
  {
    id: 14,
    author:'src/assets/icons/people.png',
    name: 'meow meow',
    title: 'Charity at KompongCham Province',
    category: 'popular',
    image:
      'https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg',
  },
  {
    id: 15,
    author:'src/assets/icons/people.png',
    name: 'meow meow',
    title: 'Charity at KompongCham Province',
    category: 'popular',
    image:
      'https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg',
  },
  {
    id: 16,
    author:'src/assets/icons/people.png',
    name: 'meow meow',
    title: 'Charity at KompongCham Province',
    category: 'popular',
    image:
      'https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg',
  },
];

const Post = () => {
  const [posts, setPosts] = useState(data);

  //   Filter Type 
  const filterType = (category) => {
    setPosts(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-blue-600 font-bold text-4xl text-center'>
        Post Inspiration to All Volunteer
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between pt-10'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter </p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setPosts(data)}
              className='m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('popular')}
              className='m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            >
              Popular
            </button>
            <button
              onClick={() => filterType('most_visited')}
              className='m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            >
              Most Visited
            </button>
        </div>
        </div>
        {/* New post */}
        <div>
          <Modal_Post/>
        </div>
      </div>

      {/* Display Posts */}
      <div className=' pt-4 grid gap-6 lg:grid-cols-4'>
        {posts.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.title}
              className='w-full object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4 items-center'>
              <div className='flex space-x-3 justify-center items-center'>
              <img src={item.author} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className='flex flex-col'>
                  <p className='font-bold'>{item.name}</p>
                  <p className='font-md line-clamp-1 text-sm leading-6 '>{item.title}</p>
                </div>
              </div>
                <a>
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
                </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;