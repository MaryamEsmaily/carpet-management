import { instance } from "config/instanceAxios";
import { BASE_URL_ADDRESS } from "constant/baseURL";
const BASE_URL = BASE_URL_ADDRESS;

const postAllEmployees = async ({ queryKey }) => {
  const params = queryKey?.[1];
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 120,
  });
  return data?.Data;
};

const deleteEmployee = async (params) => {
  const { data } = await instance.delete(BASE_URL, {
    data: { payload: params, opCode: 121 },
  });
  return data;
};

const putEmployeeStatus = async (params) => {
  const { data } = await instance.put(BASE_URL, {
    payload: params,
    opCode: 122,
  });
  return data;
};

const postAddEmployee = async (params) => {
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 123,
  });
  return data?.Data;
};

const putEmployee = async (params) => {
  const { data } = await instance.put(BASE_URL, {
    payload: params,
    opCode: 124,
  });
  return data;
};

const postEmployeeDetails = async ({ queryKey }) => {
  const params = queryKey?.[1];
  const { data } = await instance.post(BASE_URL, {
    payload: params,
    opCode: 125,
  });
  return data?.Data;
};

export {
  postAllEmployees,
  deleteEmployee,
  putEmployeeStatus,
  postAddEmployee,
  putEmployee,
  postEmployeeDetails,
};
