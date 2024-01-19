import './Profile.css'
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feedbar from "../../components/feedbar/Feedbar";
export default function Profile() {
    return (

        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="Assets/Webcam/chris.jpg" alt="" className="profileUserImg" />
                            <img src="Assets/Webcam/evening.jpg" alt="" className="profileCoverImg" />
                        </div>
                        <div className="profileInfo">
                            <h4  className='profileInfoName'>Tinega.O</h4>
                            <span className="profileInfoDec">hello my friends</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feedbar />
                        <Rightbar profile />
                    </div>
                </div>

            </div>
        </>
    )
}
