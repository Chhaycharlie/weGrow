import React from "react";

const EditUser = () => {
  return (
    <div
      id="drawer-delete-product-default"
      className=" w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform translate-x-full bg-white "
      tabindex="-1"
      aria-labelledby="drawer-label"
      aria-hidden="true"
    >
      <h5
        id="drawer-label"
        className="inline-flex items-center text-sm font-semibold text-gray-500 uppercase "
      >
        Delete item
      </h5>
      <button
        type="button"
        data-drawer-dismiss="drawer-delete-product-default"
        aria-controls="drawer-delete-product-default"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center "
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <svg
        className="w-10 h-10 mt-8 mb-4 text-red-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <h3 className="mb-6 text-lg text-gray-500 ">
        Are you sure you want to delete this posts?
      </h3>
      <a
        href="#"
        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2.5 text-center mr-2 "
      >
        Yes, I'm sure
      </a>
      <a
        href="#"
        className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 border border-gray-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2.5 text-center   "
        data-drawer-hide="drawer-delete-product-default"
      >
        No, cancel
      </a>
    </div>
  );
};

export default EditUser;

{
  /* <Link
                              to={`/dashboard/users/view-details/${user.id}`}
                            >
                              <button
                                type="button"
                                data-modal-target="delete-user-modal"
                                data-modal-toggle="delete-user-modal"
                                className="inline-flex justify-center items-center p-2 text-sm font-medium text-center text-white bg-[#66CCFF] rounded-lg hover:bg-blue-400 "
                              >
                                <svg
                                  width="16px"
                                  height="16px"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  stroke="#ffffff"
                                  strokeWidth="1.608"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <circle
                                      cx="12"
                                      cy="12"
                                      r="3.5"
                                      stroke="#fff"
                                    ></circle>{" "}
                                    <path
                                      d="M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z"
                                      stroke="#fff"
                                    ></path>{" "}
                                  </g>
                                </svg>
                              </button>
                            </Link> */
}
