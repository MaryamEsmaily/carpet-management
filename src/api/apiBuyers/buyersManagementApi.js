import { instance } from "config/instanceAxios";
import { BASE_URL_ADDRESS } from "constant/baseURL";
const BASE_URL = BASE_URL_ADDRESS;

const postAllBuyers = async ({ queryKey }) => {
  const params = queryKey?.[1];
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 120,
  });
  return data?.Data;
};

const deleteBuyer = async (params) => {
  const { data } = await instance.delete(BASE_URL, {
    data: { payload: params, opCode: 121 },
  });
  return data;
};

const putBuyerStatus = async (params) => {
  const { data } = await instance.put(BASE_URL, {
    payload: params,
    opCode: 122,
  });
  return data;
};

const postAddBuyer = async (params) => {
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 123,
  });
  return data?.Data;
};

const putBuyer = async (params) => {
  const { data } = await instance.put(BASE_URL, {
    payload: params,
    opCode: 124,
  });
  return data;
};

const postBuyerDetails = async ({ queryKey }) => {
  const params = queryKey?.[1];
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 125,
  });
  return data?.Data;
};

export {
  postAllBuyers,
  deleteBuyer,
  putBuyerStatus,
  postAddBuyer,
  putBuyer,
  postBuyerDetails,
};
