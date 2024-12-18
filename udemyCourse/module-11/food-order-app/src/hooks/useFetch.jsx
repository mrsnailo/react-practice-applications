import { useEffect, useState, useMemo } from "react";

const useFetch = (url, config = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const stableConfig = useMemo(
    () => ({
      method: 'GET',
      headers: {},
      body: null,
      ...config
    }),
    [config?.method, config?.headers, config?.body]
  );

  useEffect(() => {
    // Only run fetch if config exists and url is provided
    console.log(url, config);
    if (!url || !stableConfig) return;

    const fetchHandler = async () => {
      setLoading(true);
      setError(""); // Clear previous errors
      try {
        const fetchOptions = {
          method: stableConfig.method,
          headers: {
            'Content-Type': 'application/json',
            ...stableConfig.headers
          }
        };

        // Only add body if it exists and method allows body
        if (stableConfig.body && 
            ['POST', 'PUT', 'PATCH'].includes(stableConfig.method)) {
          fetchOptions.body = JSON.stringify(stableConfig.body);
        }

        const response = await fetch(url, fetchOptions);
        
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

    fetchHandler();
  }, [url, stableConfig]); 

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;