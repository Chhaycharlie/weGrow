import React from "react";
import { ModalTerms } from "../shared/ModalTerms";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const VolunteerForm = () => {
  return (
    <>
      <Header />
      <div>
        <h2 className=" text-center text-3xl font-bold pt-5">
          Apply to become a potential volunteer!
        </h2>
        <div className="flex justify-center items-center">
          <img src="/src/assets/image/haha.gif" alt="gif" width={300} />
        </div>
      </div>
      <form className="px-20 pb-10">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Full Name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Nana"
              required
            />
          </div>
          <div>
            <label
              for="company"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Sex
            </label>
            <input
              type="text"
              id="company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Female, Male or Nothing to say"
              required
            />
          </div>
          <div>
            <label
              for="company"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Date of Birth
            </label>
            <input
              type="text"
              id="company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="MM/DD/YY"
              required
            />
          </div>
          <div>
            <label
              for="phone"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            for="address"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Current Address
          </label>
          <input
            type="text"
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Village a, pp commune, Khan sen sok, Phnom Penh"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Example@gmail.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="question"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            What position are you applying for?
          </label>
          <input
            type="questions"
            id="choice"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Logistics member"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="description"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Tell me your expectation
          </label>
          <input
            type="description"
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="..........."
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="file_input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Upload Your Resume
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
          />
          <p
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            SVG, PNG, JPG or GIF (MAX. 800x400px).
          </p>
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
              required
            />
          </div>
          <label
            for="remember"
            className="ml-2 text-sm font-medium text-gray-900 "
          >
            I agree with the &nbsp;
            <a
              href="#"
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
            >
              <ModalTerms />
            </a>
            .
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Apply Now
        </button>
      </form>
      <Footer />
    </>
  );
};

export default VolunteerForm;
