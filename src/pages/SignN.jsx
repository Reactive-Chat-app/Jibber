import { useNavigate } from "react-router-dom";
import './SignN.css';

function SignIn() {
  const navigate = useNavigate();

  return (
<section className="Body">
      <div className="login-container">
        <div className="login-page">
          <div className="login-details">
            <h1 className='shadow'>WELCOME TO JIBBER</h1>
            <h2 className='shadow'>Log-in or sign up</h2>
            <input type="text" placeholder="Enter Your Phone Number" className="inp-Phno" />
            <button className="sign-in-btn" onClick={() => window.location.href = "https://signup1-kappa.vercel.app/"}>sign-in</button>
            <p className='sign-in-text'> sign-in with</p>
            <button className="acc-sign-btn">Google</button>
            <button className="acc-sign-btn">Microsoft</button>
            <button className="acc-sign-btn">Facebook</button>
            <button className="acc-sign-btn">Github</button>
            <p className="divider">or</p>
            {/* ✅ Navigate to main page */}
            <button className="sign-up" onClick={() => navigate("/main-page")}>Sign-up</button>
            {/* onClick={() => navigate("/main-page")} */}
          </div>

          <div className="app-showcase">
            <div className="slider-container">
              <input type="radio" name="slider" id="slide1" defaultChecked />
              <input type="radio" name="slider" id="slide2" />
              <input type="radio" name="slider" id="slide3" />

              <div className="slides">
                <div className="slide s1">
                  <img src="image1.jpg" alt="Image 1" />
                </div>
                <div className="slide s2">
                  <img src="image2.jpg" alt="Image 2" />
                </div>
                <div className="slide s3">
                  <img src="image3.jpg" alt="Image 3" />
                </div>
              </div>

              <div className="navigation-manual">
                <label htmlFor="slide1" className="manual-btn"></label>
                <label htmlFor="slide2" className="manual-btn"></label>
                <label htmlFor="slide3" className="manual-btn"></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
