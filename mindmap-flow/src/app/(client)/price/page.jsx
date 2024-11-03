import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

export const metadata = {
  title: "Bảng giá - Mindmap Flow",
};

export default function PricePage() {
  return (
    <div className="max-w-6xl mx-auto pt-10 pb-36 px-8">
      <div className="max-w-md mx-auto mb-14 text-center">
        <h1 className="text-4xl font-semibold mb-6 lg:text-5xl">
          <span className="text-indigo-600">Flexible</span> Plans
        </h1>
        <p className="text-xl text-gray-500 font-medium">
          Choose a plan that works best for you and your team.
        </p>
      </div>
      <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
        <div className="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <Image
              alt="abstract01"
              src="/images/abstract01.jpg"
              className="rounded-3xl w-20 h-20"
              width={80}
              height={80}
            />
            <div className="ml-5">
              <h3 className="block text-2xl font-semibold">Basic</h3>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  $&thinsp;
                </span>
                <span className="text-3xl font-bold">10 </span>
              </span>
              <span className="text-gray-500 font-medium">/ user</span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2 items-center">
              <FaCheck />{" "}
              <span className="ml-3">
                Get started with <span className="text-black">messaging</span>
              </span>
            </li>
            <li className="flex text-lg mb-2 items-center">
              <FaCheck />{" "}
              <span className="ml-3">
                Flexible <span className="text-black">team meetings</span>
              </span>
            </li>
            <li className="flex text-lg mb-2 items-center">
              <FaCheck />{" "}
              <span className="ml-3">
                5 TB <span className="text-black">cloud storage</span>
              </span>
            </li>
          </ul>
          <Link
            href="#"
            className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
          >
            Choose Plan
          </Link>
        </div>
        <div className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
          <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
            <Image
              alt="template"
              src="/images/abstract01.jpg"
              width={80}
              height={80}
              className="rounded-3xl w-20 h-20"
            />
            <div className="ml-5">
              <span className="block text-3xl font-semibold text-white">
                Startup
              </span>
              <span>
                <span className="font-medium text-xl align-top">$&thinsp;</span>
                <span className="text-3xl font-bold text-white">24 </span>
              </span>
              <span className="font-medium">/ user</span>
            </div>
          </div>
          <ul className="mb-10 font-medium text-xl items-center">
            <li className="flex mb-6">
              <FaCheck />{" "}
              <span className="ml-3">
                All features in <span className="text-white">Basic</span>
              </span>
            </li>
            <li className="flex mb-6">
              <FaCheck />{" "}
              <span className="ml-3">
                Flexible <span className="text-white">call scheduling</span>
              </span>
            </li>
            <li className="flex">
              <FaCheck />{" "}
              <span className="ml-3">
                15 TB <span className="text-white">cloud storage</span>
              </span>
            </li>
          </ul>
          <Link
            href="#"
            className="flex justify-center items-center bg-indigo-600 rounded-xl py-6 px-4 text-center text-white text-2xl"
          >
            Choose Plan
          </Link>
        </div>
        <div className="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <Image
              alt="abstract01"
              src="/images/abstract01.jpg"
              className="rounded-3xl w-20 h-20"
              width={80}
              height={80}
            />
            <div className="ml-5">
              <h3 className="block text-2xl font-semibold">Basic</h3>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  $&thinsp;
                </span>
                <span className="text-3xl font-bold">10 </span>
              </span>
              <span className="text-gray-500 font-medium">/ user</span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2 items-center">
              <FaCheck />{" "}
              <span className="ml-3">
                Get started with <span className="text-black">messaging</span>
              </span>
            </li>
            <li className="flex text-lg mb-2 items-center">
              <FaCheck />{" "}
              <span className="ml-3">
                Flexible <span className="text-black">team meetings</span>
              </span>
            </li>
            <li className="flex text-lg mb-2 items-center">
              <FaCheck />{" "}
              <span className="ml-3">
                5 TB <span className="text-black">cloud storage</span>
              </span>
            </li>
          </ul>
          <Link
            href="#"
            className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
          >
            Choose Plan
          </Link>
        </div>
      </div>
    </div>
  );
}
