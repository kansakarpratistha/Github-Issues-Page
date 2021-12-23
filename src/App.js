import logo from "./logo.svg";

import MainContainer from "./components/MainContainer";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/page=1" replace />} />
          <Route path="/page=:currentPage" element={<MainContainer />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
