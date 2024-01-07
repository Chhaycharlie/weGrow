import { useState } from "react";
import SmallSpinner from "./SmallSpinner";

const Modal = ({ onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleDeleteItem = () => {
    onDelete();
    // No need to check !loading here, as the loading state is handled in the Post component
    toggleModal();
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-red-500 text-white px-2 py-2 rounded"
      >
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="z-50 fixed w-full h-full inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-2 rounded w-[500px] h-[300px]">
            <div
              className=" w-full h-full p-4 bg-white flex flex-col justify-between"
              tabIndex="-1"
              aria-labelledby="drawer-label"
              aria-hidden="true"
            >
              <div className="flex justify-between items-center">
                <h5
                  id="drawer-label"
                  className="inline-flex items-center text-sm font-semibold text-gray-500 uppercase "
                >
                  Delete Post
                </h5>
                <button
                  type="button"
                  onClick={toggleModal}
                  data-drawer-dismiss="drawer-delete-product-default"
                  aria-controls="drawer-delete-product-default"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center "
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close menu</span>
                </button>
              </div>

              <div className="w-full h-full flex justify-center">
                <svg
                  className="w-20 h-20 mt-4 mb-4 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="flex justify-center mb-6 text-lg text-gray-500 ">
                Are you sure you want to delete this posts?
              </h3>

              <div className="flex justify-center space-x-3">
                <button
                  onClick={handleDeleteItem}
                  className="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2.5 text-center mr-2 "
                >
                  Confirm
                </button>
                <button
                  onClick={toggleModal}
                  className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2.5 text-center   "
                  data-drawer-hide="drawer-delete-product-default"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
