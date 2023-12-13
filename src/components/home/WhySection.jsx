import React from "react";

<<<<<<< HEAD
import ConvenienceImg from '../../assets/home/convenience.svg'
import ReliaImg from '../../assets/home/reliability.svg'
import VarietyImg from '../../assets/home/variety.svg'
import WorkImg from '../../assets/home/worktgt.svg'

const why = () => {
  return (
    <section className='w-full h-auto bg-white'>
        <div className='container mx-auto py-20'>
          <h1 className='flex w-[70%] mx-auto justify-center md:text-5xl text-3xl font-extrabold text-center'>Why people choose weGrow to find volunteer work</h1>
            <div className="grid grid-cols-3 lg:grid-cols-4 md:grid-template-columns-3 place-items-center mt-20 pl-[26%] lg:pl-0 ">
              {/* left side  */}
              <div className="col-span-2">
                <img src={WorkImg} width={400} alt="Why people choose weGrow to find volunteer work" />
=======
import WorkImg from "../../assets/home/worktgt.svg";
import ConvenienceImg from "../../assets/home/convenience.svg";
import VarietyImg from "../../assets/home/variety.svg";
import ReliaImg from "../../assets/home/reliability.svg";

const why = () => {
  return (
    <div className="bg-gray-50 w-full min-h-[90%]">
      <div class="container my-24 mx-auto px-4 md:px-10 pb-3">
        <section class="mb-32">
          <h2 class="mb-12 sm:px-32 mt-10 pt-24 text-center text-3xl lg:text-4xl xl:text-5xl font-bold">
            Why people choose weGrow to find volunteer work?
          </h2>

          <div class="flex flex-wrap items-center">
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
              <div
                class="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat flex justify-center"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  src={WorkImg}
                  className="min-w-[70%] h-[50%] xl:max-w-[70%] rounded-lg"
                />
>>>>>>> origin/dana-merge
              </div>
            </div>

            <div class="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12 pt-10">
              <div class="mb-12 flex">
                <div class="shrink-0">
                  <div class="rounded-md  p-4">
                    <img src={ConvenienceImg} alt="Convenience" />
                  </div>
                </div>
                <div class="ml-4 grow">
                  <p class="mb-1 font-bold">Convenience</p>
                  <p class="text-neutral-500 dark:text-neutral-300">
                    is a convenient way to find volunteer opportunities. Users
                    can search for opportunities at any time and from any
                    location.
                  </p>
                </div>
              </div>

              <div class="mb-12 flex">
                <div class="shrink-0">
                  <div class="rounded-md p-4">
                    <img src={VarietyImg} alt="" />
                  </div>
                </div>
                <div class="ml-4 grow">
                  <p class="mb-1 font-bold">Variety</p>
                  <p class="text-neutral-500 dark:text-neutral-300">
                    offers a wide variety of volunteer opportunities, so users
                    can find the perfect opportunity for their interests and
                    skills.
                  </p>
                </div>
              </div>

              <div class="mb-12 flex">
                <div class="shrink-0">
                  <div class="rounded-md p-4">
                    <img src={ReliaImg} alt="reliability" />
                  </div>
                </div>
                <div class="ml-4 grow">
                  <p class="mb-1 font-bold">Reliability</p>
                  <p class="text-neutral-500 dark:text-neutral-300">
                    is a reliable source of volunteer opportunities. All
                    organizations listed on the website have been vetted to
                    ensure that they are legitimate and trustworthy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default why;
