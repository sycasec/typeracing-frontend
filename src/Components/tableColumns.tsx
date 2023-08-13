import type { ColumnsType } from 'antd/es/table';
import Player from '../Types/Player';

import gold from '../assets/icon-park_gold-medal-two.png'
import silver from '../assets/icon-park_silver-medal-two.png'
import bronze from '../assets/icon-park_bronze-medal-two.png'

const columns: ColumnsType<Player> = [
    {
        title: "RANK",
        dataIndex: "Rank",
        key: "Rank",
        align: 'center',
        render: (text, record, index) => (
            <span style={{alignItems: 'center' }}>
              {index < 3 ? (
                <img
                src={index === 0 ? gold : index === 1 ? silver : bronze}
                alt={`Rank ${index + 1}`}
                style={{ width: '30px', marginBottom: '-10px' }}
              />
              ) : (`${index+1}`)}
            </span>
          ),
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