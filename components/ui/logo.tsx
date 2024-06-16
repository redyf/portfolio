import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React from "react";

type LogoProps = {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
};
const Logo: React.FC<LogoProps> = ({ src, alt, width, height }) => {
  return (
    <Link href="/">
      <Image src={src} alt={alt} width={width} height={height} />
    </Link>
  );
};

export default Logo;
