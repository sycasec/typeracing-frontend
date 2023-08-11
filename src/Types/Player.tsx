import { Dayjs } from "dayjs";

type Player = {
    id?: number,
    name: string,
    score: number,
    raw: number,
    accuracy: number,
    timestamp?: Dayjs;
}

export default Player;
