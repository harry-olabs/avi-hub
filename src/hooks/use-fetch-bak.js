import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (url, options) => {
    setIsLoading(true);

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        setData(data);
      } else {
        throw new Error("Response is not in JSON format");
      }

      setError(null);
    } catch (error) {
      setError(error);

      setTimeout(() => {
        setError(null);
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, fetchData };
};

export default useFetch;
