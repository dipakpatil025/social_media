import React,{useContext, useEffect,useState} from 'react'
import "./rightbar.css"
import { Users } from "../../dummyData";
import OnlineFriends from '../OnlineFriends/OnlineFriends';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Check } from '@mui/icons-material';

export default function RightBar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [friends, setfriends] = useState([]);
    const {user:currentUser,dispatch} = useContext(AuthContext)
    const [follow, setFollow] = useState(false);
    useEffect(()=>{
        const getAllDeaials = async() =>{

            const cuser = await axios.get("http://dipsocials.herokuapp.com/api/user/getalldetials/"+currentUser._id); 
            if(cuser.data.followings.includes(user._id)){
                setFollow(true)
            }

        }
        getAllDeaials()

        // setFollow(currentUser.followings.includes(user?.id));
    })
    useEffect(() => {
        const getFiends = async ()=>{
            try {
                if(user){
                // console.log("user Id " + user._id);

                    const friendsList = await axios.get("http://dipsocials.herokuapp.com/api/user/followrs/"+user._id)
                    setfriends(friendsList.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getFiends();
    },[user]);
    const handleclick = async() =>{
        try {
            if(follow){
                await axios.put("http://dipsocials.herokuapp.com/api/user/" + user._id +"/unfollow",{userId:currentUser._id})
                dispatch({type:"UNFOLLOW",payloaf:user._id});
            }
            else{
                await axios.put("http://dipsocials.herokuapp.com/api/user/" + user._id +"/follow",{userId:currentUser._id})
                dispatch({type:"FOLLOW",payloaf:user._id});
            }
        } catch (error) {
            
        }
        setFollow(!follow)
    }
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
            {user.username !==   currentUser.username && (
                <button className='rightbarFollowButton' onClick={handleclick}>
                    {follow ? "unlfollow" : "Follow"}
                    {follow ? <RemoveIcon/> : <AddIcon/>
                    }
                    
                </button>
            )}
            {/* <h1>{user._id}</h1> */}
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
                    {friends.map(friend=>(
                        <Link to={"/profile/"+friend.username} key={friend._id}>

                        <div className="userfollowing" >
                            <img src={friend.profilePicture? friend.profilePicture : `${PF}person/noAvatar.png`} alt="" className='userfollowingImg' />
                            <span className="userfollwingnams">{friend.username}</span>
                        </div>
                        </Link>
                    ))}

                  
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








