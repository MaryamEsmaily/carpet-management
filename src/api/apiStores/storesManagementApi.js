import { instance } from "config/instanceAxios";
import { BASE_URL_ADDRESS } from "constant/baseURL";
const BASE_URL = BASE_URL_ADDRESS;

const postAllStores = async ({ queryKey }) => {
  const params = queryKey?.[1];
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 130,
  });
  return data?.Data;
};

const deleteStore = async (params) => {
  const { data } = await instance.delete(BASE_URL, {
    data: { payload: params, opCode: 131 },
  });
  return data;
};

const putStoreStatus = async (params) => {
  const { data } = await instance.put(BASE_URL, {
    payload: params,
    opCode: 132,
  });
  return data;
};

const postAddStore = async (params) => {
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 133,
  });
  return data?.Data;
};

const putStore = async (params) => {
  const { data } = await instance.put(BASE_URL, {
    payload: params,
    opCode: 134,
  });
  return data;
};

const postStoreDetails = async ({ queryKey }) => {
  const params = queryKey?.[1];
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 135,
  });
  return data?.Data;
};

export {
  postAllStores,
  deleteStore,
  putStoreStatus,
  postAddStore,
  putStore,
  postStoreDetails,
};
