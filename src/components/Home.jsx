/* eslint-disable no-unused-vars */
import React from 'react'
import img from "../assets/side right.png";
import google_icon from "../assets/google-icon-1.svg";
import apple_icon from "../assets/apple 1.svg";
import social from "../assets/img1.svg";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <main className="flex  md:flex-row flex-col bg-[#161616]">
      <div className="md:w-[50%] hidden  md:flex justify-end ">
        <img
          src={img}
          alt="sign_in page"
          className="border-[30px] border-[#161616]"
        />
      </div>

      <div className="md:w-[50%] mt-[24px] md:mt-0 text-white bg-[#1a1a17] flex justify-center items-center">
        <div className="md:w-[60%] w-[80%]">
          <h1 className="font-[600]  text-[30px] md:text-[36px]">Sign In</h1>
          <p className="font-[600]">Sign in to your account</p>
          <div className="flex justify-between font-[600] md:text-sm my-5 text-[#858585] text-[12px] md:text-[14px]">
            <Link to={"/upload"} >
              <div className="bg-black flex justify-center items-center  gap-3 p-2 md:px-6 md:py-1.5 rounded-lg cursor-pointer">
                <img src={google_icon} alt="google icon" className="" />
                <p>Sign in with google</p>
              </div>
            </Link>

            <div className="bg-black flex justify-center items-center gap-3 p-2 md:px-6 md:py-1.5 rounded-lg cursor-pointer">
              <img src={apple_icon} alt="google icon" className="" />
              <p>Sign in with apple</p>
            </div>
          </div>

          <div className="p-10 bg-black flex flex-col gap-3 font-[600] text-[14px] md:text-[16px] my-3 rounded-2xl ">
            <div className="flex flex-col gap-2">
              <label htmlFor="">Email Address</label>
              <input type="text" className="bg-[#161616] p-2 rounded-lg" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="">Password</label>
              <input type="password" className="bg-[#161616] p-2 rounded-lg" />
            </div>

            <p className="text-[#4979D9]">Forgot password ?</p>
            <button className="w-full bg-[#4979D9] text-black md:text-lg p-2 rounded-lg font-[700]">
              {" "}
              Sign In
            </button>
          </div>

          <p className="text-center text-[#858585]">
            dont have an account?{" "}
            <span className="text-[#4979d9] cursor-pointer">register here</span>
          </p>
          <div className="mt-20 md:mt-28 flex justify-center pb-10">
            <img src={social} alt="social media handles" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home