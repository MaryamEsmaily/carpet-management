import * as apiProductManagement from "api/apiProduct/productManagementApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import reactQueryConfig from "config/reactQueryConfig";

// COLOR
const usePostProductColors = (params) => {
  return useQuery(
    ["postProductColors", params],
    apiProductManagement.postProductColors,
    {
      ...reactQueryConfig,
      enabled: !!params,
    }
  );
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
const usePostProductSizes = (params) => {
  return useQuery(
    ["postProductSizes", params],
    apiProductManagement.postProductSizes,
    {
      ...reactQueryConfig,
      enabled: !!params,
    }
  );
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
//  PRODUCT DETAILS
const usePostProductDetails = (params) => {
  return useQuery(
    ["postProductDetails", params],
    apiProductManagement.postProductDetails,
    {
      ...reactQueryConfig,
      enabled: !!params,
    }
  );
};
//  ALL PRODUCTS
const usePostAllProducts = (params) => {
  return useQuery(
    ["postAllProducts", params],
    apiProductManagement.postAllProducts,
    {
      ...reactQueryConfig,
      enabled: !!params,
    }
  );
};

const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(apiProductManagement.deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAllProducts");
    },
  });
};

const usePutProductStatus = () => {
  const queryClient = useQueryClient();
  return useMutation(apiProductManagement.putProductStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAllProducts");
    },
  });
};

const useGetAllColors = () => {
  return useQuery(["getAllColors"], apiProductManagement.getAllColors);
};

const useGetAllSizes = () => {
  return useQuery(["getAllSizes"], apiProductManagement.getAllSizes);
};
// ADD NEW PRODUCT
const usePostAddProduct = (params) => {
  const queryClient = useQueryClient();
  return useMutation(apiProductManagement.postAddProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAllProducts");
    },
  });
};

export {
  // COLOR
  usePostProductColors,
  useDeleteProductColor,
  usePutProductColorStatus,
  usePostAddProductColor,
  // SIZE
  usePostProductSizes,
  useDeleteProductSize,
  usePutProductSizeStatus,
  usePostAddProductSize,
  // PRODUCT DETAILS
  usePostProductDetails,
  // ALL PRODUCTS
  usePostAllProducts,
  useDeleteProduct,
  usePutProductStatus,
  useGetAllColors,
  useGetAllSizes,
  // ADD NEW PRODUCT
  usePostAddProduct,
};
