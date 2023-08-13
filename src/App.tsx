import './App.css'
import LeaderboardPage from './Pages/Leaderboard/LeaderboardPage';
import AddPlayerPage from './Pages/AddPlayer/AddPlayerPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

function App() {

  return (
    <div className="App">
      <div className='toaster-container'>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
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
