import axios from "axios";
import { getApiUrl } from "../constants/url";


const post_query = async (endpoint, data) => {
const BASE_URL = getApiUrl();
try {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await axios.post(`${BASE_URL}${endpoint}`, data, config);
  return res;
} catch (err) {
  return err.response;
}
};

export default post_query;
