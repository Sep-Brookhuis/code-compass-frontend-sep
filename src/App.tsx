import './App.css';
import LoginPage from "./pages/LoginPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import { Routes, Route } from "react-router-dom";
import CreateUserPage from "./pages/CreateUserPage.tsx";
import Page403 from "./pages/Page403.tsx";


function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create_user" element={<CreateUserPage />} />
        <Route path="/403" element={<Page403 />} />
      </Routes>
  );
}

export default App
