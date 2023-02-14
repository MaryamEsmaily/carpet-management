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

const usePostOrderDetails = (params) => {
  return useQuery(["postOrderDetails", params], apiOrders.postOrderDetails, {
    ...reactQueryConfig,
    enabled: !!params,
  });
};

const usePostOrderItems = (params) => {
  return useQuery(["postOrderItems", params], apiOrders.postOrderItems, {
    ...reactQueryConfig,
    enabled: !!params,
  });
};

const useDeleteOrderItem = () => {
  const queryClient = useQueryClient();
  return useMutation(apiOrders.deleteOrderItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("postOrderItems");
    },
  });
};

const usePutOrderItemStatus = () => {
  const queryClient = useQueryClient();
  return useMutation(apiOrders.putOrderItemStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries("postOrderItems");
    },
  });
};

export {
  usePostAllOrders,
  useDeleteOrders,
  usePutOrdersStatus,
  usePostOrderDetails,
  usePostOrderItems,
  useDeleteOrderItem,
  usePutOrderItemStatus,
};
