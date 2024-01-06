import React from "react";
import GPTSearchForm from "./GPTSearchForm";
import GPTSearchMovies from "./GPTSearchMovies";
import { BG_IMAGE } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img className=" object-cover" src={BG_IMAGE} alt="bg-image" />
      </div>
      <div>
        <GPTSearchForm />
        <GPTSearchMovies />
      </div>
    </>
  );
};

export default GPTSearch;
