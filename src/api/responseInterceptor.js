const getUnknownError = message => ({
    response: {
      error: [
        message && typeof message === typeof ""
          ? message
          : "Service unavailable. Please try after some time."
      ]
    }
  });
  
  export function onResponse(response) {
    const customResponse = response;
    const { status } = response.data;
    if (status === 500) {
      return Promise.reject(getUnknownError());
    } else if (status === 400) {
      const { errorMessage } = response.data.error[0];
      return Promise.reject(getUnknownError(errorMessage));
    }
    customResponse.data = response.data;
    return customResponse;
  }
  
  export function onResponseError(error) {
    let customError = { ...error };
    const status = error.response
      ? error.response.headers.status || error.response.status
      : -1;
    if (status === 401) {
      localStorage.clear();
      window.location.reload("/");
    } else if (status === 500) {
      customError = getUnknownError();
    } else if (status === 400) {
      customError = {
        response: {
          data: { message: error.response.data.message },
          status: 400
        }
      };
    } else if (status !== 401) {
      customError = {
        response: {
          data: { message: "Service unavailable. Please try after some time." }
        }
      };
    }
    return Promise.reject(customError);
  }