import './CloseFriend.css'

export default function CloseFriend({user}) {
  return (
    <div>
    <li className="sidebarFriend">
                        <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">{user.username}</span>
                    <p className="sidebarfriendinfo">Tinega's f-22 raptor</p>
                    </li>
    </div>
  )
}
