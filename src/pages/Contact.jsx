import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { toast } from "react-toastify";
import AppLayout from "../components/Layout/AppLayout";
import { db } from "../firebase";
import SmallSpinner from "../components/shared/SmallSpinner";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const docRef = await addDoc(collection(db, "contactus"), {
        name: name,
        email: email,
        message: message,
        timestamp: serverTimestamp(),
      });

      toast.success("Thanks for Contact us !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);

      setName("");
      setEmail("");
      setMessage("");

      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      // Handle errors
      console.error("Error adding document: ", error.message);
      // Optionally, log the entire error object for debugging purposes
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <AppLayout>
      <section className="bg-white ">
        <div className="mx-auto max-w-7xl lg:h-[87vh]  px-4 py-16 sm:px-6 lg:px-8 lg:py-12">
          <div className="mb-2">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-8">
              <h2 className="font-heading mb-2 font-bold tracking-tight text-gray-900  text-3xl sm:text-5xl">
                Get In Touch With Us
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 ">
                Let's Start a Conversation
              </p>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-6 mb-12 text-lg text-gray-600 text-center sm:text-start">
                  Thank you for your interest in voluntary work! If you have any
                  questions please do not hesitate to contact us.
                </p>
                <ul className="mb-6 mt-6 md:mb-0 ">
                  <li className="flex justify-center sm:justify-start pr-24 sm:pr-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-500 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                        Our Address
                      </h3>
                      <p className="text-gray-600 ">In Your Heart</p>
                    </div>
                  </li>
                  <li className="flex justify-center sm:justify-start ">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-500 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                        Contact Us
                      </h3>
                      <p className="text-gray-600 ">
                        Mobile: +855(123) 456-789
                      </p>
                    </div>
                  </li>
                  <li className="flex justify-center sm:justify-start pl-3 sm:pl-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-500 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                        Email Us
                      </h3>
                      <p className="text-gray-600 ">
                        Mail: example99@gmail.com
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl p-5 md:p-5" id="form">
                <h2 className="mb-4 text-2xl font-bold">Send Us A Message</h2>
                <form id="contactForm">
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="name"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          id="name"
                          autocomplete="given-name"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                          name="name"
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="email"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="email"
                          id="email"
                          autocomplete="email"
                          placeholder="Your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="textarea"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center ">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="w-full bg-blue-500 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                      {loading ? (
                        <SmallSpinner
                          className={
                            "w-full h-6 flex justify-center items-center"
                          }
                        />
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};
export default Contact;
