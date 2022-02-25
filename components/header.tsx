/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

/* eslint-disable react/jsx-key */

export function Header() {
  return (
    <header className="py-8 mx-6 md:py-12 md:mx-auto md:w-3/4">
      <nav className="flex items-center">
        <Link href="/" passHref>
          <a>
            <img src="/Logo.svg" alt="" />
          </a>
        </Link>
        <span className="items-center hidden ml-auto space-x-4 md:flex">
          <Link href="/">
            <a>
              <img src="/Search Icon.svg" alt="search" />
            </a>
          </Link>
          <Link href="#">
            <a className="text-xl font-light">Sign in</a>
          </Link>
          <GetStared />
        </span>
        <button className="block ml-auto md:hidden">
          <img src="/Hamburger Menu.svg" alt="menu" />
        </button>
      </nav>
    </header>
  );
}
export function GetStared() {
  return (
    <Link href="#">
      <a className="px-5 py-3 text-white bg-black rounded-md">
        <span className="font-medium ">Get Started</span>

        <span className="font-light opacity-70 "> - It&apos;s free</span>
      </a>
    </Link>
  );
}
