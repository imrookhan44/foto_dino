import axios from "axios";
import { getApiUrl } from "../constants/url";

const get_query = async (endpoint) => {
  const BASE_URL = getApiUrl();
  try {
    const res = await axios.get(BASE_URL + endpoint);
    return res;
  } catch (err) {
    return err.response;
  }
};

export default get_query;
