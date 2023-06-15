import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pets from './Pets';
import PetTypes from './PetTypes';
import Owners from './Owners';
import OwnerForm from './OwnersForm'

function Home() {
  return (
    <div>
      <div>Welcome to the Main Page</div>
      <img src="/pets.png" alt="Pets" />
    </div>
  );
}

function Main() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/pets" style={{ padding: 5 }}>
          Pets
        </Link>
        <Link to="/owners" style={{ padding: 5 }}>
          Owners
        </Link>
        <Link to="/addOwner" style={{ padding: 5 }}>
          Add Owner
        </Link>
        <Link to="/petTypes" style={{ padding: 5 }}>
          Pet Types
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/owners" element={<Owners />} />
        <Route path="/petTypes" element={<PetTypes />} />
        <Route path="/addOwner" element={<OwnerForm />} />
      </Routes>
    </Router>
  );
}

export default Main;
