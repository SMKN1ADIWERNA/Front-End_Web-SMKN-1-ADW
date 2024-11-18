import useFetch from "../hook/UseFetch";

export const useFetchData = () => {
  return useFetch("http://202.65.116.9:1337/api/artikels?populate=*");
};
