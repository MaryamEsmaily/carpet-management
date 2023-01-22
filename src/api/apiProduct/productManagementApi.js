import { instance } from "config/instanceAxios";
import { BASE_URL_ADDRESS } from "constant/baseURL";
const BASE_URL = BASE_URL_ADDRESS;

// COLOR
const postProductColors = async (params) => {
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 101,
  });
  return data?.Data;
};

const deleteProductColor = async (params) => {
  const { data } = await instance.delete(BASE_URL, {
    data: { payload: params, opCode: 102 },
  });
  return data;
};

const putProductColorStatus = async (params) => {
  const { data } = await instance.put(BASE_URL, {
    payload: params,
    opCode: 103,
  });
  return data;
};

const postAddProductColor = async (params) => {
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 104,
  });
  return data?.Data;
};
// SIZE
const postProductSizes = async (params) => {
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 105,
  });
  return data?.Data;
};

const deleteProductSize = async (params) => {
  const { data } = await instance.delete(BASE_URL, {
    data: { payload: params, opCode: 106 },
  });
  return data;
};

const putProductSizeStatus = async (params) => {
  const { data } = await instance.put(BASE_URL, {
    payload: params,
    opCode: 107,
  });
  return data;
};

const postAddProductSize = async (params) => {
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 108,
  });
  return data?.Data;
};
//  PRODUCT DETAILS
const postProductDetails = async (params) => {
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 109,
  });
  return data?.Data;
};
//  ALL PRODUCTS
const postAllProducts = async (params) => {
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 110,
  });
  return data?.Data;
};
const deleteProduct = async (params) => {
  const { data } = await instance.delete(BASE_URL, {
    data: { payload: params, opCode: 111 },
  });
  return data;
};

const putProductStatus = async (params) => {
  const { data } = await instance.put(BASE_URL, {
    payload: params,
    opCode: 112,
  });
  return data;
};

const getAllColors = async () => {
  const { data } = await instance.get(BASE_URL + "113");
  return data;
};

const getAllSizes = async () => {
  const { data } = await instance.get(BASE_URL + "114");
  return data;
};
//
export {
  // color
  postProductColors,
  deleteProductColor,
  putProductColorStatus,
  postAddProductColor,
  // size
  postProductSizes,
  deleteProductSize,
  putProductSizeStatus,
  postAddProductSize,
  // PRODUCT DETAILS
  postProductDetails,
  //  ALL PRODUCTS
  postAllProducts,
  deleteProduct,
  putProductStatus,
  getAllColors,
  getAllSizes,
};
