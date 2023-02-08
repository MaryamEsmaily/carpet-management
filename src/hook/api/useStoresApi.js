import * as apiStores from "api/apiStores/storesManagementApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import reactQueryConfig from "config/reactQueryConfig";

const usePostAllStores = (params) => {
  return useQuery(["postAllStores", params], apiStores.postAllStores, {
    ...reactQueryConfig,
    enabled: !!params,
  });
};

const useDeleteStore = () => {
  const queryClient = useQueryClient();
  return useMutation(apiStores.deleteStore, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAllStores");
    },
  });
};

const usePutStoreStatus = () => {
  const queryClient = useQueryClient();
  return useMutation(apiStores.putStoreStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAllStores");
    },
  });
};

const usePostAddStore = (params) => {
  const queryClient = useQueryClient();
  return useMutation(apiStores.postAddStore, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAllStores");
    },
  });
};

const usePutStore = () => {
  const queryClient = useQueryClient();
  return useMutation(apiStores.putStore, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAllStores");
    },
  });
};

const usePostStoreDetails = (params) => {
  return useQuery(["postStoreDetails", params], apiStores.postStoreDetails, {
    ...reactQueryConfig,
    enabled: !!params,
  });
};

export {
  usePostAllStores,
  useDeleteStore,
  usePutStoreStatus,
  usePostAddStore,
  usePutStore,
  usePostStoreDetails,
};
