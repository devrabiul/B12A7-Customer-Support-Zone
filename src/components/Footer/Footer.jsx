import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="bg-neutral">
      <div className="container mx-auto px-[1rem]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[32px] text-white py-[80px]">
          <div>
            <h6 className="text-white text-[24px] font-bold mb-[16px]">CS — Ticket System</h6>
            <p className="text-[#A1A1AA] text-[14px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <nav className="flex flex-col gap-[10px] text-[#A1A1AA] text-[16px]">
              <h6  className="text-white text-[20px] mb-[10px] font-medium">Company</h6>
              <a className="link link-hover">About Us</a>
              <a className="link link-hover">Our Mission</a>
              <a className="link link-hover">Contact Saled</a>
            </nav>
          </div>
          <div>
            <nav className="flex flex-col gap-[10px] text-[#A1A1AA] text-[16px]">
              <h6 className="text-white text-[20px] mb-[10px] font-medium">Services</h6>
              <a className="link link-hover">Products & Services</a>
              <a className="link link-hover">Customer Stories</a>
              <a className="link link-hover">Download Apps</a>
            </nav>
          </div>
          <div>
            <nav className="flex flex-col gap-[10px] text-[#A1A1AA] text-[16px]">
              <h6 className="text-white text-[20px] mb-[10px] font-medium">Information</h6>
              <a className="link link-hover">Privacy Policy</a>
              <a className="link link-hover">Terms & Conditions</a>
              <a className="link link-hover">Join Us</a>
            </nav>
          </div>
          <div>
            <nav className="flex flex-col gap-[10px] text-[#A1A1AA] text-[16px]">
              <h6 className="text-white text-[20px] mb-[10px] font-medium">Social Links</h6>
              <a className="social-icons-link">
                <span className="social-icons"><FaXTwitter /></span>
                @CS — Ticket System</a>
              <a className="social-icons-link">
                <span className="social-icons"><FaLinkedinIn /></span>
                @CS — Ticket System</a>
              <a className="social-icons-link">
                <span className="social-icons"><FaFacebookF /></span>
                @CS — Ticket System</a>
              <a className="social-icons-link">
                <span className="social-icons"><FaEnvelope /></span>
                support@cst.com</a>
            </nav>
          </div>
        </div>
        <div className="border-t-1 border-t-[#fafafa56] py-3">
            <p className="text-white text-center">© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
