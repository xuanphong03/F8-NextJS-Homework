import Link from "next/link";
import { FaFacebook, FaTwitter, FaGooglePlusG } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="footer-1 bg-gray-100 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6">Features</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Cool stuff
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Random feature
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Team feature
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Stuff for developers
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Another one
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Last time
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6">Resources</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Resource
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Resource name
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Another resource
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Final resource
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6">About</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Team
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Locations
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Privacy
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6">Help</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Support
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Help Center
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
              Stay connected
            </h5>
            <div className="flex sm:justify-center xl:justify-start">
              <Link
                href="#"
                className="w-8 h-8 border flex items-center justify-center border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
              >
                <FaFacebook />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 border flex items-center justify-center border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
              >
                <FaTwitter />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 border flex items-center justify-center border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
              >
                <FaGooglePlusG />
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
          <div className="sm:w-full px-4 md:w-1/6">
            <strong>FWR</strong>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2">Address</h6>
            <address className="not-italic mb-4 text-sm">
              123 6th St. <br></br>Melbourne, FL 32904
            </address>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2">Free Resources</h6>
            <p className="mb-4 text-sm">
              Use our HTML blocks for <strong>FREE</strong>
            </p>{" "}
            <br></br> <em>All are MIT License</em>
          </div>
          <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
            <button className="px-4 py-2 bg-purple-800 hover:bg-purple-900 rounded text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
