import React from 'react'
import "./rightbar.css"
import { Users } from "../../dummyData";
import OnlineFriends from '../OnlineFriends/OnlineFriends';
export default function RightBar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const HomerighrBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src={PF + "gift.png"} alt="" className='birthdayImg' />
                    <span className="birthdayText"><b> Tej Fido </b> and <b> 3 other friends </b>have a birthday today</span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAds" />
                <h4 className="rightbartitle">
                    Online Friends
                </h4>
                <ul className="rightbarFriendList">

                    {Users.map(u => (
                        <OnlineFriends key={u.id} user={u} />
                    ))}


                </ul>
            </>
        )
    }
    const ProfileRightbar = () => {
        return (
            <>
                <h3 className='rightbartitle'>User Information</h3>
                <div className="rightbarInfo">

                    <div className="rightbarInfiItem">
                        <span className="righbarinfoKey">City:</span>
                        <span className="righbarinfoValue"> {user.city}</span>
                    </div>

                    <div className="rightbarInfiItem">
                        <span className="righbarinfoKey">From:</span>
                        <span className="righbarinfoValue">{user.from} </span>
                    </div>

                    <div className="rightbarInfiItem">
                        <span className="righbarinfoKey">Relationship:</span>
                        <span className="righbarinfoValue">{user.relationship===1 ? "Single" : user.relationship === 3 ? "Married" :"-" }</span>
                    </div>
                </div>
                <h3 className='rightbartitle'>User Friends</h3>
                <div className="userfollowings">

                    <div className="userfollowing">
                        <img src={`${PF}person/1.jpeg`} alt="" className='userfollowingImg' />
                        <span className="userfollwingnams">John Ceaser</span>
                    </div>

                  
                </div>
            </>
        )
    }

    return (

        <div className='rightbar'>
            <div className="rightbareWrapper">
                {user? <ProfileRightbar /> :<HomerighrBar/> 
            }
            </div>
        </div>
    )
}
