import { instance } from "config/instanceAxios";
import { BASE_URL_ADDRESS } from "constant/baseURL";
const BASE_URL = BASE_URL_ADDRESS;

const postIoUploads = async (params) => {
  params.append("opCode", 120);
  const { data } = await instance.post(BASE_URL, params);
  return data;
};

export { postIoUploads };
