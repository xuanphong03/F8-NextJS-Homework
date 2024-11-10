import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import "./Header.css";

export default function Header({ primary = false, secondary = false }) {
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 text-white ${
        primary ? "bg-[#032541]" : ""
      } ${secondary ? "bg-transparent" : ""}`}
    >
      <div className="container mx-auto py-3 px-5 2xl:px-0">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-[0.6px] uppercase flex items-center gap-2 text-yellow-400"
          >
            <span className="text-black bg-yellow-400 px-2 py-1 inline-block rounded-lg">
              New
            </span>{" "}
            Movie
          </Link>
          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
}
