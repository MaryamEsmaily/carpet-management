import { useMutation } from "@tanstack/react-query";
import * as IoApi from "api/apiFiles/IoApi";

const usePostIoUploads = () => {
  return useMutation(IoApi.postIoUploads);
};

export { usePostIoUploads };
