import { useEffect, useState } from "react";

export function useFetchData(foo, query = "") {
  const [data, setData] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        if (query === "") {
          return;
        }
        setIsLoad(true);
        const res = await foo(query);
        setData(() => {
          return [...res.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoad(false);
      }
    })();
  }, [foo, query]);

  return { data, isLoad, error };
}
