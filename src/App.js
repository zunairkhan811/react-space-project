import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchRockets } from './redux/rocket/rocketSlice';
import { fetchMissions } from './redux/mission/missionSlice';
import Navbar from './components/Navbar';
import Mission from './components/Mission';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rocket';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
