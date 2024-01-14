import Rightbar from "../components/rightbar/Rightbar";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import Feedbar from "../components/feedbar/Feedbar";
import "./Home.css"
export default function Home() {
    return (
        <>
        <Topbar/>
        <div className="homeContainer">
        <Sidebar/>
        <Feedbar/>
        <Rightbar/>
        </div>
        </>
    )
}