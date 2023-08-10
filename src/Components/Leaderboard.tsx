import Player from '../Types/Player';

import './Leaderboard.css'

import type { ColumnsType } from 'antd/es/table';

import { Table } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useState, useEffect } from 'react';

import { getPlayersSorted } from '../ApiCalls/PlayerAPI';

const Leaderboard: React.FC = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    // const [isPlayersChanged, setIsPlayersChanged] = useState(false);

    useEffect(() => {
        getPlayersSorted()
            .then((response) => {
                setPlayers(response.data.data)
            });

        const convertedPlayers = players.map(player => ({
            ...player,
            DateTime: dayjs(player.DateTime)
        }));
        setPlayers(convertedPlayers);
    }, [])

    const tempData: Player[] = [
        {
            ID: 0,
            Name: 'Kyle',
            Score: 99.99,
            Raw: 169.99,
            Accuracy: 69.69,
            DateTime: dayjs()
        },
        {
            ID: 1,
            Name: 'Not Kyle',
            Score: 199.99,
            Raw: 269.99,
            Accuracy: 69.69,
            DateTime: dayjs()
        },
        {
            ID: 2,
            Name: 'Is Kyle?',
            Score: 29.99,
            Raw: 129.99,
            Accuracy: 69.69,
            DateTime: dayjs()
        }
    ]

    const columns: ColumnsType<Player> = [
        {
            title: "RANK",
            dataIndex: "Rank",
            key: "Rank",
            align: 'center',
            render: (_: any, __: Player, index: number) => index + 1
        },
        {
            title: "NAME",
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

    console.log(players)

    return (
        <div className="leaderboard-container">
            <div className="leaderboard-table-container">
                < Table<Player>
                    columns={columns}
                    dataSource={players}
                    rowKey="ID"
                    pagination={{ hideOnSinglePage: true }}
                    bordered={false}
                />
            </div>
        </div>
    );
};

export default Leaderboard; 
