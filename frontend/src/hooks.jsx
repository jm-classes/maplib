import { useEffect, useState } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(url, { signal });
        const jsonData = await res.json();
        if (!ignore) {
          setData(jsonData);
        }
      } catch (e) {
        if (!ignore) {
          const err = e instanceof Error ? e : new Error(e);
          setError(err);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }
    fetchData();

    return () => {
      ignore = true;
      setLoading(false);
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, error };
}
