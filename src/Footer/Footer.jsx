import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <section>
      <div>
        <footer className="footer sm:footer-horizontal bg-green-600 text-white p-10">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a href='https://www.ugaoo.com/pages/dr-green?srsltid=AfmBOop3ZZeGnstTc7-Pl3vDMUcDGSmPoaFCHSuWdkvS0I0KA_uJ0Us6' className="link link-hover font-semibold shadow-6xl">Indoor Plant Consultation</a>
            <a href='https://www.ugaoo.com/pages/dr-green?srsltid=AfmBOop3ZZeGnstTc7-Pl3vDMUcDGSmPoaFCHSuWdkvS0I0KA_uJ0Us6' className="link link-hover font-semibold">Plant Health Check & Care Plans</a>
            <a href='https://www.ugaoo.com/pages/dr-green?srsltid=AfmBOop3ZZeGnstTc7-Pl3vDMUcDGSmPoaFCHSuWdkvS0I0KA_uJ0Us6' className="link link-hover font-semibold">Home & Office Green Setup</a>
            <a href='https://www.ugaoo.com/pages/dr-green?srsltid=AfmBOop3ZZeGnstTc7-Pl3vDMUcDGSmPoaFCHSuWdkvS0I0KA_uJ0Us6' className="link link-hover font-semibold">Workshops & Online Training</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <Link className="link link-hover font-semibold">About us</Link>
            <Link className="link link-hover font-semibold">Contact</Link>
            <Link className="link link-hover font-semibold">Private Policy</Link>
            
          </nav>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <a
                href="https://www.pinterest.com"
                target="_blank"
                className=" hover:text-gray-200 transition"
              >
                <FaPinterest size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                className=" hover:text-gray-200 transition"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                className=" hover:text-gray-200 transition"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </nav>
        </footer>
      </div>
      <div>
        <footer className="footer bg-green-900 sm:footer-horizontal footer-center text-white p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} -GreenNest. All rights reserved.
            </p>
          </aside>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
