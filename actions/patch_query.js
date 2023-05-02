import axios from "axios";
import { getApiUrl } from "../constants/url";

const patch_query = async (endpoint, data, id) => {
  const BASE_URL = getApiUrl();
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.patch(`${BASE_URL}${endpoint}${id}/`, data, config);
    return res;
  } catch (err) {
    return err.response;
  }
};

export default patch_query;
