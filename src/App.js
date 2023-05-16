import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rocket from './components/Rocket';
import Mission from './components/Mission';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
