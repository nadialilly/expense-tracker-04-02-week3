import React from 'react'; // import specific objects from a node package
import ReactDOM from 'react-dom/client';
import './index.css'; // import entire contents of file
import Home from './pages/Home'; // import specific objects from a relative file
import ManageAccounts from './pages/ManageAccounts';
import Navigation from './components/Navigation';
import '@fortawesome/fontawesome-free/js/all';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccountDetails from './components/accounts/AccountDetails';

// Where React gets setup
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter> {/* Enable routing functionality across all child components */}
      <Navigation />
      <Container fluid>
        <Routes> {/* Create a grouping of Route components */}
          <Route path="/" element={<Home />} /> {/* Set up individual URLs */}
          <Route path="/manage-accounts" element={<ManageAccounts />} />
          <Route path="/account/:name" element={<AccountDetails />} />
        </Routes>
      </Container>
    </BrowserRouter>
  </>
); // render the react tree into the container
