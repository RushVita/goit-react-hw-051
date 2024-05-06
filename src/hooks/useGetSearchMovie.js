import { useEffect, useState } from "react";
import { fetchSearch } from "../articles-api";

export function useGetSearch(query) {
  const [searchFilm, setSearchFilm] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        if (query === "") {
          return;
        }
        setIsLoad(true);
        const data = await fetchSearch(query);
        setSearchFilm(() => {
          return [...data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoad(false);
      }
    })();
  }, [query]);

  return { searchFilm, isLoad, error };
}
