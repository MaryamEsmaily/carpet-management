import { instance } from "config/instanceAxios";
import { BASE_URL_ADDRESS } from "constant/baseURL";
const BASE_URL = BASE_URL_ADDRESS;

const postProductColors = async ({ queryKey }) => {
  const params = queryKey[1];
  const { data } = await instance.post(BASE_URL, {
    params: {
      params,
      opCode: 101,
    },
  });
  return data?.Data;
};

const postProductSizes = async ({ queryKey }) => {
  const params = queryKey[1];
  const { data } = await instance.post(BASE_URL, {
    params: {
      params,
      opCode: 102,
    },
  });
  return data;
};
export { postProductColors, postProductSizes };
