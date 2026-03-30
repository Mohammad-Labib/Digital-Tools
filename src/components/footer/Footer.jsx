import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const footer = () => {
    return (
   <>
       <footer className="footer bg-neutral text-white flex justify-center gap-40 p-10 mt-10">
  <div className='space-y-4'>
    <h1 className="text-3xl font-bold">Digi Tools</h1>
    <p className='text-md'>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
  </div>
  <div>
    <h6 className="footer-title ">Product</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integrations</a>
  </div>
  <div>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press</a>
  </div>
  <div>
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a>
  </div>
  <div >
    <h6 className="footer-title">Social Links</h6>
    <div className='flex gap-4 text-3xl'>
        <a className="link link-hover"><FaFacebook /></a>
        <a className="link link-hover"><AiFillInstagram /></a>
        <a className="link link-hover"><FaXTwitter /></a>
    </div>
  </div>

</footer>
<hr className="border border-gray-500  w-full" />

<div className=" py-4 bg-neutral  text-white flex justify-between p-10">
  
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>

  <div className='flex gap-4 '>          
    <h1 className='link link-hover'> Privacy Policy</h1>
    <h1 className='link link-hover'> Terms of Service</h1>
    <h1 className='link link-hover'> Cookies</h1>
  </div>
</div>
   
   </>

    );
};

export default footer;