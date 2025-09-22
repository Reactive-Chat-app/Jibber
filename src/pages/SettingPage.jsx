import { useState } from 'react';
import './SettingPage.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { FaQuestionCircle,FaCog ,FaUser, FaIdCard, FaLock, FaDatabase, FaBell, FaPaintBrush, FaKeyboard } from "react-icons/fa";



function Setting() {
  return (
    <Router>
   
    <div className="app-background">
      <div className="page-layout">
        {/* Left column (sidebar) */}
        <aside className="sidebar">
            <div className="sidebar-header">
      <FaCog className="menu-icon" /> Settings
  </div>
    <ul className="menu-list">
     <li><FaUser className="menu-icon" /> Account</li>
  <li><FaIdCard className="menu-icon" /> Profile</li>
  <li><FaLock className="menu-icon" /> Privacy</li>

  <li><NavLink to="/notifications"><FaBell className="menu-icon" /> Notifications</NavLink></li>

 
  </ul>
  
  {/* Bottom fixed item */}
  <div className="help-menu">
    <FaQuestionCircle className="menu-icon" /> Help
  </div>
  
        </aside>

        {/* Right column (main content area) */}
        <main className="main-content">
          <Routes>
               <Route path="/notifications" element={<Notifications />} />
           
          </Routes>
       
        </main>
      </div>
    </div>
    </Router>
  );
}

export default Setting;   