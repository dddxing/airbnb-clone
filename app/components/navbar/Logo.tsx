"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const rounter = useRouter();
  return (
    <Image
      alt="Logo"
      className="
        hidden
        md:block
        cursor
        "
      height="100"
      width="100"
      src="/images/airbnblogo.png"
    />
  );
};

export default Logo;
