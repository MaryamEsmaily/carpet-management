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

const usePostAddBuyer = (params) => {
  const queryClient = useQueryClient();
  return useMutation(apiBuyers.postAddBuyer, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAllBuyers");
    },
  });
};

const usePutBuyer = () => {
  const queryClient = useQueryClient();
  return useMutation(apiBuyers.putBuyer, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAllBuyers");
    },
  });
};

const usePostBuyerDetails = (params) => {
  return useQuery(["postBuyerDetails", params], apiBuyers.postBuyerDetails, {
    ...reactQueryConfig,
    enabled: !!params,
  });
};

export {
  usePostAllBuyers,
  useDeleteBuyer,
  usePutBuyerStatus,
  usePostAddBuyer,
  usePutBuyer,
  usePostBuyerDetails,
};
