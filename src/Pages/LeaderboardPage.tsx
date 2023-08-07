import './LeaderboardPage.css';
import title from '../assets/title-cropped.png'
import header from '../assets/lb-header.png'

const LeaderboardPage: React.FC = () => {
    return (
        <div className="lb-page-container">
            <div className="lb-page-title-container">
                <img src={title} alt="title" className="lb-page-title"/>
            </div>
            <div className="lb-page-header-container">
                <img src={header} alt="header" className="lb-page-header" />
            </div>

        </div>
    );
};

export default LeaderboardPage;
