import "./rightbar.css"
import { Users } from '../../dummyData'
import Online from "../online/Online"
export default function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="Assets/Webcam/gift-box-color-icon.svg" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Tinega, foa</b>  and <b>other 3 friends </b> have a birthday today</span>

        </div>
        <img src="Assets/Webcam/photos.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }
  const ProfileRightBar = () => {
    return <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightBarInfo">
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">city:</span>
          <span className="rightBarInfoValue">Newyork</span>
        </div>
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">From:</span>
          <span className="rightBarInfoValue">kenya</span>
        </div>
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">Relationship:</span>
          <span className="rightBarInfoValue">single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="Assets/Webcam/unsplash6.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">chris</span>
        </div>
        <div className="rightbarFollowing">
          <img src="Assets/Webcam/unsplash (1).jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Whitney</span>
        </div>
        <div className="rightbarFollowing">
          <img src="Assets/Webcam/unsplash7.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Diana</span>
        </div>
        <div className="rightbarFollowing">
          <img src="Assets/Webcam/unsplash8.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Diana</span>
        </div>
        <div className="rightbarFollowing">
          <img src="Assets/Webcam/unsplash5.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Rihanna carter</span>
        </div>
      </div>
    </>


  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar/>:<HomeRightBar/>}
      </div>
    </div>
  )
}
