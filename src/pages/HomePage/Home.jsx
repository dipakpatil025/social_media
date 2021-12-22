import React from 'react'
import FeedSection from '../../Components/feed/FeedSection'
import RightBar from '../../Components/rightbar/RightBar'
import Sidebar from '../../Components/sidebar/Sidebar'
import Topbar from '../../Components/Topbar/Topbar'
import "./home.css"
export default function Home() {
    return (
        <>
            <Topbar/>
                <div className="homeContainer">
                    <Sidebar/>
                    <FeedSection/>
                    <RightBar/>
            </div>
        </>

    )
}
