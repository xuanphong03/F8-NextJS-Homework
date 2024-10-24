import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import F8_Logo from "@/public/images/f8_logo.webp";
import Image from "next/image";
import ThemeSwitcherButton from "./_components/ThemeSwitcherButton";
import LocaleSwitcherButton from "./_components/LocaleSwitcherButton";
import { FaFacebookF, FaYoutube } from "react-icons/fa6";

export default function Header() {
  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="xl"
      height={50}
      className="py-2 shadow-md bg-white dark:bg-gray-700 dark:text-teal-500 dark:shadow-white dark:shadow"
    >
      <div className="flex gap-5 items-center">
        <Link href="/">
          <NavbarBrand className="flex items-center gap-2">
            <Image
              priority
              alt="F8 Logo"
              src={F8_Logo}
              className="rounded-full"
              width={50}
              height={50}
            />
            <p className="font-black text-inherit">Portfolio</p>
          </NavbarBrand>
        </Link>
        <NavbarContent
          className="hidden sm:flex gap-4 items-center"
          justify="center"
        >
          <NavbarItem>
            <Link color="foreground" className="font-bold" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" className="font-bold" href="/profile">
              Profile
            </Link>
          </NavbarItem>
        </NavbarContent>
      </div>
      <NavbarContent justify="end" className="gap-2">
        <NavbarItem>
          <Link
            href="#"
            target="_blank"
            className="flex items-center justify-center bg-blue-500 size-10 text-white rounded-xl text-xl"
          >
            <FaFacebookF />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            target="_blank"
            className="flex items-center justify-center bg-red-500 size-10 text-white rounded-xl text-xl"
          >
            <FaYoutube />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcherButton />
        </NavbarItem>
        <NavbarItem>
          <LocaleSwitcherButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
