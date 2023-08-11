import type { ColumnsType } from 'antd/es/table';
import Player from '../Types/Player';

const columns: ColumnsType<Player> = [
    {
        title: "RANK",
        dataIndex: "Rank",
        key: "Rank",
        align: 'center',
        render: (_: any, __: Player, index: number) => index + 1
    },
    {
        title: "USERNAME",
        dataIndex: "name",
        key: "name",
        align: 'center'
    },
    {
        title: "WPM",
        dataIndex: "score",
        key: "score",
        align: 'center'
    },
    {
        title: "RAW",
        dataIndex: "raw",
        key: "raw",
        align: 'center'
    },
    {
        title: "ACCURACY",
        dataIndex: "accuracy",
        key: "accuracy",
        align: 'center'
    },
    {
        title: "TIME",
        dataIndex: "timestamp",
        key: "timestamp",
        align: 'center',
        // render: (value: Dayjs) => value.format('DD-MM-YY@HH:mm:ss')
    }
]

export default columns;