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
                    <AccordionHeader onClick={() => handleOpen(1)}>What is weGrow? </AccordionHeader>
                    <AccordionBody className='text-md'>
                        We&apos;re not always in the position that we want to be at. We&apos;re constantly
                        growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                        How to find a voluntary work?
                    </AccordionHeader>
                    <AccordionBody className='text-md'>
                        We&apos;re not always in the position that we want to be at. We&apos;re constantly
                        growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(3)}>
                        Is it really reach out audience?
                    </AccordionHeader>
                    <AccordionBody className='text-md'>
                        We&apos;re not always in the position that we want to be at. We&apos;re constantly
                        growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(4)}>
                        How to use it effectively?
                    </AccordionHeader>
                    <AccordionBody className='text-md'>
                        We&apos;re not always in the position that we want to be at. We&apos;re constantly
                        growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(5)}>
                        How to post a  recruitment?
                    </AccordionHeader>
                    <AccordionBody className='text-md'>
                        We&apos;re not always in the position that we want to be at. We&apos;re constantly
                        growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                    </AccordionBody>
                </Accordion>
            </div>
        </div>
      </div>
    );
}

export default Faq