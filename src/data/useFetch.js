import { useEffect, useState } from 'react';

function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        const doFetch = async () => {
          setLoading(true);
          try{
            const res = await fetch(url);
          const json = await res.json();
          setData(json);
          } catch (e) {
            setError(e);
          } finally {
            setLoading(false);
          }
        } 
        doFetch();
      }, [url]);
    return {data, error, loading};
  }
  
  export default useFetch;
