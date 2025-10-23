import axios from "axios";

const Api = axios.create({
    baseURL:'https://elite-backend-rhrk.onrender.com/'
})


export const addDetail = (detail) => {
    return Api.post("form/create-form", detail);
}


