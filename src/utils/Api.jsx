import axios from "axios";

const Api = axios.create({
    baseURL:'https://elite-backend-rhrk.onrender.com/'
})


export const addDetail = (detail) => {
    return Api.post("form/create-form", detail);
}


const ApiIntern =axios.create({
   baseURL: 'https://elite-backend-production.up.railway.app/',
   timeout: 30000 // 30 seconds timeout
})

export const addInternDetail = (detail) => {
    return ApiIntern.post("intern-applied-data/", detail);
}
