import React from "react";

<<<<<<< HEAD
import AffordImg from '../../assets/home/affordability.svg'
import EasyImg from '../../assets/home/easy_to_use.svg'
import FlexImg from '../../assets/home/flexibility.svg'
import OpporImg from '../../assets/home/opportunities.svg'

const WhyOrganization = () => {
  return (
    <section className='w-full h-auto bg-gray-50'>
        <div className='container mx-auto py-20'>
          <h1 className='flex w-[70%] mx-auto justify-center md:text-5xl text-3xl font-extrabold text-center'>Why organization choose weGrow to post volunteer opportunities</h1>
          <div className="grid grid-cols-3 lg:grid-cols-4 md:grid-template-columns-3 gap-4 md:place-items-center mt-10 pl-[26%] lg:pl-[10%] ">
              {/* left side  */}
              <div className='col-span-2'>
                <div className="col-span-1 lg:pb-16 flex items-start lg:pt-12 pb-6">              
                  <img src={EasyImg} alt="easy_to_use" />
                  <div>
                    <h1 className='text-2xl ml-4 pb-2 font-medium'>Ease of use</h1>
                    <p className='text-base  ml-4'>is easy to use for organizations to post volunteer opportunities. Organizations can create an account and post opportunities in minutes.</p>
                  </div>
                </div>
=======
import OpporImg from "../../assets/home/opportunities.svg";
import EasyImg from "../../assets/home/easy_to_use.svg";
import FlexImg from "../../assets/home/flexibility.svg";
import AffordImg from "../../assets/home/affordability.svg";

const WhyOrganization = () => {
  return (
    <div className="container my-24 mx-auto px-4 md:px-10 min-h-[90%]">
      <section className="mb-32">
        <h2 className="mb-12 sm:px-32 mt-10 text-center text-3xl lg:text-4xl xl:text-5xl font-bold">
          Why organization choose weGrow to post volunteer opportunities?
        </h2>
>>>>>>> origin/dana-merge

        <div className="flex flex-wrap items-center">
          <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12 pt-10">
            <div className="mb-12 flex">
              <div className="shrink-0">
                <div className="rounded-md  p-4">
                  <img src={EasyImg} alt="easy" />
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Ease of use</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  is easy to use for organizations to post volunteer
                  opportunities. Organizations can create an account and post
                  opportunities in minutes.
                </p>
              </div>
            </div>

            <div className="mb-12 flex">
              <div className="shrink-0">
                <div className="rounded-md p-4">
                  <img src={FlexImg} alt="" />
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Flexibility</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Your website offers organizations a flexible way to post
                  volunteer opportunities. Organizations can post opportunities
                  for specific dates and times, or they can post ongoing
                  opportunities.
                </p>
              </div>
            </div>

            <div className="mb-12 flex">
              <div className="shrink-0">
                <div class="rounded-md p-4">
                  <img src={AffordImg} alt="afford" />
                </div>
              </div>
              <div class="ml-4 grow">
                <p class="mb-1 font-bold">Affordability</p>
                <p class="text-neutral-500 dark:text-neutral-300">
                  Your website is affordable for organizations to use.
                  Organizations can post volunteer opportunities for free, or
                  they can choose to pay for a premium listing.
                </p>
              </div>
            </div>
          </div>

          <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
            <div
              class="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat flex justify-center"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src={OpporImg}
                className="min-w-[70%] h-[50%] xl:max-w-[70%] rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyOrganization;
