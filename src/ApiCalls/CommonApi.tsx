import axios from "axios";
import { BackendURL, localhostURL } from "../Helpers/sourceinfo";

export const URL = BackendURL;
export const localURL = localhostURL;

export const postAPICall = (url: string, headers:object) => {
    return axios.post(url, headers);
}

export const getAPICall = (url: string, headers: object) => {
    return axios.get(url, headers);
}