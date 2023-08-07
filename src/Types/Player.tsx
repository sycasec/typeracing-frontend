import { Dayjs } from "dayjs";

type Player = {
    ID:             number,
    Rank:           number,
    Name:           string,
    Score:          number,
    Raw:            number,
    Accuracy:       number,
    DateTime:       Dayjs;
}

export default Player;