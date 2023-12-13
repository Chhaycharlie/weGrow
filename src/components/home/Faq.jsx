import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React from 'react';

function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }  

const Faq = () => {
    const [open, setOpen] = React.useState(0);
 
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
   
    return (
      <div className='w-full h-auto bg-white'>
        <div className='container mx-auto py-20'>
            {/* title */}
            <div className='text-center'>
                <h1 className='flex w-[70%] mx-auto justify-center md:text-5xl text-4xl font-extrabold text-center'>Frequently Asked Questions</h1>
                <p className='text-xl font-thin w-[50%] mx-auto pt-10'>Here are some of our FAQs. If you have any other questions you’d like answered please fell free to email us.</p>
            </div>
            {/* Accordion */}
            <div className='w-1/2 mx-auto mt-10'>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(1)}>
                        What is weGrow? </AccordionHeader>
                    <AccordionBody className='text-md'>
                        weGrow is a social platform that connects people who want to make a difference in their communities with volunteer opportunities. 
                        It allows you to search for volunteer opportunities by location, cause, or keyword.
                        You can also create a profile to share your skills and interests, and connect with other volunteers.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                        How to find a voluntary work?
                    </AccordionHeader>
                    <AccordionBody className='text-md'>
                    To find voluntary work on weGrow, you can search for opportunities by filter Organization. 
                    You can also browse through a list of recent opportunities. 
                    Once you find an opportunity that you're interested in, you can click on detail to learn more about it. 
                    You can also apply for the opportunity directly just only click on apply now.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(3)}>
                        Is it really reach out audience?
                    </AccordionHeader>
                    <AccordionBody className='text-md'>
                    Yes, weGrow can help you reach a wide audience of potential volunteers. 
                    When you post a volunteer opportunity, it will be visible to all weGrow users who are searching for 
                    opportunities in your area or who are interested in your cause. 
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(4)}>
                        How to use it effectively?
                    </AccordionHeader>
                    <AccordionBody className='text-md'>
                    To use weGrow effectively, you should create a profile and share your skills and interests on inspiration part. 
                    This will help you connect with other volunteers who have similar interests. 
                    You should also regularly search for volunteer opportunities that match your skills and interests. 
                
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(5)}>
                        How to post a  recruitment?
                    </AccordionHeader>
                    <AccordionBody className='text-md'>
                    To post a recruitment on weGrow, you will need to create a new post. 
                    You will then need to enter a title for your post, a description of the opportunity, 
                    and any other relevant information. You can also include a link to your website. 
                    Once you have created your post, you will need to submit it for review. 
                    Once your post has been approved, it will be visible to all weGrow users.
                    </AccordionBody>
                </Accordion>
            </div>
        </div>
      </div>
    );
    };
export default Faq
