import React from 'react'
import "./onlineFriends.css"

export default function OnlineFriends({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div>
            <li className="rightbarfriend">
                <div className="rightbarProfineImgContainer">
                    <img src={PF+user.profilePicture} alt="" className="rightbarProfileImg" />
                    <span className='rightbaronline'></span>
                </div>
                <span className="righbarusername">{user.username}</span>
            </li>
        </div>
    )
}
