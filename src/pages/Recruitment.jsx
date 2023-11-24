import React from 'react'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'
import RecruimentPost from '../components/post-recruitment/Recruitment/RecruitmentPost'
import Title from '../components/post-recruitment/Recruitment/Title'
const Recruitment = () => {
  return (
    <>
   {/* <Header/> */}
   <Title/>
   {/* <Search/> */}
   <RecruimentPost/>
   <Pagination/>
   <Footer/>
   </>
  )
}

export default Recruitment