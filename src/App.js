import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mission from './components/Mission';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rocket';

function App() {
  return (
    <BrowserRouter basename="react-space-project">
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
