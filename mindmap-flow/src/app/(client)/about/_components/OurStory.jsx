import Image from "next/image";
import React from "react";

export default function OurStory() {
  return (
    <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
      <div className="w-full lg:w-5/12 flex flex-col justify-center">
        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
          Our Story
        </h1>
        <p className="font-normal text-base leading-6 text-gray-600">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum.In the first place we have granted to God, and by
          this our present charter confirmed for us and our heirs forever that
          the English Church shall be free, and shall have her rights entire,
          and her liberties inviolate; and we will that it be thus observed;
          which is apparent from
        </p>
      </div>
      <div className="w-full lg:w-8/12 lg:pt-8">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
          <div className="p-4 pb-6 flex justify-center flex-col items-center">
            <Image
              alt="Xuan Phong"
              src="/images/member01.png"
              width={160}
              height={184}
            />
            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
              Xuan Phong
            </p>
          </div>
          <div className="p-4 pb-6 flex justify-center flex-col items-center">
            <Image
              alt="Xuan Phong"
              src="/images/member01.png"
              width={160}
              height={184}
            />
            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
              Xuan Phong
            </p>
          </div>
          <div className="p-4 pb-6 flex justify-center flex-col items-center">
            <Image
              alt="Xuan Phong"
              src="/images/member01.png"
              width={160}
              height={184}
            />
            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
              Xuan Phong
            </p>
          </div>
          <div className="p-4 pb-6 flex justify-center flex-col items-center">
            <Image
              alt="Xuan Phong"
              src="/images/member01.png"
              width={160}
              height={184}
            />
            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
              Xuan Phong
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
