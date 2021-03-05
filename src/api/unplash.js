// client_id =  OMvoTos1caNW1PWG7Fajs5y-u5Dc3QogvTPaEyY2YOw
import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID OMvoTos1caNW1PWG7Fajs5y-u5Dc3QogvTPaEyY2YOw",
  },
});
