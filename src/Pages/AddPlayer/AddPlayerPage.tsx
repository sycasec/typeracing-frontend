import './AddPlayerPage.css';

import title from '../../assets/title-cropped.png'

import { Input } from 'antd';
import { useState, useEffect } from 'react';

const AddPlayerPage: React.FC = () => {

    const [username, setUsername] = useState('');

    console.log(username);
    
    return (
        <div className="ap-page-container">
            <div className="ap-page-title-container">
                <div className="ap-page-solid-header">
                </div>
                <img src={title} alt="title" className="ap-page-title"/>
            </div>
            <div className="ap-prompt-container">
                <div className="ap-prompt-box">
                    <div className="ap-input-container">
                        <Input
                            placeholder='USERNAME'
                            bordered={false}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="ap-add-player-button-container">
                        <button
                            className="ap-add-player-button"
                            onClick={() => console.log("ap button clicked")}
                        >
                            NEW PLAYER
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPlayerPage;
