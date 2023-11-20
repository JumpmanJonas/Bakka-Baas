import React from "react";
import { useState } from "react";
import Link from "next/link";
import Kontakt from "@/pages/kontakt/index.jsx";
import { MdHome } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="flex justify-start px-8 items-center">
      <section className="w-2/3">
        <Link
          href="/"
          className="w-24 h-12 text-xl flex justify-center items-center hover:text-green-400"
        >
          <MdHome className="w-9 h-9" />
        </Link>
      </section>
      <section className="flex justify-between px-10 w-1/3">
        <Link href="/booking" className="hover:text-green-400">
          book en bås
        </Link>
        <Link href="/kontakt" className="hover:text-green-400">
          kontakt oss
        </Link>
      </section>
    </nav>
  );
}
