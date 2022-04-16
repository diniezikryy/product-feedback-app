import axios from "axios";

const baseURL = "http://localhost:3001/api/feedbacks";

const getAll = () => {
  const request = axios.get(baseURL);
  return request.then((response) => response.data);
};

const createNewFeedback = async (content) => {
  const newFeedbackObject = { content };
  const response = await axios.post(baseURL, newFeedbackObject);
  return response.data;
};

export default { getAll, createNewFeedback };
