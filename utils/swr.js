import Axios from "axios";
import { createContext, useContext } from "react";
import useSWR from "swr";

export const revalidators = {};

if (typeof window !== "undefined") window.revalidators = revalidators;

const addToRevalidators = (revalidatorName, revalidator) =>
  (revalidators[revalidatorName] = revalidator);

export const createRequestHook = ({ url, revalidatorName }) => {
  const Context = createContext(undefined);

  const hook = () => useContext(Context);

  const providerValueThunk = () => {
    const { data, error, isValidating, revalidate } = useSWR(url, async url => {
      const response = await Axios.get(url);
      return response.data;
    });
    addToRevalidators(revalidatorName, revalidate);
    return { data, error, isValidating, revalidate };
  };

  const provider = ({ children }) => (
    <Context.Provider value={providerValueThunk()}>{children}</Context.Provider>
  );

  return [provider, hook];
};
