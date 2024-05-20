import React from "react";

interface User {
  Image?: string;
  Name?: string;
  Occupation?: string;
}

const OwnerCard = ({ user }: { user?: User }) => {
  // Destructure user object with default values to handle cases where user object is not provided
  const { Image = "", Name = "", Occupation = "" } = user || {};

  return (
    <div className="card-owner-detail mt-2 flex items-center gap-3">
      {/* Render image only if provided */}
      {Image && (
        <img
          src={Image}
          alt="owner"
          className="rounded-full w-10 h-10 object-cover object-center"
        />
      )}
      <div className="owner-description">
        {/* Render name only if provided */}
        {Name && (
          <h3 className="text-lg font-medium leading-6 text-normalBlackText">
            {Name}
          </h3>
        )}
        {/* Render occupation only if provided */}
        {Occupation && (
          <p className="text-sm font-medium leading-5 text-lightGrey">
            {Occupation}
          </p>
        )}
      </div>
    </div>
  );
};

export default OwnerCard;
