import './App.css'
import LoginPage from "./pages/LoginPage.tsx"
import HomePage from "./pages/HomePage.tsx"
import { Routes, Route } from "react-router-dom";


function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
  );
}

export default App
