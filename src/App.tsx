import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes, useLocation, Navigate } from 'react-router-dom';
import Navbar from './Components/shared/navbar/navbar';
import FrontPage from './Pages/frontPage/frontPage';
import LoginPage from './Pages/loginPage/loginPage';
import CappsulePage from './Pages/cappsulePage/cappsulesPage';
import authStore from './Stores/authStore';

function RequireAuth({ children }: any) {
  const location = useLocation();
  return authStore.user !== undefined ? (
    children
  ) : (
    <Navigate to="/Login" replace state={{ path: location.pathname }} />
  );
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>

          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <FrontPage />
              </>
            } />
            <Route path="/login" element={
              <>
                <LoginPage />
              </>
            } />
            <Route path='/Cappsules' element={
              <RequireAuth>
                <CappsulePage />
              </RequireAuth>
            }>
            </Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
