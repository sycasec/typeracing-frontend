import './LeaderboardPage.css';

import title from '../../assets/title-cropped.png'
import header from '../../assets/lb-header.png'

import Leaderboard from '../../Components/Leaderboard';

import { NavLink } from 'react-router-dom';

const LeaderboardPage: React.FC = () => {
    return (
        <div className="lb-page-container">
            <div className="lb-page-title-container">
                <div className="lb-page-solid-header">
                </div>
                <img src={title} alt="title" className="lb-page-title"/>
            </div>
            <div className="lb-page-header-container">
                <img src={header} alt="header" className="lb-page-header" />
            </div>
            <Leaderboard/>
            <div className="lb-new-player-button-container">
                <NavLink to={"/add"} className="button-link" reloadDocument={false}>
                    <button
                        className="lb-new-player-button"
                        onClick={() => console.log("button clicked")}
                    >
                        NEW PLAYER
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default LeaderboardPage;
