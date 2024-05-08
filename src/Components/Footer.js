import React from "react";
import qrcode from '../Media/qrcode.png'
import applestore from '../Media/appstore.png'
import googlestore from '../Media/playstore.png'
import facebook from '../Media/f.png'
import twitter from '../Media/twitter.png'
import linkedin from '../Media/linkedin.png'
import insta from '../Media/insta.png'

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white mt-5 ">
        <div className="container mx-auto py-8">
          <div className="flex md:flex-row flex-col  justify-center gap-6  ">
            <div className="exclusive flex flex-col gap-2  md:basis-1/5">
              <h2 className="text-xl font-semibold">Exclusive</h2>
              <p className="font-semibold">Subscribe</p>
              <p>Get 10% off your first order</p>
              <div className="flex justify-between items-center px-2 border ">
                <input
                  type="email"
                  className="border-0 bg-transparent outline-none focus:ring-transparent"
                  name=""
                  id=""
                  placeholder="Enter your email"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </div>
            </div>
            <div className="support flex flex-col gap-2  md:basis-1/5">
              <h4 className="font-semibold text-xl">Support</h4>
              <ul className="flex flex-col gap-1">
                <li>
                  <a href="#">
                    111 Bijay sarani,Dhaka,
                    <br />
                    DH1515,Bangladesh
                  </a>
                </li>
                <li>
                  <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
                </li>
                <li>
                  <a href="tel:+88015-88888-9999">+88015-88888-9999</a>
                </li>
              </ul>
            </div>
            <div className="support flex flex-col gap-2  md:basis-1/5">
              <h4 className="font-semibold text-xl">Account</h4>
              <ul className="flex flex-col gap-1">
                <li>
                  <a href="#">My account</a>
                </li>
                <li>
                  <a href="#">Login/Register</a>
                </li>
                <li>
                  <a href="#">Cart</a>
                </li>
                <li>
                  <a href="#">Wishlist</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
              </ul>
            </div>
            <div className="support flex flex-col gap-2  md:basis-1/5">
              <h4 className="font-semibold text-xl">Quick Link</h4>
              <ul className="flex flex-col gap-1">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Term of Use</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="support flex flex-col gap-2  md:basis-1/5">
              <h4 className="font-semibold text-xl">Download App</h4>
              <p>Save $3 with App Now user Only</p>
              <div className="qrcode">
                <div className="grid grid-cols-2 gap-2">
                  <div className="first w-full ">
                    <img src={qrcode} width={'90%'} alt="" />
                  </div>
                  <div className="second flex flex-col gap-2">
                    <img src={googlestore} alt="" />
                    <img src={applestore} alt="" />
                  </div>
                </div>
              </div>
              <div className="social-links flex gap-3 justify-around py-3">
                  <img src={facebook} alt="" />
                  <img src={twitter} alt="" />
                  <img src={insta} alt="" />
                  <img src={linkedin} alt="" />
              </div>
            </div>
          </div>
          
        </div>
        <div className="border-b"></div>
        <p className="text-center p-5">@Copyright Rimel 2022 All right reserved</p>
      </footer>
    </>
  );
};

export default Footer;
