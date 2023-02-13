import * as apiStoreReport from "api/apiStoreReport/storeReportApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import reactQueryConfig from "config/reactQueryConfig";

const usePostAllStoreReport = (params) => {
  return useQuery(
    ["postAllStoreReport", params],
    apiStoreReport.postAllStoreReport,
    {
      ...reactQueryConfig,
      enabled: !!params,
    }
  );
};

const useDeleteStoreReport = () => {
  const queryClient = useQueryClient();
  return useMutation(apiStoreReport.deleteStoreReport, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAllStoreReport");
    },
  });
};

const usePutStoreReportStatus = () => {
  const queryClient = useQueryClient();
  return useMutation(apiStoreReport.putStoreReportStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAllStoreReport");
    },
  });
};

export { usePostAllStoreReport, useDeleteStoreReport, usePutStoreReportStatus };
