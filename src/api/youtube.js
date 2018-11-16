import axios from "axios";

const KEY = "AIzaSyAdvXny2IC9iILcM1_39wBkH9Ca7FtBSko";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
