import { useState, useEffect } from "react";

const useFetch = (URL, dependency) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setFetchedData(data.results)})
      .catch((err) => setError(err));
  }, [URL, dependency])

  return {
    loading,
    error,
    fetchedData,
  };
};

export default useFetch;
