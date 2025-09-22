import './LandingPage.css'
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate(); 
  return (
    <>
      <div className="body">
        <div className="con">
          <div className="overlay">
            <div className="container">
              <h1>Welcome to JIBBER</h1>
              <p>Experience seamless conversations like never before.</p>
              <button className="btn" onClick={() => navigate("/signin")}>Get Started</button> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default App;