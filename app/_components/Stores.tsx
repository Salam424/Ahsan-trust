import { categoryFilters, users } from "@/lib/data";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Status from "@/app/_components/shared/Status";
import OwnerCard from "./shared/OwnerCard";
const Stores = () => {
  return (
    <section className="mt-44">
      <div className="flex items-end gap-80">
        <div>
          <p className="text-titleBlue font-medium leading-4 text-sm">
            Our Recommendation
          </p>
          <h1 className="text-3xl font-semibold leading-10 text-darkBlue mt-1">
            Stores
          </h1>
        </div>
        <div className="flex gap-6 ">
          {categoryFilters.map((category, index) => (
            <div
              className="flex items-center gap-2 text-lightGrey py-2 px-5 rounded-3xl grey-border"
              key={index}
            >
              <category.icon className="text-lightGrey" />
              <a className="">{category.categoryName}</a>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <button className="bg-bgGrey py-3 px-5 rounded-3xl	">
            <FaChevronLeft />
          </button>
          <button className="bg-darkBlue py-3 px-5 rounded-3xl text-white	">
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="card-container mt-8 flex gap-12">
        {users.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-img">
              <img src={card.storesInfo.store.storeImage} alt="stores" />
              <div className="card-status cursor-pointer ">
                <Status status={card.storesInfo.store.status} />
              </div>
            </div>
            <div className="card-description mt-5">
              <h3 className="text-normalBlackText cursor-pointer">
                {card.storesInfo.store.storeName}
              </h3>
              <p className="text-normalGreyText">
                {card.storesInfo.store.location}
              </p>
            </div>
            <OwnerCard
              user={{
                Image: card.Image,
                Name: card.Name,
                Occupation: card.Occupation,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stores;
