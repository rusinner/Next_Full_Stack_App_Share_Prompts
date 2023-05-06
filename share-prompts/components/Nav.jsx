"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SignIn, SignOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          width={32}
          height={32}
          alt="logo"
          className="object-contain"
        />
      </Link>
    </nav>
  );
};

export default Nav;
