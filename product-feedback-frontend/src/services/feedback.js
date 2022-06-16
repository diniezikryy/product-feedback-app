import axios from "axios";
const baseURL = "http://localhost:3001/api/feedbacks";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseURL);
  return request.then((response) => response.data);
};

const createNewFeedback = async (content) => {
  const config = {
    headers: { Authorization: token },
  };
  const newFeedbackObject = { content };
  const response = await axios.post(baseURL, newFeedbackObject, config);
  return response.data;
};

const editFeedback = async (content) => {
  const config = {
    headers: { Authorization: token },
  };
  const updatedFeedbackObject = content;
  const response = await axios.put(
    `${baseURL}/${updatedFeedbackObject.id}`,
    updatedFeedbackObject,
    config
  );
  return response.data;
};

export default { editFeedback, getAll, createNewFeedback, setToken };
