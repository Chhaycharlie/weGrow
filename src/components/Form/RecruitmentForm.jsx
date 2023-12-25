import React, { useState } from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { Link } from "react-router-dom";

const RecruitmentForm = () => {
  const [recrut, setRecruit] = useState(0);

  return (
    <>
      <Header />
      <div className="w-full h-20 py-5 text-center bg-blue-600  shadow overflow-hidden sm:rounded-md font-bold text-3xl text-white">
        Volunteer Recruitment Form
      </div>

      <section className="text-gray-600 body-font m-0 p-0 relative bg-blue-200"></section>

      <div className="container mx-auto">
        <div className="flex flex-col text-center w-full mb-1"></div>

        <div className="mt-10 md:mt-0 md:col-span-2 px-24 pt-10 ">
          <form>
            <div className="shadow overflow-hidden sm:rounded-md border border-gray-400">
              <div className="px-2 py-8 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Recruitment No.
                    </label>
                    <input
                      type="text"
                      nameName="No"
                      placeholder="1"
                      id="first-name"
                      autocomplete="given-name"
                      onChange={(e) => setRecruit(e.target.value)}
                      value={recrut}
                      class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full border border-gray-300 shadow-sm sm:text-sm rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Recruitment Date
                    </label>
                    <input
                      type="date"
                      name="last-name"
                      placeholder="DD/MM/YYYY"
                      id="last-name"
                      autocomplete="family-name"
                      className="mt-1 p-2 focus:ring-indigo-500 border border-gray-300  focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Recruitment Deadline
                    </label>
                    <input
                      type="date"
                      name="last-name"
                      placeholder="09/02/2023"
                      id="last-name"
                      autocomplete="family-name"
                      className="mt-1 p-2 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title Recruitment
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      placeholder="Write a short Title here..."
                      id="last-name"
                      autocomplete="family-name"
                      className="mt-1 p-2 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Location
                    </label>
                    <select
                      id="country"
                      name="country"
                      autocomplete="country"
                      className="mt-1 p-2 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>PhnomPenh</option>
                      <option>KompongCham</option>
                      <option>SiemReap</option>
                      <option>Battambang</option>
                      <option>Kandal</option>
                      <option>SvayRieng</option>
                      <option>Takeo</option>
                      <option>Kompot</option>
                      <option>PreahSihanouk</option>
                      <option>KohKong</option>
                      <option>Keb</option>
                      <option>Kratie</option>
                      <option>TbongKmom</option>
                      <option>KompongSpeu</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Recruiment Description
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      placeholder="Write Description of Organization here"
                      id="last-name"
                      autocomplete="family-name"
                      className="mt-1 p-2 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="country"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Gender
                    </label>
                    <select
                      id="country"
                      name="country"
                      autocomplete="country"
                      className="mt-1 p-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Male</option>
                      <option>female</option>
                      <option>other</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Age
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      placeholder="above 15"
                      id="last-name"
                      autocomplete="family-name"
                      className="mt-1 p-2 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      How many people you are recruit?
                    </label>
                    <select
                      id="country"
                      name="country"
                      autocomplete="country"
                      className="mt-1 p-2 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>1</option>
                      <option>2 or 3</option>
                      <option>5-10</option>
                      <option>10-30</option>
                      <option>50-100</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Position
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      placeholder="trainer..."
                      autocomplete="family-name"
                      className="mt-1 p-2 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="country"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Department
                    </label>
                    <select
                      id="country"
                      name="country"
                      autocomplete="country"
                      className="mt-3 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Project Management</option>
                      <option>Media</option>
                      <option>Logistics</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Website Organization
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      placeholder="Link Url"
                      id="last-name"
                      autocomplete="family-name"
                      className="mt-1 p-2 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Academic Qualification
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      placeholder="Undergraduate"
                      id="last-name"
                      autocomplete="family-name"
                      className="mt-1 p-2 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Required experience
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      placeholder="Need to have softskill"
                      id="last-name"
                      autocomplete="family-name"
                      className="mt-1 p-2 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6">
                    <label
                      for="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Organization
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      placeholder="Socheata123@emaple.com."
                      id="email-address"
                      autocomplete="email"
                      className="mt-1 p-2 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-6">
                    <label
                      for="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Result Announcement
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      placeholder="After 14 september we will contact you if you passed"
                      id="email-address"
                      autocomplete="email"
                      className="mt-1 p-2 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="mt-8 ">
                  <legend className=" text-base  text-1.5xl font-medium text-gray-900">
                    Tell me some of your skill
                  </legend>
                  <div className="mt-2 space-y-4">
                    <div className="flex place-items-center">
                      <div className="flex items-center h-5">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="focus:ring-indigo-500 p-2 h-4 w-4 border text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          for="comments"
                          className="font-regular text-gray-700"
                        >
                          Project management
                        </label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="focus:ring-indigo-500 p-2 h-4 w-4 border text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          for="comments"
                          className="font-regular text-gray-700"
                        >
                          Research
                        </label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div clasName="flex items-center h-5">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="focus:ring-indigo-500 p-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          for="comments"
                          className="font-regular text-gray-700"
                        >
                          Teamwork
                        </label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="focus:ring-indigo-500 p-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          for="comments"
                          className="font-regular text-gray-700"
                        >
                          communication
                        </label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="focus:ring-indigo-500 p-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          for="comments"
                          className="font-regular text-gray-700"
                        >
                          Time management
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-white text-right sm:px-6">
                    <Link to="/recruitment">
                      <button
                        type="submit"
                        className="mr-4 inline-flex justify-center p-2 w-24 border border-transparent shadow-sm text-sm font-medium rounded-md   text-white bg-gray-600 hover:bg-gray-900 focus:outline-none   focus:ring-indigo-500"
                      >
                        Cancel
                      </button>
                    </Link>
                    <button className="inline-flex justify-center w-24 p-2 border text-white border-transparent shadow-sm text-sm font-medium rounded-md   bg-blue-600 hover:bg-blue-400 text-whitefocus:outline-none   focus:ring-indigo-500">
                      Saved
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class=""></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecruitmentForm;
