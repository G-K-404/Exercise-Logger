import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ScheduleManager from './pages/ScheduleManager';
import AddExercise from './pages/AddExercise';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/schedule" element={<ScheduleManager />} />
      <Route path="/add-exercise" element={<AddExercise />} />
    </Routes>
  </Router>
);

export default App;