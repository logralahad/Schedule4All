import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:9595/schedule4all",
    headers: {
        "Content-type": "application/json"
    }
});