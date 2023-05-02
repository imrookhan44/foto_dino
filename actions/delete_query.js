import axios from "axios";
import { getApiUrl } from "../constants/url";

const delete_query = async (endpoint) => {
  const BASE_URL = getApiUrl();
  try {
    const res = await axios.delete(BASE_URL + endpoint);
    return res;
  } catch (err) {
    return err.response;
  }
};

export default delete_query;
