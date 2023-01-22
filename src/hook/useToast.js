import { toast } from "react-toastify";

function useToast() {
  //
  const toasting = {
    success: ({ res, message }) =>
      toast.success(
        <div className="text-white">
          {(message || res?.data?.Message) ?? "با موفقیت انجام شد"}
        </div>
      ),
    error: ({ err, message }) =>
      toast.error(
        <div className="text-white">
          {(message || err?.response?.data?.Message) ?? "خطایی رخ داده است"}
        </div>
      ),
    info: ({ res, message }) =>
      toast.info(
        <div className="text-white">
          {(message || res?.response?.data?.Message) ?? ""}
        </div>
      ),
    warning: ({ res, message }) =>
      toast.warn(
        <div className="text-white">
          {(message || res?.response?.data?.Message) ?? "هشدار"}
        </div>
      ),
  };
  //
  return toasting;
}

export default useToast;
