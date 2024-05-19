import React from "react";
import { FaStoreAlt } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdFoodBank } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <section className="flex gap-60 items-end mt-36">
      <div>
        <div>
          <p className="text-titleBlue font-medium leading-4 text-sm">
            About Us
          </p>
          <h1 className="text-3xl font-semibold leading-10 text-darkBlue mt-1">
            Ahsan Trust Mark
          </h1>
        </div>
        <div className="mt-1">
          <p className="text-base font-normal leading-7 text-darkGrey">
            Stores recommended by our partners that have been curated to <br />{" "}
            become the home of your dreams!
          </p>
        </div>
        <div className="mt-6">
          <p className="font-semibold text-base leading-7 text-darkBlue mb-4">
            Detail
          </p>
          <div className="two-grid">
            <div className="flex items-center gap-3">
              <FaStoreAlt className="text-lightGrey text-xl" />
              <p className="text-base leading-5 font-medium text-normalGreyText">
                50+ Stores
              </p>
            </div>

            <div className="flex items-center gap-3">
              <MdFoodBank className="text-lightGrey text-xl" />
              <p className="text-base leading-5 font-medium text-normalGreyText">
                4 food stores
              </p>
            </div>
            <div className="flex items-center gap-3 mt-6 mb-6">
              <FaMoneyBillTrendUp className="text-lightGrey text-xl" />
              <p className="text-base leading-5 font-medium text-normalGreyText">
                500k Baht Zakar raised!
              </p>
            </div>
          </div>
          <div className="line"></div>
        </div>

        <div className="flex items-end gap-10">
          <div className="card-owner-detail mt-6 flex items-center gap-3">
            <img
              src="/assets/owner.jpg"
              alt="owner"
              className="rounded-full w-10 h-10 object-cover object-center"
            />
            <div className="owner-description">
              <h3 className="text-lg font-medium leading-6 text-normalBlackText">
                Mahsoom Sateemae
              </h3>
              <p className="text-sm font-medium leading-5 text-lightGrey">
                092-2012-5842
              </p>
            </div>
          </div>
          <div className="bg-darkBlue py-2 px-3 rounded-3xl text-mainWhite cursor-pointer flex items-center gap-3">
            <FaPhone />
            <p className="font-semibold text-sm leading-6">Contact Now</p>
          </div>
        </div>
      </div>
      <div className="block-container">
        <div className="block">
          <img src="/assets/image1.png" alt="clothes" />
        </div>
        <div className="small-block">
          <div className="small-block1">
            <img src="/assets/image2.png" alt="clothes" />
          </div>
          <div className="small-block2">
            <img src="/assets/image3.png" alt="clothes" />
          </div>
          <div className="small-block2">
            <img src="/assets/image3.png" alt="clothes" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
