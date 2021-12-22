import React from 'react'
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
export default function () {
    return (
        <>
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <span className="logo">Dipak</span>
                </div>
                <div className="topbarCenter">
                    <div className="serchbar">
                        <SearchIcon className='serachIcon' />
                        <input type="text" className="searchInput" placeholder='Search' />
                    </div>
                </div>
                <div className="topbarRight">
                    <div className="topbarLinks">
                        <span className="topbarLink">Homepage</span>
                        <span className="topbarLink">Timeline</span>
                    </div>
                    <div className="topbarIcon">
                        <div className="topbarIconItem">
                            <PersonIcon />
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div className="topbarIconItem">
                            <ChatIcon />
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div className="topbarIconItem">
                            <NotificationsIcon />
                            <span className="topbarIconBadge">1</span>
                        </div>

                    </div>
                    <img src="assets/person/1.jpeg " alt="" className="topbarImg" />
                </div>
            </div>
        </>
    )
}