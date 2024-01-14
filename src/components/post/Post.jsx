import './Post.css'
import {MoreVert} from "@mui/icons-material"
import {  Users } from "../../dummyData"

export default function Post({post}) {
  const user= Users.filter((u)=>u.id===1)
  console.log(user[0].username)
  return (
    <div className='post'>
   <div className="postWrapper">
    <div className="postTop">
    <div className="postTopLeft">
      
    <img src="./Assets/Webcam/kuku.jpg" alt="" className="postProfileImg" />
    
    <span className="postUsername">
      </span>
    <span className="postDate">{post.date}</span>
    </div>
    <div className="postTopRight">
      <MoreVert/>
    </div>
    </div>
    <div className="postCenter">
      <span className="postText">it is my first image</span>
      <img src={post.photo} alt="" className="postImg" />
    </div>
    <div className="postBottom">
      <div className="postBottomLeft">
        <img src="./Assets/Webcam/like.png" alt="" className="likeIcon" />
        <img src="./Assets/Webcam/heart.png" alt="" className="likeIcon" />
       <span className="postLikeCounter">{post.like}</span>
      </div>
      <div className="postBottomRight">
        <span className="postCommentText">{post.Comment}</span>
      </div>
    </div>
   </div>
    </div>
  )
}
