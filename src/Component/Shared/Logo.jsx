import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1 cursor-pointer">
      <Image src="/logo.png" alt="Logo" width={42} height={42} />
      <h3 className="text-2xl mt-1 text-black font-semibold">
        Fish<span className="text-primary">Mart</span>
      </h3>
    </Link>
  );
};

export default Logo;
