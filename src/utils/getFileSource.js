import { BASE_URL_ADDRESS } from "constant/baseURL";

const getFileSource = (name) => {
  return `${BASE_URL_ADDRESS}io/files/${name}`;
};

export default getFileSource;
