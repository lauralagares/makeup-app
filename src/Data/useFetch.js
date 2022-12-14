import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const doFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.log("ERROR")
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    doFetch();
  }, [url]);
  return { data, error, loading };
}

export default useFetch;
