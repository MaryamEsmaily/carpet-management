import * as apiProductManagement from "api/apiProduct/apiProductManagement";
import { useMutation } from "@tanstack/react-query";

const usePostProductColors = () => {
  return useMutation(apiProductManagement.postProductColors);
};

const usePostProductSizes = () => {
  return useMutation(apiProductManagement.postProductSizes);
};

export { usePostProductColors, usePostProductSizes };
