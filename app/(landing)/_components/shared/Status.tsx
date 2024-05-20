import React from "react";
import { AiFillFire } from "react-icons/ai";

const Status = ({ status }: { status: string }) => {
  return (
    <div
      className={`flex items-center gap-2 py-1 px-3 rounded-3xl ${(() => {
        switch (status) {
          case "Popular":
            return "bg-BgStatusPopular text-TextStatusPopular";
          case "Best Deals":
            return "bg-BgStatusBestDeals text-TextStatusBestDeals";
          case "New Store":
            return "bg-BgStatusNewStore text-TextStatusNewStore";
          default:
            return ""; // Default case to handle any other status
        }
      })()}`}
    >
      <AiFillFire className="" />
      <p className={`text-sm font-normal`}>{status}</p>
    </div>
  );
};

export default Status;
