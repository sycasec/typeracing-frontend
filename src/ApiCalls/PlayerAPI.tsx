import { getAPICall, postAPICall, URL, localURL } from "./CommonApi";
import { MonkeytypeURL, APE_KEY } from "../Helpers/sourceinfo";

import Player from "../Types/Player";

export const getPlayersSorted = async () => {
    try {
        // change to localURL if backend run locally
        const response = await getAPICall(localURL + "Player/sorted", {})
        return { data: response.data };
    } catch (error) {
        return { data: error };
    }
}

export const addPlayer = async (newPlayer: Player) => {
    try {
        const response = await postAPICall(localURL + "Player", newPlayer);
        console.log('Player added')
        console.log(response)
    } catch (error) {
        console.error('Error adding player: ' + error);
    }
}

export const getLatestPlayer = async () => {
    try {
        const headers = {
            "Authorization": "ApeKey " + APE_KEY,
            "Accept" : "application/json"
        }
        const response = await getAPICall(MonkeytypeURL + "/results/last", {headers});
        console.log(response.data.data)
        return {data: response.data.data}
    } catch (error) { 
        return { data: error }
    }
} 