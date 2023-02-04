import * as apiBuyers from "api/apiBuyers/buyersManagementApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import reactQueryConfig from "config/reactQueryConfig";

const usePostAllBuyers = (params) => {
  return useQuery(["postAllBuyers", params], apiBuyers.postAllBuyers, {
    ...reactQueryConfig,
    enabled: !!params,
  });
};

const useDeleteBuyer = () => {
  const queryClient = useQueryClient();
  return useMutation(apiBuyers.deleteBuyer, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAllBuyers");
    },
  });
};

const usePutBuyerStatus = () => {
  const queryClient = useQueryClient();
  return useMutation(apiBuyers.putBuyerStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAllBuyers");
    },
  });
};

export { usePostAllBuyers, useDeleteBuyer, usePutBuyerStatus };
