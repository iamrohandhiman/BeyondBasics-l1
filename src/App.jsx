import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import EventDetailsPage from './EventDetailsPage'; // <-- create this component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event-details" element={<EventDetailsPage />} />
        {/* Optional: Add /apply or other routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
