import axios from "axios";
import { BackendURL } from "../Helpers/sourceinfo";

export const URL = BackendURL;

export const postAPICall = (url: string, data:object) => {
    return axios.post(url, data);
}

export const getAPICall = (url: string, data: object) => {
    return axios.get(url, data);
}