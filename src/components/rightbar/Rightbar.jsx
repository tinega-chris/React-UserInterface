import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightWrapper">
        <div className="birthdayContainer">
          <img src="./Assets/Webcam/gift-box-color-icon.svg" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Tinega</b> foa and other 3 friends have a birthday today</span>

        </div>
        <img src="./Assets/Webcam/photos.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="./Assets/Webcam/chris.jpg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tinega obwoge</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="./Assets/Webcam/chris.jpg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tinega obwoge</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="./Assets/Webcam/chris.jpg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tinega obwoge</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
