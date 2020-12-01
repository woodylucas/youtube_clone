import axios from "axios";

const KEY = "AIzaSyDAX5tXvsk8TXejaJ36Whj5J-nRf9dlCH8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
