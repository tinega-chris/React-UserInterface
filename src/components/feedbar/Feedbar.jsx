import Share from "../share/Share"
import Post from "../post/Post"
import "./feedbar.css"
import { Posts } from "../../dummyData"
export default function Feedbar() {
  return (
    <div className="feedbar">
      <div className="feedwrapper">
        <Share/>
        {Posts.map((p)=>(
          <Post key={p.id} post={p}/>
        ))}
      
      </div>
    </div>
  )
}
