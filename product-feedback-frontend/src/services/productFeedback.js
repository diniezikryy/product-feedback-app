import axios from "axios";

const baseURL = "http://localhost:3001/api/productFeedbacks";

const getAll = () => {
  const request = axios.get(baseURL);
  return request.then((response) => response.data);
};

export default { getAll };
