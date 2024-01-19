import './share.css'
import { PermMedia , Label, Room,EmojiEmotions} from "@mui/icons-material"
export default function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                   <img src="./Assets/Webcam/virginiaclasssubmarine.webp" alt="" className="shareProfileImg" />
                   
                   <input type="text" placeholder='what`s your mind Tinega?' className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                    <div className="shareOption">
                            <PermMedia htmlColor='tomato' className='shareIcon' />
                            <span className='shareOptionText'>video or photo</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor='blue' className='shareIcon' />
                            <span className='shareOptionText'>tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor='green' className='shareIcon' />
                            <span className='shareOptionText'>location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='goldenrod'  className='shareIcon' />
                            <span className='shareOptionText'>feelings</span>
                        </div>
                        <button className="shareButton">share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
