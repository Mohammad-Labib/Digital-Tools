import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import BannerImg from "../../assets/banner.png";
import { CgRadioChecked } from 'react-icons/cg';

const HeroBanner = () => {
    return (
       <>
         <section className="container mx-auto mt-[85px] ">
      <div className="flex justify-between items-center  gap-5">


        <div className="flex-1 space-y-4 text-center text-left">
          
          <button>
            <p className="text-[20px] text-primary bg-[#E1E7FF] shadow p-2 py-2 px-2 rounded-full font-semibold flex justify-center items-center  gap-2">
            <CgRadioChecked className='text-green-500' />
             New: AI-Powered Tools Available
          </p>
          </button>

          <h1 className="text-5xl  font-bold  ">
            Supercharge Your<br/>Digital Workflow
         
          </h1>

          <p className="text-left text-[#627382] ">
            Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster <br /> today.
          </p>

          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            
            <button className="btn rounded-full px-6 text-white border-none bg-gradient-to-r from-blue-700 to-purple-600 ">
              Get Started
            </button>

            <button className="btn btn-outline rounded-full px-6 text-lg flex items-center gap-2">
              <CiPlay1 /> Watch Demo
            </button>

          </div>
        </div>

       
        <div className="flex-1 flex justify-center mb-10">
          <img
            src={BannerImg}
            alt="Banner"
            className="max-w-full w-[400px] lg:w-[500px] drop-shadow-xl"
          />
        </div>

      </div>
    </section>

    <section className=''>
        <div className="flex justify-center items-center gap-50  bg-gradient-to-r from-indigo-500 to-purple-600 ">
            <div className='p-5'>
                <h1 className='text-3xl font-bold text-white'>50K+</h1>
                <p className='text-[#bbc9d4]'>Active Users</p>
            </div>

            <div>
                <h1  className='text-3xl font-bold text-white'>200+</h1>
                <p className='text-[#bbc9d4]'>Premium Tools</p>
            </div>

            <div>
                <h1  className='text-3xl font-bold text-white'>4.9</h1>
                <p className='text-[#bbc9d4]'>Rating</p>
            </div>
        </div>
    </section>
       
       </>
    );
};

export default HeroBanner;