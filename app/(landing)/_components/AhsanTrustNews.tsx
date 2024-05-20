import React from "react";
import OwnerCard from "./shared/OwnerCard";
import { news, users } from "@/lib/data";
import { FaClock } from "react-icons/fa6";

const AhsanTrustNews = () => {
  return (
    <section className="mt-36">
      <div className="text-center">
        <p className="text-titleBlue font-medium leading-4 text-sm">
          See tips and trick from our partnership
        </p>
        <h1 className="text-3xl font-semibold leading-10 text-darkBlue mt-1">
          Find out more about <br /> selling and buying homes
        </h1>
      </div>

      <div className="flex gap-14 mt-10">
        <div className="flex flex-col gap-10">
          {news.slice(0, 3).map((news, index) => (
            <div
              className="flex items-center gap-5 news-child-block"
              key={index}
            >
              <div className="news-image-block">
                <img src={news.image} alt="image" />
              </div>
              <div className="news-info-block flex flex-col items-start">
                <h3 className=" font-medium text-lg leading-8 text-darkBlue">
                  {news.title}
                </h3>
                <p className="text-base font-normal leading-7 text-darkGrey">
                  {news.body}
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <FaClock className=" text-2xl text-lightGrey" />
                  <span className=" text-sm leading-6 font-normal text-lightGrey">
                    {news.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="rightNews-block">
          <div className="rightNews-block-image-container">
            <img src={news[0].image} alt="image" />
          </div>
          <div className="rightNews-block-body">
            <h1 className="font font-medium text-2xl text-darkBlue">
              {news[0].title}
            </h1>
            <p className=" text-sm font-normal leading-6 text-darkGrey">
              {news[0].body}
            </p>
            <div className="flex items-center gap-3">
              <FaClock className="text-2xl text-lightGrey" />
              <span className="text-sm leading-6 font-normal text-lightGrey">
                {news[0].date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AhsanTrustNews;
