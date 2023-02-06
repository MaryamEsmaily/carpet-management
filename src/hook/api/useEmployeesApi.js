import * as apiEmployees from "api/apiEmployees/employeesManagementApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import reactQueryConfig from "config/reactQueryConfig";

const usePostAllEmployees = (params) => {
  return useQuery(["postAllEmployees", params], apiEmployees.postAllEmployees, {
    ...reactQueryConfig,
    enabled: !!params,
  });
};

const useDeleteEmployee = () => {
  const queryClient = useQueryClient();
  return useMutation(apiEmployees.deleteEmployee, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAllEmployees");
    },
  });
};

const usePutEmployeeStatus = () => {
  const queryClient = useQueryClient();
  return useMutation(apiEmployees.putEmployeeStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAllEmployees");
    },
  });
};

const usePostAddEmployee = (params) => {
  const queryClient = useQueryClient();
  return useMutation(apiEmployees.postAddEmployee, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAllEmployees");
    },
  });
};

const usePutEmployee = () => {
  const queryClient = useQueryClient();
  return useMutation(apiEmployees.putEmployee, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAllEmployees");
    },
  });
};

const usePostEmployeeDetails = (params) => {
  return useQuery(
    ["postEmployeeDetails", params],
    apiEmployees.postEmployeeDetails,
    {
      ...reactQueryConfig,
      enabled: !!params,
    }
  );
};

const usePostNewPassword = (params) => {
  return useQuery(["postNewPassword", params], apiEmployees.postNewPassword, {
    ...reactQueryConfig,
    enabled: !!params,
  });
};

export {
  usePostAllEmployees,
  useDeleteEmployee,
  usePutEmployeeStatus,
  usePostAddEmployee,
  usePutEmployee,
  usePostEmployeeDetails,
  usePostNewPassword,
};
