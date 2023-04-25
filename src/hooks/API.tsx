import { useEffect, useState } from 'react';
import { bobaList, toppingsList, milkList } from 'assets/sampleBobaAPI';
import { ErrorProps } from 'types/common/main';
import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';

const useApi = (url: string, endpoint: string) => {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>();
  const [error, setError] = useState<ErrorProps>({ status: 0, message: '' });
  const [loading, setLoading] = useState<boolean>(true);
  const fetchApi = () => {
    const fullurl = url + endpoint;
    if (process.env.NODE_ENV === 'development') {
      fetch(fullurl)
        .then((response) => {
          if (response.ok) {
            console.log(response,' this is response')
            return response.json();
          } else {
            throw {status: response.status, message: response.statusText };
          }
        })
        .then((json) => {
          console.log(json,' this is json')
          setData(json);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      if (endpoint == '/boba_list') {
        setData(bobaList);
      } else if (endpoint == '/toppings_list') {
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
  console.log(data, 'this is data')
  return { data, error, loading };
};

export default useApi;
