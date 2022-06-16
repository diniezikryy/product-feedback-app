import axios from "axios";
const baseURL = "http://localhost:3001/api/comments";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const createNewComment = async (content) => {
  const config = {
    headers: { Authorization: token },
  };

  const newCommentObject = { content };
  const response = axios.post(baseURL, newCommentObject, config);
  return response.data;
};

export default { createNewComment, setToken };
