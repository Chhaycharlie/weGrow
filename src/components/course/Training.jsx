import React from "react";
import { Link } from "react-router-dom";
import Subscription from "../course/Subscription";

function Training() {
  return (
    <>
      <section>
        <div className="max-w-screen lg:h-[90vh] px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 lg:pb-10">
          <div className="flex-col justify-center items-center pt-20 w-full place-self-center 2xl:px-24">
            <h1 className="pb-10 font-extrabold tracking-tight text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
              Your gateway to valuable training resources for making a
              difference
            </h1>
            <p className=" text-center mb-6 font-light text-gray-500 text-xs sm:text-xs md:text-sm lg:text-md xl:text-xl ">
              Whether you're a seasoned volunteer or just starting out, we have
              the training you need to make a difference in your community. Our
              curated collection of online training resources covers a wide
              range of topics, from volunteer management to effective
              communication. With our easy-to-use platform, you can learn at
              your own pace and from the comfort of your own home.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="/Inspiration"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-blue-700 transition duration-150 ease-in-out hover:bg-blue-600 lg:text-xl lg:font-bold  rounded-xl text-white px-4 sm:px-10 border border-blue-700 py-2 sm:py-4 text-sm"
            >
              View Inspiration Post
            </Link>
            <Link
              to={"/recruitment"}
              className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-transparent transition duration-150 ease-in-out hover:border-blue-600 lg:text-xl lg:font-bold  hover:text-blue-600 rounded-xl border border-blue-700  text-gray-500 px-4 sm:px-10 py-2 sm:py-4 text-sm"
            >
              find volunteer
            </Link>
          </div>
          <div className="flex items-center justify-center font-md uppercase text-gray-700 pt-24">
            Featured In
          </div>
          <div className="bg-white py-8">
            <div className="max-w-screen-xl px-6 mx-auto lg:pb-16">
              <div className="grid grid-cols-3  gap-6 text-gray-500 sm:gap-12 sm:grid-cols-6 lg:grid-cols-5 ">
                <a
                  href="https://alison.com/"
                  target="blank"
                  className="flex items-center lg:justify-center"
                >
                  <svg
                    className=" hover:text-[#465159]"
                    clipRule="evenodd"
                    fillRule="evenodd"
                    image-rendering="optimizeQuality"
                    shape-rendering="geometricPrecision"
                    text-rendering="geometricPrecision"
                    viewBox="0 0 6083.59 1215"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fillRule="nonzero">
                      <path
                        d="m699.13 399.51-233.04-399.51h466.09z"
                        fill="#f58220"
                      />
                      <path
                        d="m932.18 0-233.05 399.51h466.09z"
                        fill="#ea1c2d"
                      />
                      <path
                        d="m466.09 0-233.05 399.51h466.09z"
                        fill="#ffd200"
                      />
                      <path
                        d="m466.09 799.02-233.05-399.51h466.09z"
                        fill="#c1d52f"
                      />
                      <path
                        d="m932.18 799.02-233.05-399.51h466.09z"
                        fill="#ac1e2d"
                      />
                      <path
                        d="m233.04 399.51-233.04 399.51h466.09z"
                        fill="#00a94f"
                      />
                      <path
                        d="m1165.22 399.51-233.04 399.51h466.1z"
                        fill="#c9187e"
                      />
                      <path
                        d="m233.04 1198.52-233.04-399.5h466.09z"
                        fill="#008445"
                      />
                      <path
                        d="m1165.22 1198.52-233.04-399.5h466.1z"
                        fill="#873795"
                      />
                      <path
                        d="m699.13 799.02-233.04 399.5h466.09z"
                        fill="#465159"
                      />
                      <path
                        d="m1398.28 799.02-233.06 399.5h466.09z"
                        fill="#f99d25"
                      />
                      <path d="m2472.43 798.04-127.54-311.34-127.55 311.34h255.1zm2937.73-334.65h208.48v104.23c11.87-15.54 24.89-30.39 39.07-44.57 14.16-14.16 29.95-26.75 47.32-37.72 17.35-10.97 36.55-19.65 57.6-26.06 21.02-6.39 44.79-9.6 71.34-9.6 79.54 0 141.02 24.24 184.46 72.7 43.42 48.47 65.16 115.2 65.16 200.23v475.92h-208.48v-410.08c0-49.38-10.97-86.62-32.92-111.79-21.94-25.13-53.03-37.71-93.25-37.71-40.25 0-72.01 12.58-95.32 37.71-23.32 25.16-34.97 62.41-34.97 111.79v410.08h-208.48v-735.13zm-547.21 571.93c30.19 0 56.92-5.25 80.23-15.78 23.31-10.5 43.2-24.9 59.67-43.19 16.45-18.29 29.01-39.55 37.71-63.79 8.69-24.22 13.05-50.06 13.05-77.49v-2.74c0-27.43-4.59-53.26-13.73-77.5-9.15-24.21-22.42-45.71-39.77-64.46-17.38-18.73-37.73-33.6-61.03-44.57-23.31-10.98-49.61-16.47-78.85-16.47-30.19 0-56.93 5.27-80.25 15.77-23.31 10.53-43.19 24.93-59.66 43.2-16.45 18.3-29.04 39.57-37.73 63.78-8.69 24.24-13.02 50.07-13.02 77.49v2.75c0 27.43 4.57 53.27 13.73 77.48 9.12 24.25 22.38 45.74 39.76 64.47 17.36 18.75 37.93 33.6 61.72 44.57 23.76 10.99 49.82 16.47 78.18 16.47zm-2.73 179.67c-56.72 0-109.29-9.84-157.73-29.49-48.49-19.66-90.31-46.63-125.5-80.91-35.2-34.3-62.87-74.51-82.97-120.69-20.14-46.17-30.18-95.78-30.18-148.82v-2.74c0-53.03 10.04-102.63 30.18-148.81 20.1-46.16 47.99-86.63 83.66-121.38 35.66-34.74 77.7-62.17 126.18-82.29 48.44-20.1 101.49-30.17 159.09-30.17 56.69 0 109.25 9.84 157.73 29.49 48.45 19.67 90.28 46.63 125.49 80.92 35.2 34.29 62.85 74.53 82.97 120.69 20.11 46.18 30.18 95.79 30.18 148.81v2.75c0 53.03-10.07 102.65-30.18 148.8-20.12 46.19-47.99 86.64-83.66 121.38-35.64 34.76-77.73 62.19-126.18 82.29-48.47 20.09-101.5 30.18-159.08 30.18zm-791.38-2.76c-52.11 0-105.4-8.91-159.78-26.74-54.41-17.83-106.28-45.95-155.67-84.35l89.15-137.15c40.24 29.27 80.24 51.21 120.02 65.84 39.77 14.64 77.02 21.94 111.78 21.94 30.18 0 52.33-5.02 66.51-15.09 14.18-10.06 21.26-23.32 21.26-39.77v-2.75c0-10.98-4.11-20.57-12.34-28.81-8.23-8.22-19.44-15.3-33.61-21.26-14.2-5.93-30.42-11.66-48.69-17.13-18.3-5.49-37.51-11.43-57.61-17.83-25.61-7.31-51.42-16.23-77.49-26.74-26.05-10.51-49.6-24.22-70.62-41.15-21.05-16.91-38.2-37.72-51.44-62.4-13.26-24.69-19.88-54.86-19.88-90.53v-2.74c0-37.48 7.08-70.63 21.26-99.43 14.14-28.8 33.36-53.25 57.6-73.38 24.23-20.1 52.81-35.18 85.73-45.27 32.91-10.05 67.66-15.08 104.22-15.08 46.63 0 93.96 7.54 141.96 22.63 48.01 15.09 92.11 35.89 132.36 62.41l-79.56 144.01c-36.57-21.02-72.23-37.72-106.97-50.06-34.76-12.35-65.38-18.53-91.9-18.53-25.61 0-44.8 4.81-57.6 14.41-12.82 9.6-19.21 21.73-19.21 36.35v2.74c0 10.08 4.13 18.99 12.36 26.74 8.22 7.78 19.19 15.09 32.91 21.94 13.72 6.86 29.48 13.27 47.31 19.2 17.82 5.96 36.8 12.58 56.92 19.88 25.59 8.24 51.65 18.07 78.18 29.5 26.51 11.43 50.28 25.37 71.31 41.82 21.02 16.46 38.41 36.58 52.12 60.35 13.72 23.79 20.57 52.59 20.57 86.4v2.75c0 41.14-7.1 76.59-21.25 106.29-14.2 29.72-34.08 54.17-59.67 73.37-25.61 19.19-55.33 33.6-89.16 43.19-33.82 9.61-70.86 14.4-111.08 14.4zm-662.43-748.84h208.48v735.13h-208.48zm-5.49-266.08h219.46v185.16h-219.46zm-408.67 1001.21h208.47v-1001.2h-208.47zm-741.99-966.92h194.75l411.46 966.92h-220.82l-87.77-215.33h-405.97l-87.78 215.33h-215.34z" />
                      <path
                        d="m1398.28 799.02 232.91 399.29.63.21 169.33-399.5z"
                        fill="#e32726"
                      />
                    </g>
                  </svg>
                </a>
                <a
                  href="https://www.udemy.com/"
                  className="flex items-center lg:justify-center"
                >
                  <svg
                    className="h-12 hover:text-black"
                    viewBox="0 0 800.09 301"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    width="2500"
                    height="941"
                  >
                    <path
                      d="M124.29 71.82L62.14 35.91 0 71.82V35.91L62.15 0l62.15 35.91v35.91z"
                      fill="#A435F0"
                    />
                    <path d="M32.56 101.97v79.15c0 20.45 15.26 30.42 29.59 30.42 14.45 0 29.6-10.23 29.6-30.69v-78.88h32.55v81.04c0 18.84-5.92 33.37-17.75 43.34-11.85 9.96-26.64 14.81-44.68 14.81-18.02 0-32.82-4.84-44.38-14.81C5.92 216.39 0 202.4 0 183.81v-81.84zm373.19 98.37l24.18 13.97c-14.75 16.82-34.42 26.58-59.14 26.58-21.26 0-38.75-6.46-51.93-19.11-13.18-12.66-19.9-29.63-19.9-50.9v-1.06c0-21.55 6.72-38.78 19.9-51.97 13.46-13.19 30.42-19.65 51.13-19.65 19.65 0 35.78 6.46 48.15 19.65 12.65 13.19 18.84 29.35 18.84 48.74 0 6.25-.71 12.9-.71 12.9H331.09c1.77 20.62 17.43 33.94 40.78 33.94 12.8 0 24.03-4.31 33.88-13.09zm-61.86-66.06c-6.94 5.4-10.93 12.04-11.97 19.92h72.2c-.3-7.62-3.77-14.25-10.19-19.65-6.74-5.93-14.54-8.89-23.95-8.89-9.95 0-18.84 2.96-26.1 8.61zm389.57 124.9c-13.2 31.21-27.02 41.82-48.21 41.82h-14.69v-28.88h11.88c7.29 0 14.06-2.74 20.52-17.65l6.46-14.93-55.7-137.57h33.1l39.55 99.08L767 101.97h33.09l-66.62 157.21zM251.04 50.02h32.29v187.64h-32.29v-12.49c-7.36 6.79-21.29 15.45-43.32 15.45-19.09 0-35.24-6.73-48.42-20.2-12.92-13.73-19.37-30.42-19.37-50.62 0-20.19 6.45-36.88 19.37-50.35C172.48 105.73 188.62 99 207.72 99c16.05 0 32.65 5.69 43.32 15.26zm2.43 119.8c0-11.86-4.05-21.82-12.12-29.62-7.8-7.81-17.75-11.85-29.33-11.85-11.57 0-20.98 4.04-28.78 11.85-7.53 7.8-11.3 17.76-11.3 29.62 0 11.84 3.78 21.8 11.3 29.61 7.8 7.81 17.21 11.85 28.78 11.85 11.58 0 21.53-4.04 29.33-11.85 8.07-7.81 12.12-17.77 12.12-29.61zm350.06-70.53c28.08 0 47.09 18.99 47.09 54.37v84h-32.29v-79.43c0-18.57-8.88-30.15-24.22-30.15-15.87 0-26.89 12.93-26.89 31.5v78.09H535.2v-79.42c0-18.58-8.87-30.16-24.22-30.16-15.05 0-26.36 13.19-26.36 31.5v78.08h-32.01V101.99h32.01v14.11c5.71-7 17.16-16.82 36.59-16.82 22.98 0 32.82 13.32 36.31 19.99 8.74-9.81 21.48-19.99 46.01-19.99z" />
                  </svg>
                </a>
                <a
                  href="https://www.edx.org/"
                  className="flex items-center lg:justify-center"
                >
                  <svg
                    className="h-10 hover:text-[#02262B]"
                    height="1405"
                    viewBox="0 0 552.88 310.72"
                    fill="currentColor"
                    width="2500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m353.43 50.96 10.65-50.96h-312.78l-51.3 245.01h261.52l-14.4 65.71h250.51l55.25-259.76z" />
                    <path
                      d="m106.6 213.73c-7.09 0-13.79-1.16-20.09-3.49-6.3-2.32-11.8-5.75-16.49-10.28s-8.39-10.1-11.11-16.72-4.08-14.22-4.08-22.81c0-11.74 1.63-22.44 4.9-32.09s7.82-17.92 13.65-24.82c5.83-6.89 12.82-12.23 20.98-16.01 8.15-3.78 17.08-5.67 26.77-5.67 6.54 0 12.74 1.14 18.62 3.43 5.87 2.29 11.01 5.61 15.42 9.99 4.41 4.37 7.92 9.75 10.52 16.13s3.9 13.71 3.9 21.98c0 1.26-.04 2.74-.12 4.43-.08 1.7-.2 3.43-.36 5.2s-.32 3.51-.47 5.2c-.16 1.69-.35 3.13-.59 4.31h-91.83c-.08 1.11-.14 2.17-.18 3.19-.04 1.03-.06 2.09-.06 3.19 0 6.54.95 12.11 2.84 16.72s4.35 8.37 7.39 11.29c3.03 2.92 6.44 5.02 10.22 6.32s7.6 1.95 11.46 1.95c8.43 0 15.21-1.46 20.33-4.37s9.02-6.85 11.7-11.82h21.63c-1.34 4.89-3.55 9.46-6.62 13.71s-6.95 7.94-11.64 11.05-10.13 5.56-16.31 7.33-12.98 2.66-20.38 2.66zm41.48-77.65c.08-.39.14-1.12.18-2.19.04-1.06.06-2.11.06-3.13 0-4.18-.61-8.14-1.83-11.88s-3.05-7.03-5.5-9.87c-2.44-2.84-5.48-5.08-9.1-6.74-3.63-1.65-7.84-2.48-12.65-2.48-4.89 0-9.46.87-13.71 2.6-4.26 1.73-8.12 4.2-11.58 7.39-3.47 3.19-6.46 7.01-8.98 11.46s-4.53 9.4-6.03 14.83h69.14zm79.5 77.65c-6.38 0-12.37-1.2-17.97-3.61-5.6-2.4-10.5-5.85-14.71-10.34-4.22-4.49-7.55-9.93-9.99-16.31s-3.66-13.51-3.66-21.39c0-7.64.77-14.95 2.3-21.92s3.72-13.43 6.56-19.38 6.24-11.33 10.22-16.13c3.98-4.81 8.39-8.9 13.24-12.29s10.08-5.99 15.72-7.8c5.63-1.81 11.52-2.72 17.67-2.72 4.57 0 8.92.63 13.06 1.89s7.88 3.01 11.23 5.26 6.22 4.96 8.63 8.15c2.4 3.19 4.16 6.68 5.26 10.46h1.89l15.72-74.11h20.68l-37.82 178h-19.62l3.66-17.37h-1.89c-4.65 6.07-10.48 10.85-17.49 14.36-7.01 3.49-14.58 5.25-22.69 5.25zm6.5-18.32c6.62 0 12.74-1.55 18.38-4.67 5.63-3.11 10.54-7.37 14.71-12.76 4.18-5.4 7.45-11.74 9.81-19.03s3.55-15.15 3.55-23.58c0-5.44-.75-10.32-2.25-14.66-1.5-4.33-3.63-8.02-6.38-11.05-2.76-3.03-6.11-5.38-10.05-7.03-3.94-1.66-8.39-2.48-13.36-2.48-6.54 0-12.61 1.46-18.2 4.37-5.6 2.92-10.44 6.97-14.54 12.17s-7.33 11.41-9.69 18.61-3.55 15.11-3.55 23.7c0 5.36.77 10.28 2.31 14.77s3.68 8.33 6.44 11.52 6.07 5.67 9.93 7.45 8.16 2.67 12.89 2.67zm274.86-110.96h-46.13l-50.32 62.3h-2.48l-26.61-62.3h-46.66l40 90.49-86.35 102.29h45.51l55.42-65.71h3.74l29.94 65.71h45.79l-44.28-97.76z"
                      fill="#fff"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.coursera.org/"
                  className="flex items-center lg:justify-center"
                >
                  <svg
                    className="h-12 hover:text-[#3457D5]"
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="144.9 152.34 1155.2 163.31"
                    fill="currentColor"
                  >
                    <path
                      className="cls-1"
                      d="M144.9,233.88c0-44.81,36.63-80.8,82.43-80.8a83,83,0,0,1,69.67,37L262.66,210a42.94,42.94,0,0,0-35.33-18.32c-23.55,0-42.85,19.63-42.85,42.2s19.3,42.2,42.85,42.2a42.46,42.46,0,0,0,36.31-20l34,20.28a82.94,82.94,0,0,1-70.33,38.28C181.53,314.68,144.9,278,144.9,233.88Z"
                    />
                    <g>
                      <path
                        className="cls-2"
                        d="M304.65,233.88c0-44.49,36.63-80.47,82.43-80.47,46.12,0,82.76,36,82.76,80.47,0,44.16-36.64,80.8-82.76,80.8C341.28,314.68,304.65,278,304.65,233.88Zm125.61,0c0-22.24-19.3-41.87-43.18-41.87-23.55,0-42.85,19.63-42.85,41.87,0,22.57,19.3,42.2,42.85,42.2C411,276.08,430.26,256.45,430.26,233.88Z"
                      />
                      <path
                        className="cls-2"
                        d="M1135.89,235.19c0-48.74,39.58-81.78,75.57-81.78,24.53,0,38.6,7.52,48.08,21.92l3.77-19h36.79V311.73h-36.79l-4.75-16c-10.79,11.78-24.21,19-47.1,19C1176.13,314.68,1135.89,283.6,1135.89,235.19Zm125.61-.33a43,43,0,0,0-86,.33c0,21.59,19.3,40.89,42.86,40.89C1242.21,276.08,1261.5,256.78,1261.5,234.86Z"
                      />
                      <path
                        className="cls-2"
                        d="M1090.68,174.34v-18h-40.23V311.73h40.23V228c0-25.19,12.44-38.27,34-38.27,1.43,0,2.79.1,4.12.23l7.46-37.51C1115.29,152.56,1100.09,159.75,1090.68,174.34Z"
                      />
                      <path
                        className="cls-2"
                        d="M686.41,174.35l0-18-40.23.09.34,155.37,40.23-.09L686.53,228c-.06-25.18,12.35-38.29,33.93-38.34a39.06,39.06,0,0,1,4.12.23L732,152.34C711,152.51,695.78,159.73,686.41,174.35Z"
                      />
                      <path
                        className="cls-2"
                        d="M483.78,251.54V156.35H524v90.29c0,19.95,11.12,31.73,30.42,31.73,21.59,0,34-13.09,34-38.28V156.35h40.24V311.73H588.45v-18c-9.48,14.72-24.86,21.92-46.12,21.92C506.35,315.66,483.78,289.49,483.78,251.54Z"
                      />
                      <path
                        className="cls-2"
                        d="M875.52,234.06c.09-43.51,31.23-80.74,80.62-80.65,45.8.09,78.11,36.78,78,80a80.06,80.06,0,0,1-1,12.76l-118.41-.22c4.54,18.65,19.89,32.09,43.12,32.14,14.06,0,29.12-5.18,38.3-16.94l27.44,22c-14.11,19.93-39,31.66-65.48,31.61C911.36,314.6,875.44,279.53,875.52,234.06Zm118.12-16.14c-2.26-15.7-18.59-27.84-37.89-27.87-18.65,0-33.71,11.06-39.63,27.73Z"
                      />
                      <path
                        className="cls-2"
                        d="M732.24,277.86,768,259.14c5.91,12.81,17.73,20.36,34.48,20.36,15.43,0,21.34-4.92,21.34-11.82,0-25-84.71-9.85-84.71-67,0-31.52,27.58-48.26,61.72-48.26,25.94,0,48.92,11.49,61.4,32.83L826.79,204c-5.25-10.51-15.1-16.42-27.58-16.42-12.14,0-18.06,4.27-18.06,11.49,0,24.3,84.71,8.87,84.71,67,0,30.21-24.62,48.59-64.35,48.59C767.69,314.63,744.05,303.47,732.24,277.86Z"
                      />
                      <path
                        className="cls-2"
                        d="M144.9,233.88c0-44.81,36.63-80.8,82.43-80.8a83,83,0,0,1,69.67,37L262.66,210a42.94,42.94,0,0,0-35.33-18.32c-23.55,0-42.85,19.63-42.85,42.2s19.3,42.2,42.85,42.2a42.46,42.46,0,0,0,36.31-20l34,20.28a82.94,82.94,0,0,1-70.33,38.28C181.53,314.68,144.9,278,144.9,233.88Z"
                      />
                    </g>
                  </svg>
                </a>
                <a
                  href="https://www.futurelearn.com/?utm_source=rakutenmarketing&utm_medium=affiliate&utm_campaign=fl_3343141:WA+Agency&utm_content=10:1&utm_term=USNetwork&ranMID=44015&ranEAID=VW0I2QEkbtc&ranSiteID=VW0I2QEkbtc-or6r3BFDfAQ_TppIU._Y7g"
                  className="flex items-center lg:justify-center"
                >
                  <svg
                    className="h-12 hover:text-[#1D1D1B]"
                    viewBox="0 0 475.9 167.3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <g className="a-steps-logo__text">
                      <path d="M213.2 28.2h27.2v11.2h-27.2v29.7h-11.8V0h41v11.2h-29.1v17zM267 70.3c-2.2 0-4.4-.4-6.5-1.2-2.1-.8-3.9-1.9-5.5-3.5-1.6-1.5-2.8-3.4-3.8-5.5-1-2.2-1.4-4.7-1.4-7.5V22.3h11.8v27.1c0 3.5.8 6 2.4 7.6 1.6 1.6 3.9 2.3 6.9 2.3 1.5 0 2.8-.3 4-.9 1.2-.6 2.1-1.3 2.9-2 .9-.8 1.7-1.7 2.4-2.9V22.3h11.9v46.8H281v-6.8c-1 1.5-2.1 2.9-3.5 4-1.1 1-2.6 1.9-4.3 2.7-1.8.9-3.8 1.3-6.2 1.3zM299.9 22.3h9.2V8.4H321v13.9h14V33h-14.1v18.9c0 1.5.2 2.6.5 3.6.3.9.8 1.7 1.4 2.3.6.6 1.2 1 2 1.2.7.2 1.5.3 2.3.3.7 0 1.3-.1 1.9-.2.6-.2 1.1-.3 1.6-.6l1.5-.9 4.3 9.7c-.9.6-1.9 1.1-3.1 1.6-1 .4-2.2.7-3.5 1-1.4.3-2.9.5-4.6.5-2.3 0-4.4-.4-6.4-1.2-1.9-.8-3.6-1.9-5-3.4-1.4-1.4-2.5-3.2-3.4-5.2-.8-2-1.2-4.3-1.2-6.8V33H300V22.3zM360.7 70.3c-2.2 0-4.4-.4-6.5-1.2-2.1-.8-3.9-1.9-5.5-3.5-1.6-1.5-2.8-3.4-3.8-5.5-1-2.2-1.4-4.7-1.4-7.5V22.3h11.9v27.1c0 3.5.8 6 2.4 7.6 1.6 1.6 3.9 2.3 6.9 2.3 1.5 0 2.8-.3 4-.9 1.2-.6 2.1-1.3 2.9-2 .9-.8 1.7-1.7 2.4-2.9V22.3h11.9v46.8h-11.1v-6.8c-1 1.5-2.1 2.9-3.5 4-1.1 1-2.6 1.9-4.3 2.7-1.9.9-3.9 1.3-6.3 1.3zM420.5 21.1c1.1 0 2.1.1 3.1.2 1 .2 1.8.4 2.6.5.9.3 1.7.5 2.5.7l-4.2 10.7c-.4-.1-.9-.3-1.5-.5-.5-.1-1.1-.3-1.8-.4-.7-.1-1.5-.2-2.3-.2-1.8 0-3.4.3-4.7 1-1.3.7-2.4 1.4-3.2 2.2-1 .9-1.8 2-2.6 3.2v30.6h-11.8V22.3h11.3v6.8c.9-1.4 1.9-2.8 3.1-4 1.1-1 2.4-1.9 4-2.8 1.5-.7 3.4-1.2 5.5-1.2zM452.3 21.1c3.2 0 6.3.6 9.1 1.8 2.9 1.2 5.4 2.9 7.5 5 2.1 2.1 3.8 4.7 5.1 7.7 1.2 3 1.9 6.3 1.9 9.9v1.9c0 .8 0 1.6-.1 2.6h-34.9c.2 1.1.6 2.1 1.4 3.3.7 1.1 1.6 2.1 2.8 3.1 1.1.9 2.4 1.7 3.9 2.3 1.5.6 3.2.9 5 .9 2 0 3.8-.2 5.4-.7 1.6-.5 2.9-1 4-1.6 1.3-.7 2.4-1.5 3.4-2.4l5.9 8.9c-1.5 1.2-3.2 2.4-5.1 3.4-1.6.9-3.6 1.6-5.9 2.3-2.3.7-4.9 1-7.7 1-3.6 0-6.9-.6-9.9-1.9-3.1-1.3-5.7-3-8-5.2s-4-4.8-5.3-7.8c-1.3-3-1.9-6.2-1.9-9.6 0-3.4.6-6.6 1.8-9.6 1.2-3 2.8-5.6 4.9-7.8 2.1-2.2 4.6-4 7.5-5.2 2.8-1.6 5.9-2.3 9.2-2.3zm11.8 20.3c-.1-1-.3-2-.8-3.2-.5-1.1-1.2-2.2-2.2-3.1-.9-.9-2.2-1.7-3.6-2.3-1.5-.6-3.2-.9-5.1-.9-1.9 0-3.6.3-4.9.9-1.4.6-2.6 1.4-3.5 2.3-.9.9-1.7 2-2.2 3.1-.5 1.1-.8 2.2-.8 3.3h23.1zM201.4 93.4h11.8V155h29.4v11.2h-41.3V93.4zM269.7 118.2c3.2 0 6.3.6 9.1 1.8 2.9 1.2 5.4 2.8 7.5 5 2.1 2.1 3.8 4.7 5.1 7.7 1.2 3 1.9 6.3 1.9 9.9v1.9c0 .8 0 1.6-.1 2.6h-34.9c.2 1.1.7 2.1 1.4 3.3.7 1.1 1.6 2.1 2.8 3.1 1.1.9 2.4 1.7 3.9 2.3 1.5.6 3.2.9 5 .9 2 0 3.8-.2 5.4-.7 1.6-.5 2.9-1 4-1.6 1.2-.7 2.4-1.5 3.4-2.4l5.9 8.9c-1.5 1.2-3.2 2.4-5.1 3.4-1.6.9-3.6 1.6-5.9 2.3-2.3.7-4.9 1-7.7 1-3.6 0-6.9-.6-9.9-1.9-3.1-1.3-5.7-3-8-5.2s-4-4.8-5.3-7.8c-1.3-3-1.9-6.2-1.9-9.6 0-3.4.6-6.6 1.8-9.6 1.2-3 2.8-5.6 4.9-7.8 2.1-2.2 4.6-4 7.5-5.2 2.7-1.7 5.8-2.3 9.2-2.3zm11.7 20.2c-.1-1-.3-2-.8-3.2-.5-1.1-1.2-2.2-2.2-3.1-1-1-2.2-1.7-3.6-2.3-1.5-.6-3.2-.9-5.1-.9-1.9 0-3.5.3-4.9.9-1.4.6-2.6 1.3-3.5 2.3-.9.9-1.7 1.9-2.2 3.1-.5 1.1-.8 2.2-.8 3.3h23.1zM347.5 119.3v46.8h-11V160c-.9 1.4-1.9 2.6-3.3 3.7-1.1.9-2.6 1.8-4.4 2.5-1.8.8-4 1.1-6.5 1.1-3 0-5.9-.6-8.7-1.8-2.8-1.2-5.2-2.9-7.3-5.1-2.1-2.2-3.7-4.8-5-7.7-1.2-3-1.9-6.3-1.9-9.9 0-3.6.6-6.9 1.9-9.9 1.2-3 2.9-5.6 5-7.7 2.1-2.2 4.5-3.9 7.3-5.1 2.8-1.2 5.7-1.8 8.7-1.8 2.4 0 4.6.4 6.4 1.1 1.8.8 3.3 1.6 4.4 2.5 1.3 1.1 2.4 2.3 3.4 3.7v-6.1h11zm-11.9 16.4c-.7-1.2-1.6-2.3-2.7-3.3-.9-.8-2.1-1.5-3.4-2.2-1.4-.7-3-1-4.9-1-2 0-3.8.4-5.4 1-1.6.7-3 1.6-4.1 2.9-1.1 1.2-2 2.6-2.6 4.3-.6 1.6-.9 3.4-.9 5.3s.3 3.7.9 5.3c.6 1.6 1.4 3.1 2.6 4.3 1.1 1.2 2.5 2.2 4.1 2.9 1.6.7 3.4 1 5.4 1 1.9 0 3.6-.3 4.9-1 1.4-.7 2.5-1.4 3.4-2.3 1.1-.9 1.9-2 2.7-3.3v-13.9zM381.8 118.2c1 0 2.1.1 3.1.2 1 .2 1.8.3 2.6.5.9.3 1.7.5 2.5.7l-4.1 10.7c-.4-.1-.9-.3-1.5-.5-.5-.1-1.1-.3-1.8-.4-.7-.1-1.5-.2-2.3-.2-1.8 0-3.4.3-4.7 1-1.3.7-2.4 1.4-3.2 2.2-1 .9-1.8 2-2.6 3.2v30.6H358v-46.8h11.2v6.8c.8-1.4 1.9-2.8 3.1-3.9 1-1 2.4-1.9 4-2.8 1.5-.9 3.3-1.3 5.5-1.3zM421 118.2c2.2 0 4.4.4 6.5 1.2 2.1.8 3.9 1.9 5.5 3.5 1.6 1.5 2.8 3.4 3.8 5.5.9 2.2 1.4 4.7 1.4 7.5v30.3h-11.9v-27.3c0-3.4-.9-5.8-2.7-7.3-1.8-1.5-4-2.3-6.6-2.3-1.5 0-2.8.3-4 1-1.2.7-2.1 1.4-2.9 2.1-.9.9-1.7 1.8-2.4 3v30.9H396v-46.8h11v6.8c.9-1.4 1.9-2.8 3.3-3.9 1.1-1 2.6-1.9 4.3-2.8 1.8-1 3.9-1.4 6.4-1.4z" />
                    </g>
                    <path
                      fill="#DE00A5"
                      d="M161.1 0v55.2h-52.7v48.6H55.2v48.4H0v14h69.1v-48.5h53.3V69.1h52.7V0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50">
        <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          <div className="col-span-2 mb-8">
            <p className="text-lg font-medium text-blue-600 ">
              Trusted in Our Country
            </p>
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl ">
              Trusted by over 6000 users and 100 Organization in Cambodia
            </h2>
            <p className="font-light text-gray-500 sm:text-xl ">
              Our rigorous security and compliance standards are at the heart of
              all we do. We work tirelessly to protect both users.
            </p>
            <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 ">
              <div>
                <Link
                  to={"/inspiration"}
                  className="inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-800 "
                >
                  Inspiration of People who use WeGrow
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            <div>
              <svg
                className="w-10 h-10 mb-2 text-blue-600 md:w-12 md:h-12 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold ">79% uptime</h3>
              <p className="font-light text-gray-500 ">
                For WeGrow, with zero maintenance downtime
              </p>
            </div>
            <div>
              <svg
                className="w-10 h-10 mb-2 text-blue-600 md:w-12 md:h-12 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold ">600+ Users</h3>
              <p className="font-light text-gray-500 ">
                Trusted by over 6000 users in Cambodia
              </p>
            </div>
            <div>
              <svg
                className="w-10 h-10 mb-2 text-blue-600 md:w-12 md:h-12 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold ">100+ Organizations</h3>
              <p className="font-light text-gray-500 ">
                Have used WeGrow to find volunteer who has potential
              </p>
            </div>
            <div>
              <svg
                className="w-10 h-10 mb-2 text-blue-600 md:w-12 md:h-12 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold ">20+</h3>
              <p className="font-light text-gray-500 ">
                Transactions of Recruiment Post per day
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg ">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">
                Train Your Hard Skills
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                by website that we provide above. They can help you everything
                you want to learn and then there are a lot of resource that
                quality and realiable.
              </p>
              <ul
                role="list"
                className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-blue-600 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 ">
                    Meet volunteer requirements
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-blue-600 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 ">
                    Career advancement
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-blue-600 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 ">
                    Higher earning potential
                  </span>
                </li>
              </ul>
              <p className="mb-8 font-light lg:text-xl">
                Hard skills are the specific technical or mechanical abilities
                required for a particular job, such as programming, accounting,
                or welding.That's why we need to train our hard skills like the
                keyword i give you above.
              </p>
            </div>
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src="src/assets/image/hardskill.jpg"
              alt="dashboard feature image"
            />
          </div>
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src="src/assets/image/softskill.jpg"
              alt="dashboard feature image"
            />
            <div className="text-gray-500 sm:text-lg ">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">
                Train Your Soft Skills
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                There are a wide variety of online courses available, so you can
                find ones that are specific to your needs and interests. For
                example, you can find online courses via link i give above to
                learn more on communication, teamwork, problem-solving,
                leadership, and time management.
              </p>
              <ul
                role="list"
                className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-blue-600 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 ">
                    Improve communication
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-blue-600 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 ">
                    Strengthen teamwork
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-blue-600 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 ">
                    Enhance problem-solving
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-blue-600 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 ">
                    Time management
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-blue-600 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 ">
                    Project Management
                  </span>
                </li>
              </ul>
              <p className="font-light lg:text-xl">
                Soft skills are intangible and subjective: They are difficult to
                define and measure. For example, a person's ability to
                communicate effectively or teamwork skills are subjective and
                may be assessed differently by different people. Like the
                keyword i give you above it's for softskill that you need to
                train yourself to be better and become a leader.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
          <div className="max-w-screen-sm mx-auto text-center">
            <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 ">
              Start your free trial today
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg">
              Try WeGrow Platform for 30 days. No credit card required. To post
              video training of both skills{" "}
            </p>
            <Subscription />
          </div>
        </div>
      </section>

      <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
    </>
  );
}

export default Training;
