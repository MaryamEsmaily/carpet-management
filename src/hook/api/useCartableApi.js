import * as apiCartable from "api/apiCartable/cartableApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import reactQueryConfig from "config/reactQueryConfig";

const usePostAllCartable = (params) => {
  return useQuery(["postAllCartables", params], apiCartable.postAllCartable, {
    ...reactQueryConfig,
    enabled: !!params,
  });
};

const useDeleteCartable = () => {
  const queryClient = useQueryClient();
  return useMutation(apiCartable.deleteCartable, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAllCartable");
    },
  });
};

const usePutCartableStatus = () => {
  const queryClient = useQueryClient();
  return useMutation(apiCartable.putCartableStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAllCartable");
    },
  });
};

export { usePostAllCartable, useDeleteCartable, usePutCartableStatus };
