import React from 'react'

function Contact1() {
  return (
    <>
    <div class="bg-white ">
      <div class="py-6 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contact Us</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 text-l">Thank you for your interest in finding volunteer and finding voluntary work! If you have any questions please do not hesitate to contact us. We can be reached by phone, email, or through the contact form below.</p>
        <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 " placeholder="example168@gmail.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-black-500 focus:border-black-500 " placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-black-500 focus:border-black-500 " placeholder="Leave a comment..."></textarea>
          </div> 
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded p-10'>Submit</button>
          
      </form>
  </div>
</div>
    </>
  )
}

export default Contact1