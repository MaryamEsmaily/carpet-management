import { instance } from "config/instanceAxios";
import { BASE_URL_ADDRESS } from "constant/baseURL";
const BASE_URL = BASE_URL_ADDRESS;

const postProductColors = async (params) => {
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 101,
  });
  return data?.Data;
};

const deleteProductColor = async (params) => {
  const { data } = await instance.delete(BASE_URL, {
    data: { payload: params, opCode: 103 },
  });
  return data;
};

const putProductColorStatus = async (params) => {
  const { data } = await instance.put(BASE_URL, {
    payload: params,
    opCode: 104,
  });
  return data;
};

const postProductSizes = async (params) => {
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 102,
  });
  return data;
};

const postAddProductColor = async (params) => {
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 105,
  });
  return data?.Data;
};
//
export {
  postProductColors,
  deleteProductColor,
  putProductColorStatus,
  postProductSizes,
  postAddProductColor,
};
