import { useNavigate } from "react-router-dom";
import { BiAnalyse, BiArchiveIn, BiAdjust ,BiArrowBack,BiMenu,BiMenuAltRight} from "react-icons/bi";
import { RiUserCommunityLine, RiChatNewFill } from "react-icons/ri";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { SlEqualizer } from "react-icons/sl";
import './MainPage.css'
function MainPage() {
    const navigate = useNavigate();

  return (
    <>
    <div className="container">
            <div className="mainpage">
                <div className="sidebar">
                    <div className="topnav">
                        <button className="side-nav"><BiAnalyse /></button>
                        <button className="side-nav"><RiUserCommunityLine /></button>
                        <button className="side-nav"><PiPhoneCallDuotone /></button>
                    </div>
                    
                    <div className="chat-list">
                        <div className="search-bar">
                            <input type="search" className='search' placeholder='Search or start new chat' />
                        </div>
                        <div className="chat1">
                            ABC
                        </div>                
                        <div className="chat1">
                            ABC
                        </div>                
                        <div className="chat1">
                            ABC
                        </div>                
                        <div className="chat1">
                            ABC
                        </div>                
                        <div className="chat1">
                            ABC
                        </div>                
                        <div className="chat1">
                            ABC
                        </div>                
                        <div className="chat1">
                            ABC
                        </div>                
             
                    </div>
                    <div className="access-bar">
                        <button className="side-nav"><RiChatNewFill /></button>
                        <button className="side-nav"><SlEqualizer /></button>
                        <button className="side-nav"><BiAdjust /></button>
                    </div>
                </div>
                <div className="maincontent">
                    <div className="navbar">
                        <button className="main-navbar"><BiArrowBack /></button>

                        <h1 className='title'>JIBBER</h1>
                        <button className="main-navbar" onClick={() => window.location.href = "https://settingspage.netlify.app/"}><BiMenuAltRight /></button>
                    </div>
                    <div className="content">
                        <div className="chat">

                        </div>
                        <div className="profileinfo">

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
  );
}

export default MainPage;
