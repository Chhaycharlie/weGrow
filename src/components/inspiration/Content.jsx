import React from 'react'

function Content() {

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
      OrgName:"Name-Organization3",
      text:"Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat",
      image:"https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg"

    },
    {
      _id:5,
      title:"Title of Event5",
      OrgName:"Name-Organization3",
      text:"Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat",
      image:"https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg"

    },
    {
      _id:6,
      title:"Title of Event5",
      OrgName:"Name-Organization3",
      text:"Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat",
      image:"https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg"

    }

  ]

  return (

    <div class="container my-12 mx-auto md:px-6">
  <section class="mb-32 text-center lg:text-left">
    <h2 class="mb-12 text-center text-3xl font-bold">
      Post Inspirtation to All Volunteer
    </h2>
    <div class="grid gap-x-6 lg:grid-cols-3">
    {
      posts.map((p)=>{
        return <>
        <div class="mb-12 lg:mb-0"key={p._id}>
        <div class="relative  top-5 mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
          <img src={p.image} class="w-full" />
          <a href="#!">
            <div
              class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
          </a>
        </div>
        <h5 class=" relative top-2 mb-4 text-lg font-bold">{p.title}</h5>
        <div class="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-start">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
          </svg> 
          {p.OrgName}
        </div>
        <p class="text-neutral-500 dark:text-neutral-300">
          {p.text}
        </p>
      </div>
        </>
      })
    }
    </div>
  </section>
</div>
  )
}

export default Content