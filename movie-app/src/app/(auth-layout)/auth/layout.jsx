import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <div className="fixed inset-0">
      <div className="absolute inset-0 bg-black">
        <Image
          alt="background layout"
          src="/images/backgroundAuthLayout.jpg"
          className="w-full h-full object-cover"
          width={1980}
          height={1024}
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0">
        <header className="container mx-auto py-5">
          <Link
            href="/"
            className="text-xl font-bold tracking-[0.6px] uppercase flex items-center gap-2 text-yellow-400"
          >
            <span className="text-black bg-yellow-400 px-2 py-1 inline-block rounded-lg">
              New
            </span>{" "}
            Movie
          </Link>
        </header>
        <main className="flex items-center justify-center mt-10">
          {children}
        </main>
      </div>
    </div>
  );
}
