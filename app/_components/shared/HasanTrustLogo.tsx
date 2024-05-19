import Image from "next/image";
import React from "react";

const HasanTrustLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/assets/AhsanTrustLogo.png"
        width={40}
        height={40}
        alt="logo"
      />
      <h1 className="text-base font-semibold leading-none text-darkBlue">
        Ahsan Trust Mark
      </h1>
    </div>
  );
};

export default HasanTrustLogo;
