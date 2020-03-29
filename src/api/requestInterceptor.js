export function onRequest(config) {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `JWT ${token}`
    }
  }
  return config
}

export function onRequestError(error) {
  return Promise.reject(error)
}
