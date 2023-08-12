import './App.css'
import LeaderboardPage from './Pages/Leaderboard/LeaderboardPage';
import AddPlayerPage from './Pages/AddPlayer/AddPlayerPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LeaderboardPage/>}
          />
          <Route
            path="/add"
            element={<AddPlayerPage/>}
          />
        </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App
