export const getApiError = (error: any, defaultMessage?: string) => {
  if (!error || !error.response) {
    return "Something went wrong";
  }

  if (error.response.data) {
    if (typeof error.response.data === "string") {
      return error.response.data;
    }
    if (typeof error.response.data.message === "string") {
      return error.response.data.message;
    }
    if (typeof error.response.data.error === "string") {
      return error.response.data.error;
    }
  }

  return defaultMessage || "Something went wrong";
};
