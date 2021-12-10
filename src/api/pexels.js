import axios from "axios";

// AXIOS Configuration with PEXELS API
export default axios.create({
  baseURL: `https://api.pexels.com`,
  headers: {
    Authorization:
      process.env.REACT_APP_PEXELS_API_KEY ||
      "563492ad6f9170000100000181fb8cf17c584f82a3ac65fce02498e4"
  }
});
