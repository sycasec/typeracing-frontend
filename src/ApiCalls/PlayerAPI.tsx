import { getAPICall, postAPICall, URL } from "./CommonApi";
import Player from "../Types/Player";

export const getPlayersSorted = async () => {
    try {
        const response = await getAPICall(URL + "Player/sorted", {})
        return { data: response.data };
    } catch (error) {
        return { data: error };
    }
}

export const addPlayer = async (newPlayer: Player) => {
    try {
        const response = await postAPICall(URL + "Player", newPlayer);
        console.log('Player added: ' + response.data);
    } catch (error) {
        console.error('Error adding player: ' + error);
    }
}
