"use client";

import Image from "next/image";
// import { useRouter } from "next/navigation";

const Logo = () => {
  return (
    <Image
      src="/images/logo.png"
      height={100}
      width={100}
      alt="logo"
      className="text-rose-500 hidden md:block cursor-pointer"
    />
  );
};

export default Logo;
