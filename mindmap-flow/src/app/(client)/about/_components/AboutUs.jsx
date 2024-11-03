import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8">
      <div className="w-full lg:w-5/12 flex flex-col justify-center">
        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
          About Us
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
      <div className="w-full lg:w-8/12">
        <Image
          src="/images/aboutus.png"
          alt="A group of People"
          className="w-full h-full"
          width={800}
          height={450}
          priority
        />
      </div>
    </div>
  );
}
