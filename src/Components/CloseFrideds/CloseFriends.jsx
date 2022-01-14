import React from 'react'
import "./CloseFriends.css";
export default function CloseFriends({ friends }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    
    return (
        <div>
            <li className="sidebarfriends">
                <img src={PF+friends.profilePicture} alt="" className="sidebarfriendImg" />
                <span className="sidebarfriendName">
                    {friends.username}
                </span>
            </li>
        </div>
    )
}
