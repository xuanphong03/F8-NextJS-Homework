import Link from "next/link";
import { SlMenu } from "react-icons/sl";
import DesktopMenu from "./DesktopMenu";
import TabletMenu from "./TabletMenu";

export default function Header() {
  return (
    <header className="h-20">
      <nav className="flex items-center bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <Link href="/" className="font-bold text-xl text-indigo-600">
              Mindmap Flow
            </Link>
            <button className="flex size-10 items-center justify-center border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden">
              <SlMenu />
            </button>
            <TabletMenu />
          </div>
          <DesktopMenu />
        </div>
      </nav>
    </header>
  );
}
