import React from "react";
import GPTSearchForm from "./GPTSearchForm";
import GPTSearchMovies from "./GPTSearchMovies";
import { BG_IMAGE } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" src={BG_IMAGE} alt="bg-image" />
      </div>
      <div>
        <GPTSearchForm />
        <GPTSearchMovies />
      </div>
    </>
  );
};

export default GPTSearch;
