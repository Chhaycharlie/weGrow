import React, { useState } from "react";
import ModalPost from "../course/ModalPost";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    author: "src/assets/icons/people.png",
    title: "Charity at KompongCham Province on 28 May 2020",
    name: "meow meow",
    category: "popular",
    image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
  },
  {
    id: 2,
    author: "src/assets/icons/people.png",
    title: "Charity at KompongCham Province on 28 May 2020",
    name: "meow meow",
    category: "popular",
    image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
  },
  {
    id: 3,
    author: "src/assets/icons/people.png",
    title: "Charity at KompongCham Province",
    name: "meow meow",
    category: "popular",
    image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
  },
  {
    id: 4,
    author: "src/assets/icons/people.png",
    title: "Charity at KompongCham Province",
    name: "meow meow",
    category: "popular",
    image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
  },
  {
    id: 5,
    author: "src/assets/icons/people.png",
    title: "Charity at KompongCham Province",
    name: "meow meow",
    category: "all",
    image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
  },
  {
    id: 6,
    author: "src/assets/icons/people.png",
    name: "meow meow",
    title: "Charity at KompongCham Province",
    category: "all",
    image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
  },
  {
    id: 7,
    author: "src/assets/icons/people.png",
    name: "meow meow",
    title: "Charity at KompongCham Province",
    category: "all",
    image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
  },
  {
    id: 8,
    author: "src/assets/icons/people.png",
    name: "meow meow",
    title: "Charity at KompongCham Province",
    category: "all",
    image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
  },
  {
    id: 9,
    author: "src/assets/icons/people.png",
    name: "meow meow",
    title: "Charity at KompongCham Province",
    category: "most_visited",
    image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
  },
  {
    id: 10,
    author: "src/assets/icons/people.png",
    name: "meow meow",
    title: "Charity at KompongCham Province",
    category: "most_visited",
    image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
  },
  {
    id: 11,
    author: "src/assets/icons/people.png",
    name: "meow meow",
    title: "Charity at KompongCham Province",
    category: "most_visited",
    image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
  },
  {
    id: 12,
    author: "src/assets/icons/people.png",
    title: "Charity at KompongCham Province",
    name: "meow meow",
    category: "most_visited",
    image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
  },
  {
    id: 13,
    author: "src/assets/icons/people.png",
    name: "meow meow",
    imageUrl: "src/assets/icons/people.png",
    title: "Charity at KompongCham Province",
    category: "popular",
    image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
  },
  {
    id: 14,
    author: "src/assets/icons/people.png",
    name: "meow meow",
    title: "Charity at KompongCham Province",
    category: "popular",
    image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
  },
  {
    id: 15,
    author: "src/assets/icons/people.png",
    name: "meow meow",
    title: "Charity at KompongCham Province",
    category: "popular",
    image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
  },
  {
    id: 16,
    author: "src/assets/icons/people.png",
    name: "meow meow",
    title: "Charity at KompongCham Province",
    category: "popular",
    image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
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
    <>
      <Header />
      <div className="max-w-[1980px] m-auto px-4 py-12">
        <h1 className="text-blue-600 font-bold text-4xl text-center">
          Post Inspiration to All Volunteer
        </h1>
        {/* Filter Row */}
        <div className="flex flex-col lg:flex-row justify-between pt-10">
          {/* Fliter Type */}
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
            <ul className="flex flex-wrap -mb-px">
              <li className="me-2" onClick={() => setPosts(data)}>
                <a
                  href="#"
                  className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active "
                  aria-current="page"
                >
                  All
                </a>
              </li>
              <li className="me-2" onClick={() => filterType("popular")}>
                <a
                  href="#"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                  aria-current="page"
                >
                  Popular
                </a>
              </li>
              <li className="me-2" onClick={() => filterType("most_visited")}>
                <a
                  href="#"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300  "
                  aria-current="page"
                >
                  Most Visited
                </a>
              </li>
            </ul>
          </div>

          {/* New post */}
          <div>
            <ModalPost />
          </div>
        </div>

        {/* Display Posts */}
        <div className=" pt-4 grid gap-6 lg:grid-cols-4">
          {posts.map((item) => (
            <Link to={`/inspiration/${item.id}`}>
              <div
                key={item.id}
                className="border shadow-lg rounded-lg hover:scale-105 duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover rounded-t-lg"
                />
                <div className="flex justify-between px-2 py-4 items-center">
                  <div className="flex space-x-3 justify-center items-center">
                    <img
                      src={item.author}
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div className="flex flex-col">
                      <p className="font-bold">{item.name}</p>
                      <p className="font-md line-clamp-1 text-sm leading-6 ">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Post;
