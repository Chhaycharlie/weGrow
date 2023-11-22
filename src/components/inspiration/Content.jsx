import React from 'react'
const Content = () => {

  const posts =[
    {
      _id:1,
      title:"Title of Event1",
      OrgName:"Name-Organization1",
      text:"Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat",
      image:"https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg"
    },
    {
      _id:2,
      title:"Title of Event2",
      OrgName:"Name-Organization2",
      text:"Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat",
      image:"https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg"

    },
    {
      _id:3,
      title:"Title of Event3",
      OrgName:"Name-Organization3",
      text:"Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat",
      image:"https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg"

    },
    {
      _id:4,
      title:"Title of Event4",
      OrgName:"Name-Organization4",
      text:"Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat",
      image:"https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg"

    },
    {
      _id:5,
      title:"Title of Event5",
      OrgName:"Name-Organization5",
      text:"Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat",
      image:"https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg"

    },
    {
      _id:6,
      title:"Title of Event6",
      OrgName:"Name-Organization6",
      text:"Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat",
      image:"https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg"

    },
    {
      _id:7,
      title:"Title of Event7",
      OrgName:"Name-Organization7",
      text:"Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat",
      image:"https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg"
    }

  ]

  return (

    
    <div class="container my-12 mx-auto md:px-6">
      <div>
  <div class="mb-8 text-center lg:text-left">
    <h2 class="mb-12 text-center text-3xl font-bold">
      Post Inspirtation to All Volunteer
    </h2>
  <ul>
    <li class="flex ">
      <a href="/new" class="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
        <svg class="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
        </svg>
        New project
      </a>
    </li>
  </ul>
</div>
    <div class="grid gap-x-6 lg:grid-cols-3">
    {
      posts.map((p)=>{
        return <>
        <div class="mb-3 lg:mb-0"key={p._id}>
        <div class="relative  top-5 mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
          <img src={p.image} class="w-full" />
          <a href="#!">
            <div
              class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
          </a>
        </div>
        <h5 class="text-center relative top-2 mb-4 text-lg font-bold md:text-left">{p.title}</h5>
        <div class="mb-4 flex text-center justify-center text-sm font-medium text-danger  lg:justify-start">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
          </svg>
          {p.OrgName}
        </div>
        <p class="text-neutral-500 text-center md:text-left ">
          {p.text}
        </p>
      </div>
        </>
      })
    }
    </div>
  </div>
</div>
  )
}

export default Content