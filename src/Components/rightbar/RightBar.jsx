import React from 'react'
import "./rightbar.css"
import {Users} from "../../dummyData";
import OnlineFriends from '../OnlineFriends/OnlineFriends';
export default function RightBar() {
 
    return (

        <div className='rightbar'>
            <div className="rightbareWrapper">
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className='birthdayImg'/>
                    <span className="birthdayText"><b> Tej Fido </b> and <b> 3 other friends </b>have a birthday today</span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAds" />
                <h4 className="rightbartitle">
                    Online Friends
                </h4>
                <ul className="rightbarFriendList">

                    {Users.map(u=>(
                        <OnlineFriends key={u.id} user={u}/>
                    ))} 
                

                </ul>
            </div>
        </div>
    )
}
