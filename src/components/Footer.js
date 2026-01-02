import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
            {/* 1st block */}
            <div className="col-span-12 lg:col-span-4">
              <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                <h3 className="font-bold text-4xl mb-4">IC</h3>
                <div className="text-md font-medium text-gray-600">
                  <h5>Inflection Consulting</h5>
                  <p>Gurgaon,Haryana</p>
                  <p>India.</p>
                </div>
              </div>
            </div>

            {/* 2nd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
              <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
              <ul className="text-md">
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    About
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#services"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Services
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#team"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Team
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="/contact#contact"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* 3rd block (non-clickable) */}
            <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
              <h6 className="text-[#013289] text-xl font-bold mb-4">
                OUR SERVICES
              </h6>
              <ul className="text-md">
                <li className="mb-2 text-[#013289]">Web Development</li>
                <li className="mb-2 text-[#013289]">Mobile App Development</li>
                <li className="mb-2 text-[#013289]">AI and Automation</li>
                <li className="mb-2 text-[#013289]">Domain and Hosting</li>
                <li className="mb-2 text-[#013289]">Digital Marketing</li>
                <li className="mb-2 text-[#013289]">Cloud Solutions</li>
                <li className="mb-2 text-[#013289]">Branding & Logo</li>
                <li className="mb-2 text-[#013289]">
                  General IT Consultations
                </li>
              </ul>
            </div>

            {/* 4th block */}
            <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
              <div className="text-xl mb-6">Social Media Links.</div>

              <div className="text-md font-medium mb-6">
                Follow us on social media.
              </div>
              <div className="mx-auto text-center mt-2">
                <ul className="flex justify-center mb-4 md:mb-0">
                  <li>
                    <a
                      href="https://twitter.com/your_handle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white rounded-full shadow transition duration-150 ease-in-out p-2"
                      aria-label="Twitter"
                    >
                      <svg
                        className="w-6 h-6 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.14 12.14 0 0 1 3.15 4.6a4.28 4.28 0 0 0 1.32 5.72 4.25 4.25 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.59 8.59 0 0 1 2 19.54a12.12 12.12 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.7 8.7 0 0 0 24 5.1a8.5 8.5 0 0 1-2.54.7z" />
                      </svg>
                    </a>
                  </li>

                  <li className="ml-4">
                    <a
                      href="https://www.instagram.com/inflection.consulting/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center text-pink-600 hover:text-pink-800 bg-white rounded-full shadow transition duration-150 ease-in-out p-2"
                      aria-label="Instagram"
                    >
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM18.5 6.5a.9.9 0 1 1-.9-.9.9.9 0 0 1 .9.9z" />
                      </svg>
                    </a>
                  </li>

                  <li className="ml-4">
                    <a
                      href="https://linkedin.com/in/e"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center text-blue-700 hover:text-blue-900 bg-white rounded-full shadow transition duration-150 ease-in-out p-2"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="w-6 h-6 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5zM0 8h4v12H0zM7 8h4v2.1c.6-1 2.1-2 4.3-2 4.6 0 5.2 3 5.2 6.9V20h-4v-5.3c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V20H7z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
              <div className="text-sm text-gray-200 font-semibold py-1">
                Copyright &copy; {new Date().getFullYear()}
                {"  "}
                <HashLink to="#" className=" hover:text-gray-900">
                  Inflection Consulting
                </HashLink>
                . All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
