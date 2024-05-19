import React from "react";
import HasanTrustLogo from "./shared/HasanTrustLogo";

const Footer = () => {
  return (
    <footer className="mt-36 flex items-center justify-between mb-5">
      <HasanTrustLogo />
      <span className="text-sm leading-6 text-darkGrey">
        © 2024 Hasan Trust. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
