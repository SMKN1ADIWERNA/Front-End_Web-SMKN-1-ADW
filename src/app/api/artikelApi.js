import useFetch from "../../Hook/useFetch";

export const useFetchData = () => {
  return useFetch("http://202.65.116.9:1337/api/artikels?populate=*");
};
