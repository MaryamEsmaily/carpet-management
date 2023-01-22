import * as apiProductManagement from "api/apiProduct/productManagementApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// COLOR
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

const usePostAddProductColor = () => {
  return useMutation(apiProductManagement.postAddProductColor);
};
// SIZE
const usePostProductSizes = () => {
  return useMutation(apiProductManagement.postProductSizes);
};

const useDeleteProductSize = () => {
  const queryClient = useQueryClient();
  return useMutation(apiProductManagement.deleteProductSize, {
    onSuccess: () => {
      queryClient.invalidateQueries("postProductSizes");
    },
  });
};

const usePutProductSizeStatus = () => {
  const queryClient = useQueryClient();
  return useMutation(apiProductManagement.putProductSizeStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries("postProductSizes");
    },
  });
};

const usePostAddProductSize = () => {
  return useMutation(apiProductManagement.postAddProductSize);
};

export {
  // color
  usePostProductColors,
  useDeleteProductColor,
  usePutProductColorStatus,
  usePostAddProductColor,
  // size
  usePostProductSizes,
  useDeleteProductSize,
  usePutProductSizeStatus,
  usePostAddProductSize,
};
