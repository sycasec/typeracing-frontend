import { getAPICall, postAPICall, URL } from "./CommonApi";
import Player from "../Types/Player";

export const getPlayersSorted = async() => {
    try {
        const response = await getAPICall(URL+"Player/sorted",{})
        return { data: response.data };
    } catch (error) {
        return { data: error };
    }
}