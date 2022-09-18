import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import PlaceInfo from './pages/PlaceInfo/PlaceInfo';
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>      
        <Route path="/:placeId" element={<PlaceInfo/>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
