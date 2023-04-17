import { useEffect, useState } from 'react';
import { bobaList, toppingsList, milkList } from 'assets/sampleBobaAPI';

const useApi = (url: string, endpoint: string) => {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchApi = () => {
    const fullurl = url + endpoint;
    if (process.env.NODE_ENV === 'development') {
      fetch(fullurl)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setData(json);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      if (endpoint == '/bobalist') {
        setData(bobaList);
      } else if (endpoint == '/toppings') {
        setData(toppingsList);
      } else {
        setData(milkList);
      }
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return { data, error, loading };
};

export default useApi;