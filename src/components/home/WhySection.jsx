import React from "react";

import WorkImg from "../../assets/home/worktgt.svg";
import ConvenienceImg from "../../assets/home/convenience.svg";
import VarietyImg from "../../assets/home/variety.svg";
import ReliaImg from "../../assets/home/reliability.svg";

const why = () => {
  return (
    <div className="bg-gray-50 w-full min-h-[90%]">
      <div className="container my-24 mx-auto px-4 md:px-10 pb-3">
        <section className="mb-32">
          <h2 className="mb-12 sm:px-32 mt-10 pt-24 text-center text-3xl lg:text-4xl xl:text-5xl font-bold">
            Why people choose weGrow to find volunteer work?
          </h2>

          <div className="flex flex-wrap items-center">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
              <div
                className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat flex justify-center"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  src={WorkImg}
                  className="min-w-[70%] h-[50%] xl:max-w-[70%] rounded-lg"
                />
              </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12 pt-10">
              <div className="mb-12 flex">
                <div className="shrink-0">
                  <div className="rounded-md  p-4">
                    <img src={ConvenienceImg} alt="Convenience" />
                  </div>
                </div>
                <div className="ml-4 grow">
                  <p className="mb-1 font-bold">Convenience</p>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    is a convenient way to find volunteer opportunities. Users
                    can search for opportunities at any time and from any
                    location.
                  </p>
                </div>
              </div>

              <div className="mb-12 flex">
                <div className="shrink-0">
                  <div className="rounded-md p-4">
                    <img src={VarietyImg} alt="" />
                  </div>
                </div>
                <div className="ml-4 grow">
                  <p className="mb-1 font-bold">Variety</p>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    offers a wide variety of volunteer opportunities, so users
                    can find the perfect opportunity for their interests and
                    skills.
                  </p>
                </div>
              </div>

              <div className="mb-12 flex">
                <div className="shrink-0">
                  <div className="rounded-md p-4">
                    <img src={ReliaImg} alt="reliability" />
                  </div>
                </div>
                <div className="ml-4 grow">
                  <p className="mb-1 font-bold">Reliability</p>
                  <p className="text-neutral-500 dark:text-neutral-300">
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
