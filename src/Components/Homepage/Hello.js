import React from "react";

const Hello = () => {
  return (
    <div>
      <div className="md:px-[140px]  md:grid  grid-cols-1 gap-3 lg:mt-[58px] sm:mt-[110px] mt-[140px] sm:ml-[15px] xl:m-40 ">
        <h1 className="text-3xl font-semibold">Welcome to Victorinox</h1>
        <p>
          In 1884, the Swiss pioneer Karl Elsener founded his cutler’s business.
          A few years later, he paved the way for an unparalleled company
          history by developing the legendary «Original Swiss Army Knife»
        </p>
        <p>
          Today, Victorinox produces and sells unique, high quality products
          worldwide which are of practical use in differing areas of life:Swiss
          Army Knives, Cutlery, Travel Gear, Fragrances.
          <br />
        </p>
        <p>
          The head office of the is in Ibach, Schwyz, in the heart of
          Switzerland.{" "}
        </p>
        <button
          type="button"
          class="text-white bg-rose-700 hover:bg-black uppercase lg:w-1/5 focus:ring-4 focus:outline-none focus:ring-black font-medium text-base px-6 py-3.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black-800 md:w-1/3 "
        >
          The Welcome Letter
        </button>
      </div>
    </div>
  );
};

export default Hello;
