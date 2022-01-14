import React from 'react'
import FeedSection from '../../Components/feed/FeedSection'
import RightBar from '../../Components/rightbar/RightBar'
import Sidebar from '../../Components/sidebar/Sidebar'
import Topbar from '../../Components/Topbar/Topbar'
import "./profile.css"
export default function Profile() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    
    return (
        <>
             <Topbar/>
                <div className="profile">
                    <Sidebar/>
                    <div className="profileRight">
                        <div className="profileRightTop">
                            <div className="profileCover">

                                <img src={`${PF}post/3.jpeg`} alt="" className=' profileCoverImg' />
                                <img src={`${PF}person/7.jpeg`} alt="" className='profileUserImg' />
                            </div>
                            <div className="profileInfo">
                                <span className='profileInfoname'>Diapk Patil</span>
                                <span className='profileDescription'>hello i ama .......</span>
                            </div>
                        </div>
                        <div className="profileRightBottom">

                        <FeedSection username="test"/>
                        <RightBar profile />
                        </div>
                    </div>
            </div>
        </>
    )
}
