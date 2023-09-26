import { useState } from "react";

const useFetch = (url, option) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const makeRequest = async (payload) => {
    setIsLoading(true);

    try {
      const response = await fetch(url, {
        method: option.method,
        headers: option.headers,
        body: JSON.stringify(payload === undefined ? {} : payload),
      });
      const json = await response.json();

      setIsLoading(false);
      setData(json);
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };

  return { data, isLoading, error, makeRequest };
};

export default useFetch;
