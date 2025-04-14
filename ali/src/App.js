import { Routes, Route } from 'react-router-dom';
import Booking from './Booking';
import Cardss from './Components/Cardss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Cardss />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
