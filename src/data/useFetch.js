import { useEffect, useState } from 'react';
// import axios from 'axios';

// function useFetch(url) {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       setLoading(true);
//       axios
//         .get(url)
//         .then((response) => {
//           setData(response.data);
//         })
//         .catch((err) => {
//           setError(err);
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     }, [url]);
  
//     return { data, loading, error};
//   }
  
//   export default useFetch;

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
