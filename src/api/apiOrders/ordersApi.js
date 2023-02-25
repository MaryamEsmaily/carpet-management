import { instance } from "config/instanceAxios";
import { BASE_URL_ADDRESS } from "constant/baseURL";
const BASE_URL = BASE_URL_ADDRESS;

const postAllOrders = async ({ queryKey }) => {
  const params = queryKey?.[1];
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 120,
  });
  return data?.Data;
};

const deleteOrders = async (params) => {
  const { data } = await instance.delete(BASE_URL, {
    data: { payload: params, opCode: 121 },
  });
  return data;
};

const putOrdersStatus = async (params) => {
  const { data } = await instance.put(BASE_URL, {
    payload: params,
    opCode: 122,
  });
  return data;
};

const postOrderDetails = async ({ queryKey }) => {
  const params = queryKey?.[1];
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 120,
  });
  return data?.Data;
};

const postOrderItems = async ({ queryKey }) => {
  const params = queryKey?.[1];
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 120,
  });
  return data?.Data;
};

const deleteOrderItem = async (params) => {
  const { data } = await instance.delete(BASE_URL, {
    data: { payload: params, opCode: 121 },
  });
  return data;
};

const putOrderItemStatus = async (params) => {
  const { data } = await instance.put(BASE_URL, {
    payload: params,
    opCode: 122,
  });
  return data;
};

const postOrderHistory = async ({ queryKey }) => {
  const params = queryKey?.[1];
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 120,
  });
  return data?.Data;
};

const postEditOrder = async ({ queryKey }) => {
  const params = queryKey?.[1];
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 120,
  });
  return data?.Data;
};

const postOrderStatus = async ({ queryKey }) => {
  const params = queryKey?.[1];
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 120,
  });
  return data?.Data;
};

export {
  postAllOrders,
  deleteOrders,
  putOrdersStatus,
  postOrderDetails,
  postOrderItems,
  deleteOrderItem,
  putOrderItemStatus,
  postOrderHistory,
  postEditOrder,
  postOrderStatus,
};
