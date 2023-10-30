import {
  Button, Tab,
  Tabs, TabsBody, TabsHeader
} from "@material-tailwind/react";
import React from 'react';

function Top() {
  const data = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Popular",
      value: "popular",
    },
    {
      label: "Visited",
      value: "visited",
    },
  ];
  return (
    <>
    <div className="p-10  justify-items items-center gap-5 flex">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="rounded-full w-10 h-10 cursor-auto"/>
        <Button variant='contained' className="bg-blue-700"> Create new post</Button>
    </div>
   <div className=" flex w-full p-4 pl-10 justify-between">
      <Tabs id="custom-animation" value="all">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}>
      </TabsBody>
    </Tabs>
      
    <form>   
     <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> 
    <div class="relative">
         <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div> 
         <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 outline-none focus:border-blue-500 " placeholder="Search...." required> 
         </input>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
    </div>
    </form>
    </div>
    </>
  )
}

export default Top