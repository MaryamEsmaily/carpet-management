import * as apiOrders from "api/apiOrders/ordersApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import reactQueryConfig from "config/reactQueryConfig";

const usePostAllOrders = (params) => {
  return useQuery(["postAllOrders", params], apiOrders.postAllOrders, {
    ...reactQueryConfig,
    enabled: !!params,
  });
};

const useDeleteOrders = () => {
  const queryClient = useQueryClient();
  return useMutation(apiOrders.deleteOrders, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAllOrders");
    },
  });
};

const usePutOrdersStatus = () => {
  const queryClient = useQueryClient();
  return useMutation(apiOrders.putOrdersStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAllOrders");
    },
  });
};

export { usePostAllOrders, useDeleteOrders, usePutOrdersStatus };
