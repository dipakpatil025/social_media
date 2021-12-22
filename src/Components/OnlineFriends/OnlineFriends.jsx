import React from 'react'
import "./onlineFriends.css"

export default function OnlineFriends({user}) {
    return (
        <div>
            <li className="rightbarfriend">
                <div className="rightbarProfineImgContainer">
                    <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
                    <span className='rightbaronline'></span>
                </div>
                <span className="righbarusername">{user.username}</span>
            </li>
        </div>
    )
}
