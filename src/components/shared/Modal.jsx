import { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isOpen ? "Close Modal" : "Open Modal"}
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-2 rounded w-[600px] h-[400px]">
            <p
              onClick={toggleModal}
              className="cursor-pointer hover:text-red-500 text-black px-4 py-2 rounded text-end"
            >
              X
            </p>
            <h1 className="font-semibold text-center text-xl text-gray-700">
              This is custom modal
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
