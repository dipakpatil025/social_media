import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideocamIcon from '@mui/icons-material/Videocam';
import React from 'react'
import "./sidebar.css"
import CloseFriends from '../CloseFrideds/CloseFriends';
import {Users} from "../../dummyData";
export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarwrapper">
                <ul className="sidebarlist">
                    <li className="sidebarlistItems">
                        <RssFeedIcon className='sodebarIcon'/>
                        <span className="sidebarItemText">
                            Feed
                        </span>
                    </li>
                    
                    <li className="sidebarlistItems">
                        <ChatIcon className='sodebarIcon'/>
                        <span className="sidebarItemText">
                                Chat
                        </span>
                    </li>
                    <li className="sidebarlistItems">
                        <VideocamIcon className='sodebarIcon'/>
                        <span className="sidebarItemText">
                            Video
                        </span>
                    </li>
                    
                    <li className="sidebarlistItems">
                        <RssFeedIcon className='sodebarIcon'/>
                        <span className="sidebarItemText">
                            Feed
                        </span>
                    </li>
                    
                    <li className="sidebarlistItems">
                        <ChatIcon className='sodebarIcon'/>
                        <span className="sidebarItemText">
                                Chat
                        </span>
                    </li>
                    <li className="sidebarlistItems">
                        <VideocamIcon className='sodebarIcon'/>
                        <span className="sidebarItemText">
                            Video
                        </span>
                    </li>
                    

                </ul>
                <button className='sizebarbutton'>Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarfriendsList">
                   {
                       Users.map(u=>(
                           <CloseFriends key={u.id} friends={u}/>
                       ))
                   }
                </ul>
            </div>
        </div>
    )
}
