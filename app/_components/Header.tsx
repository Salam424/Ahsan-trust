import React from "react";
import Image from "next/image";

import { HiMiniMapPin } from "react-icons/hi2";
import { partnership } from "@/lib/data";

const Header = () => {
  return (
    <header className="header relative">
      <div className="header-left">
        <div>
          <h1 className="text-5xl font-bold leading-50 text-darkBlue">
            We Help Our <br /> Locals Achieve{" "}
            <span
              className="text-transparent"
              style={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "rgba(27, 28, 87, 1)",
              }}
            >
              {" "}
              Their{" "}
            </span>{" "}
            <br /> Dreams Here
          </h1>
        </div>
        <div>
          <p className="text-lg font-normal leading-28 text-darkGrey mt-9">
            Ahsan Trust is a dedicated research organization committed to <br />
            fostering the growth and sustainability of local businesses.
          </p>
        </div>
        <form className="input-area">
          <input
            type="text"
            placeholder="Search for the shop you want!         "
          />
          <button className="icon">
            <HiMiniMapPin className="w-6 h-6" />
          </button>
          <button className="Button">Search {" >"}</button>
        </form>
        <div className="mt-4">
          <p className="text-lightGrey font-normal text-base">
            Our Partnership
          </p>

          <div className="flex items-start gap-72">
            <div className="flex items-center gap-8 mt-2">
              {partnership.map((partner, index) => (
                <Image
                  src={partner.url}
                  key={index}
                  width={100}
                  height={70}
                  alt="partnership"
                />
              ))}
            </div>
            <div className="flex items-center gap-5 z-10 header-card">
              <div className="flex items-center bg-mainWhite py-2 px-6 rounded-3xl mt-20">
                <Image
                  src="/assets/People.png"
                  width={120}
                  height={66}
                  alt="people"
                />
                <div className="">
                  <h2 className="text-base font-semibold text-darkBlue">
                    1K+ People
                  </h2>
                  <p className="font-normal	text-xs special-grey">
                    Successfully Getting a job
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-right-small-device">
        <img src="/assets/LeftImage.png" alt="" />
      </div>
      <div className="header-right ">
        <img src="/assets/LeftImage.png" alt="" />
      </div>
    </header>
  );
};

export default Header;
