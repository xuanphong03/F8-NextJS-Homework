export default function Footer() {
  return (
    <footer className="py-5 bg-slate-900 text-gray-200 px-5 xl:px-0">
      <div className="container mx-auto flex flex-col gap-5">
        <div className="grid grid-cols-12 lg:grid-cols-10 gap-5">
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-2">
            <h2 className="text-yellow-500 flex items-center gap-2 font-bold uppercase">
              <span className="block text-black py-1 px-2 rounded-md bg-yellow-500">
                New
              </span>{" "}
              Movie
            </h2>
            <p className="text-sm max-w-[80%]">
              High quality free online movie viewing website with intuitive
              interface, fast page loading speed, and movie library with more
              than 10,000+ new movies, good movies, always updated quickly,
              promises to bring you relaxing moments.
            </p>
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2 flex flex-col gap-2">
            <h2 className="uppercase font-medium">Categories</h2>
            <ul className="text-sm flex flex-col gap-1 text-gray-400">
              <li className="cursor-pointer hover:text-gray-300 transition-all">
                New movies
              </li>
              <li className="cursor-pointer hover:text-gray-300 transition-all">
                Cinema movies
              </li>
              <li className="cursor-pointer hover:text-gray-300 transition-all">
                TV series
              </li>
              <li className="cursor-pointer hover:text-gray-300 transition-all">
                Movies
              </li>
            </ul>
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2 flex flex-col gap-2">
            <h2 className="uppercase font-medium">Genres</h2>
            <ul className="text-sm flex flex-col gap-1 text-gray-400">
              <li className="cursor-pointer hover:text-gray-300 transition-all">
                Action Film
              </li>
              <li className="cursor-pointer hover:text-gray-300 transition-all">
                Drama Film
              </li>
              <li className="cursor-pointer hover:text-gray-300 transition-all">
                War Film
              </li>
              <li className="cursor-pointer hover:text-gray-300 transition-all">
                Thriller Film
              </li>
            </ul>
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2 flex flex-col gap-2">
            <h2 className="uppercase font-medium">Clause</h2>
            <ul className="text-sm flex flex-col gap-1 text-gray-400">
              <li className="cursor-pointer hover:text-gray-300 transition-all">
                DMCA
              </li>
              <li className="cursor-pointer hover:text-gray-300 transition-all">
                Contact
              </li>
              <li className="cursor-pointer hover:text-gray-300 transition-all">
                Privacy
              </li>
              <li className="cursor-pointer hover:text-gray-300 transition-all">
                Terms of Service
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="flex justify-center">
          <p className="text-sm text-gray-400">
            © 2024 NEW MOVIE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
