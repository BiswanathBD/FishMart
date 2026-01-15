import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="py-2 flex items-center gap-1">
      <Image src="/logo.png" alt="Logo" width={36} height={36} className="bg-white/50 p-1 rounded-full" />
      <h3 className="text-2xl mt-1">
        Fish<span className="text-primary">Mart</span>
      </h3>
    </div>
  );
};

export default Logo;
