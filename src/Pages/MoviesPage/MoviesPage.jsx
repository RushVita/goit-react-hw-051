import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import MovieList from "../../Components/MovieList/MovieList";

import { useSearchParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import { fetchSearch } from "../../articles-api";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const getValue = searchParams.get("query");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue === "") return;

    setSearchParams({ query: inputValue });
    setQuery(inputValue);
  };

  const { data, isLoad, error } = useFetchData(fetchSearch, query);

  return (
    <div>
      <h1>MoviesPage</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setSearchParams({ query: e.target.value });
          }}
        />
        <button>Search</button>
      </form>
      {data.length > 0 && <MovieList movie={data}></MovieList>}
      {isLoad && (
        <div>
          <ThreeDots color="#cc5801" />
        </div>
      )}
      {error && <div>Ops Error😔 Please try again!</div>}
    </div>
  );
}
