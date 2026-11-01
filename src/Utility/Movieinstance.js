
import axios from "axios";//used to send HTTP requests (like GET, POST, PUT, and DELETE) from a web browser or Node.js server to an API or database

const Movieinstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export { Movieinstance };//to access

