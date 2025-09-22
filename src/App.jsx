import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignN from "./pages/SignN";
import MainPage from "./pages/MainPage";
// import Setting from "./pages/SettingPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignN />} />
        <Route path="/main-page" element={<MainPage />} />
        {/* <Route path="/settings" element={<Setting/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
