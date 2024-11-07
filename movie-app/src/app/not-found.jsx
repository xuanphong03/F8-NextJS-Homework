import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="fixed inset-0 z-50">
      <div className="bg-indigo-900 relative overflow-hidden h-screen">
        <Image
          src="/images/notFound.webp"
          alt="background"
          width={1980}
          height={1024}
          className="w-full h-full absolute inset-0 object-cover"
        />
        <div className="inset-0 bg-black opacity-25 absolute"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
          <div className="w-full font-mono flex flex-col items-center relative z-10">
            <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
              You are all alone here
            </h1>
            <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
              404
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
