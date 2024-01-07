import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { useRef } from "react";
import { options } from "../utils/constants";
import { addGptMovieResults } from "../utils/searchSlice";

const GPTSearchForm = () => {
  const dispatch = useDispatch();
  const langSelected = useSelector((store) => store.config.lang);
  const inputText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const jsonData = await data.json();
    return jsonData.results;
  };

  const handleClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      inputText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // API call to chatGPT and getting movie results
    // const chatResults = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: gptQuery }],
    //   model: 'gpt-3.5-turbo',
    // });
    // console.log(chatResults);

    const suggestedMovies = [
      "Andaz Apna Apna",
      "Hera Pheri",
      "Chupke Chupke",
      "Jaane Bhi Do Yaaro",
      "Padosan",
    ];

    const promiseArray = suggestedMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResults({
        movieNames: suggestedMovies,
        movieResults: tmdbResults,
      })
    );
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center ">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputText}
          placeholder={lang[langSelected].gptSearchPlaceholder}
          type="text"
          className="p-4 m-4 col-span-9"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleClick}
        >
          {lang[langSelected].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchForm;
