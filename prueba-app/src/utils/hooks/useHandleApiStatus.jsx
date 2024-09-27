import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";

export default function useHandleApiStatus() {
  const { enqueueSnackbar } = useSnackbar();
  const errorCodes = [
    400, 401, 403, 404, 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511,
  ];
  const warningCodes = [0];
  const successCodes = [201, 202, 203, 205, 206];
  const [statusData, setStatusData] = useState({
    statusCode: null,
    message: "",
  });

  useEffect(() => {
    if (statusData.statusCode != null) {
      if (warningCodes.includes(getStatusData().statusCode)) {
        enqueueSnackbar(getStatusData().message, {
          variant: "warning",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      } else if (successCodes.includes(getStatusData().statusCode)) {
        enqueueSnackbar(getStatusData().message, {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      } else if (errorCodes.includes(getStatusData().statusCode)) {
        enqueueSnackbar(getStatusData().message, {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      }
    }
  }, [statusData]);

  const handleSuccessStatus = (response) => {
    setStatusData({
      statusCode: response.data.statusCode,
      message: response.data.message,
    });
  };

  const handleWarningStatus = (error) => {
    setStatusData({
      statusCode: 0,
      message: error,
    });
  };

  const handleErrorStatus = (error) => {
    setStatusData({
      statusCode: error.response.data.statusCode,
      message: error.response.data.message,
    });
  };

  const getStatusData = () => statusData;

  return {
    getStatusData,
    handleSuccessStatus,
    handleWarningStatus,
    handleErrorStatus,
  };
}
