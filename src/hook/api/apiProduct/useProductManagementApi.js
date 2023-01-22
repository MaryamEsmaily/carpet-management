import * as apiProductManagement from "api/apiProduct/productManagementApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostProductColors = () => {
  return useMutation(apiProductManagement.postProductColors);
};

const useDeleteProductColor = () => {
  const queryClient = useQueryClient();
  return useMutation(apiProductManagement.deleteProductColor, {
    onSuccess: () => {
      queryClient.invalidateQueries("postProductColors");
    },
  });
};

const usePutProductColorStatus = () => {
  const queryClient = useQueryClient();
  return useMutation(apiProductManagement.putProductColorStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries("postProductColors");
    },
  });
};

const usePostProductSizes = () => {
  return useMutation(apiProductManagement.postProductSizes);
};

const usePostAddProductColor = () => {
  return useMutation(apiProductManagement.postAddProductColor);
};

export {
  usePostProductColors,
  useDeleteProductColor,
  usePostProductSizes,
  usePutProductColorStatus,
  usePostAddProductColor,
};
