import "./Topbar.css"
import { Search,Person,Chat,Notifications} from "@mui/icons-material"
function Topbar() {
    return (
        <div className="TopbarContainer">
        <div className="topbarLeft">
            <span className="logo">Tinegasocial</span>
        </div>
        <div className="topbarCentre">
            <div className="searchbar">
                <Search className="searchIcon"/>
                <input placeholder="search for friends videos or posts"
                 className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
            <div className="topbarIconItem">
                    <Person/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat/>
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src="/Assets/Webcam/images (1).jpeg" alt="" className="topbarImg" />
        </div>
        </div>
    )
}

export default Topbar
