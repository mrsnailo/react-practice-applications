import { useEffect, useState, useMemo } from "react";

const useFetch = (url, config) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const stableConfig = useMemo(
    () => config,
    [config.method, config.headers, config.body],
  );

  useEffect(() => {
    const fetchHandler = async () => {
      setLoading(true);
      setError(""); // Clear previous errors
      try {
        const response = await fetch(url, {
          method: stableConfig.method || "GET",
          headers: stableConfig.headers || {},
          body: JSON.stringify(stableConfig.body) || null,
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    fetchHandler(); // Call it here
  }, [url, stableConfig]); // Use stableConfig as a dependency

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
