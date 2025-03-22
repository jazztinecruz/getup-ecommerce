import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative w-32 h-12 md:w-56 md:h-24">
      <Image
        src="/logo/logo.png"
        alt="getup logo"
        priority
        fill
        className="object-cover"
      />
    </div>
  );
};

export default Logo;
