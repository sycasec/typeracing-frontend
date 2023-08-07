import Player from '../Types/Player';

import './Leaderboard.css'

import type { ColumnsType } from 'antd/es/table';

import { Table } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect } from 'react';


const Leaderboard: React.FC = () => {

    const tempData: Player[] = [
        {
            ID: 0,
            Name: 'Kyle',
            Score: 99.99,
            Accuracy: 69.69,
            DateTime: dayjs() 
        }
    ]

    const columns: ColumnsType<Player> = [
        {
            title: "Name",
            dataIndex: "Name",
            key: "Name",
        },
        {
            title: "Score",
            dataIndex: "Score",
            key: "Score",
        },
        {
            title: "Accuracy",
            dataIndex: "Accuracy",
            key: "Accuracy",
        }
    ]

    return(
        <div className="leaderboard-container">
            < Table<Player> 
                columns={columns} 
                dataSource={tempData} 
                pagination={{hideOnSinglePage:true}}
            />
        </div>
    );
};

export default Leaderboard; 