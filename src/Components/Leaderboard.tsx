import Player from '../Types/Player';

import './Leaderboard.css'

import columns from './tableColumns';

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
                // console.log(response.data.data)
                const playerData = response.data.data;
                console.log(playerData);
                const convertedData = playerData.map(player => ({
                    ...player,
                    timestamp: dayjs(player.timestamp).format('YYYY-MM-DD HH:mm:ss')
                }));
                setPlayers(convertedData);
            });
    }, []) 

     
    return (
        <div className="leaderboard-container">
            <div className="leaderboard-table-container">
                < Table<Player>
                    className="leaderboard-table-actual"
                    columns={columns}
                    dataSource={players}
                    rowKey="ID"
                    pagination={ false }
                    bordered={false}
                    scroll={{ y: "50vh" }}
                />
            </div>
        </div>
    );
};

export default Leaderboard; 
