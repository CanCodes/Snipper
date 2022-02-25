/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col items-start w-3/4 py-20 mx-auto space-y-4 md:space-y-0 md:flex-row">
      <Link href="/" passHref>
        <img src="/Logo.svg" alt="" />
      </Link>
      <span className="ml-auto space-x-4">
        <Link href="#">
          <a className="text-xl font-light">Terms and Conditions</a>
        </Link>
        <Link href="#">
          <a className="text-xl font-light">Privacy Policy</a>
        </Link>
      </span>
    </footer>
  );
}
