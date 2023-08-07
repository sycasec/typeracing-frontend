import { Dayjs } from "dayjs";

type Player = {
    ID:             number,
    Name:           string,
    Score:          number,
    Accuracy:       number,
    DateTime:       Dayjs;
}

export default Player;