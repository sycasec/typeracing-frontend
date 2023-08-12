import './AddPlayerPage.css';

import title from '../../assets/title-cropped.png'

import { Input } from 'antd';
import { useState, useEffect } from 'react';
import { addPlayer, getLatestPlayer } from '../../ApiCalls/PlayerAPI';
import { useNavigate, NavLink } from 'react-router-dom';
import { toast } from "react-hot-toast";

import toasterConfig from '../../Helpers/ToasterConfig';
import Player from '../../Types/Player';

const AddPlayerPage: React.FC = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [rawPlayerData, setRawPlayerData] = useState<any[]>([]);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    useEffect(() => {
        getLatestPlayer()
            .then((response) => {
                // console.log(response.data);
                setRawPlayerData(response.data);
            });
    }, [])

    const handleButtonClick = () => {
        console.log("click")
        console.log(isButtonClicked)
        console.log(username.trim() !== '')
        if(!isButtonClicked && username.trim() !== '') {
            setIsButtonClicked(true);
            
            console.log('here')
            const newPlayer: Player = {
                name : username,
                score: rawPlayerData.wpm,
                raw: rawPlayerData.rawWpm,
                accuracy: rawPlayerData.acc
            }
            
            addPlayer(newPlayer)
                .then((response) => {
                    console.log(response)
                          
                    setTimeout(() => {
                        navigate("/")
                    }, 2000)
                    setIsButtonClicked(false);
                })
        }
    }
    
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
                            onClick={() => handleButtonClick()}
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
