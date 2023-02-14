import * as apiAuth from "api/apiAuth/authApi";
import { useMutation } from "@tanstack/react-query";

const usePostLogin = () => {
  return useMutation(apiAuth.postLogin);
};

export { usePostLogin };
