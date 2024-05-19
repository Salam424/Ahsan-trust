import React from "react";

const Highlight = () => {
  return (
    <section className="mt-36">
      <div className="text-center">
        <p className="text-titleBlue font-medium leading-4 text-sm">
          Highlight
        </p>
        <h1 className="text-3xl font-semibold leading-10 text-darkBlue mt-1">
          The best stores of the year
        </h1>
      </div>
      <div className="highlight-box-container">
        <div className="highlight">
          <div className="highlight-block-1">
            <img src="/assets/Highlight.png" alt="house" />
          </div>
          <div className="highlight-block-2"></div>
        </div>
        <div className="highlight">
          <div className="highlight-block-1">
            <img src="/assets/Highlight.png" alt="house" />
          </div>
          <div className="highlight-block-2">
            <div className="highlight-block-2-description">
              <h1 className="text-xl font-semibold leading-6 text-darkBlue">
                Best! I got the house I wanted through Hounter
              </h1>
              <p className="mt-4 text-darkGrey font-normal text-sm leading-6">
                Through this website I can get a house with the type and
                specifications I want very easily, without a complicated process
                to be able to find information on the house we want.
              </p>
            </div>
          </div>
        </div>
        <div className="highlight">
          <div className="highlight-block-1">
            <img src="/assets/Highlight.png" alt="house" />
          </div>
          <div className="highlight-block-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
