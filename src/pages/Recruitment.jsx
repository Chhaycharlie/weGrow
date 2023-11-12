import React from 'react'
import Footer from '../components/Footer'
import Detail from '../components/post-recruitment/Detail'
import Post from '../components/post-recruitment/Recruitment/Post'
import Search from '../components/post-recruitment/Recruitment/Search'
import Title from '../components/post-recruitment/Recruitment/Title'
function Recruitment() {
  return (
    <>
   {/* <Header/> */}
   <Title/>
   <Search/>
   <Post/>
   <Detail/>
   <Footer/>
   </>
  )
}

export default Recruitment