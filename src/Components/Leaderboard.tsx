import Player from '../Types/Player';

import './Leaderboard.css'

import type { ColumnsType } from 'antd/es/table';

import { Table } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect } from 'react';

declare var require: any

const Leaderboard: React.FC = () => {
    // var localizedFormat = require('dayjs/plugin/localizedFormat');
    // var localeData = require('dayjs/plugin/localeData');
    // dayjs.extend(localizedFormat);
    // dayjs.extend(localeData)

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

    const rankedData = tempData.map(( player, index) => {
        return {
            ...player,
            Rank: index + 1,
        };
    });

    const columns: ColumnsType<Player> = [
        {
            title: "RANK",
            dataIndex: "Rank",
            key: "Rank",
            align: 'center'
        },
        {
            title: "NAME",    
            dataIndex: "Name",
            key: "Name",
            align: 'center'
        },
        {
            title: "WPM",
            dataIndex: "Score",
            key: "Score",
            align: 'center'
        },
        {
            title: "RAW",
            dataIndex: "Raw",
            key: "Raw",
            align: 'center'
        },
        {
            title: "ACCURACY",
            dataIndex: "Accuracy",
            key: "Accuracy",
            align: 'center'
        },
        {
            title: "TIME",
            dataIndex: "DateTime",
            key: "DateTime",
            align: 'center',
            render: (value: Dayjs) => value.format('DD-MM-YY@HH:mm:ss') 
        }
    ]

    return(
        <div className="leaderboard-container">
            <div className="leaderboard-table-container">
                < Table<Player> 
                    columns={columns} 
                    dataSource={rankedData} 
                    pagination={{hideOnSinglePage:true}}
                    bordered={false}
                />
            </div>
        </div>
    );
};

export default Leaderboard; 