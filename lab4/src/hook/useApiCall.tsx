import { useState, useEffect } from "react";

const useApiCall = (url: string, callback: (data: any) => any) => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);

      const result = await response.json();

      if (result) {
        const dataFinal = callback(result);

        setData(dataFinal);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    return () => {
      setError(null);
    };
  }, [url, callback]);

  return { data, loading, error };
};

export default useApiCall;
