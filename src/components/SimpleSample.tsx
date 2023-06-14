import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pets from './Pets'
import PetTypes from './PetTypes'

function Home() {
  return (
    <div>
      <div>Welcome to the Main Page</div>
      <img src="/pets.png" alt="Pets" />
    </div>
  );
}

function SimpleSample() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
          Home
          </Link>
          <Link to="/pets" style={{ padding: 5 }}>
          Pets
          </Link>
          <Link to="/petTypes" style={{ padding: 5 }}>
          Pet Types
          </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/petTypes" element={<PetTypes />} />
      </Routes>
    </Router>
  );
}

export default SimpleSample;