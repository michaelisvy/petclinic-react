import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pets from './PetList';
import PetTypes from './PetTypeList';
import Owners from './OwnerList';
import OwnerForm from './OwnerForm'



function Layout() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/owners" element={<Owners />} />
        <Route path="/petTypes" element={<PetTypes />} />
        <Route path="/addOwner" element={<OwnerForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function HomePage() {
  return (
    <div>
      <div>Welcome to the Home Page</div>
      <img src="/pets.png" alt="Pets" />
    </div>
  );
}

function Menu() {
  return (
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
  )
}

function Footer() {
  return ( <div>Copyright Spring by VMware</div> )
}

export default Layout;
