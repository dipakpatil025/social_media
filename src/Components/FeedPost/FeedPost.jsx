import React,{useEffect,useContext} from 'react'
import {useState} from 'react'
import "./post.css"
import axios from 'axios';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { Users } from "../../dummyData";
import {format} from "timeago.js"
import { Link } from 'react-router-dom';

import { AuthContext } from '../../Context/AuthContext'


export default function FeedPost({post}) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const [like, setLike] = useState(post.likes.length);
    const [islike, setislike] = useState(false);
    const {user:currentUser} = useContext(AuthContext)
    const [postUserName, setpostrUserName] = useState("");
    // console.log(post._id);

    useEffect(() => {
            setislike(post.likes.includes(currentUser._id))
    }, [currentUser._id,post.likes]);
     
    useEffect(() => {
        const fetcUser = async()=>{
            const res = await axios.get(`http://dipsocials.herokuapp.com/api/user?userId=${post.userId}`)
            // console.log(post);  
            const cuser = await axios.get("http://dipsocials.herokuapp.com/api/user/getalldetials/"+post.userId); 
            setpostrUserName(cuser.data.username);
            setUser(res.data);
        }
        fetcUser();
    }, [post.userId])
    
    
    // console.log();
    const LikeHandler = ()=>{
        setLike(islike?like-1:like+1);
        setislike(!islike); 
        try {
            axios.put("http://dipsocials.herokuapp.com/api/posts/"+post._id+"/like",{userId:currentUser._id})
        } catch (error) {
            
        }
    }

    return (
        <div className='post'>
            <div className="postwrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        {/* <img className='postProfileImage' src={(Users.filter((u) =>u.id ===  post.id)[0].profilePicture)} alt="" /> */}
                        {/* <span className="postUserName">{(Users.filter((u) =>u.id ===  post.id)[0].username)}</span> */}
                        <Link to={`profile/${user.username}`} >
                        <img className='postProfileImage' src={user.profilePicture? PF+user.profilePicture  : PF+"person/noAvatar.png"} alt="" />
                        </Link>
                        {/* <span className="postUserName">{user.username}</span> */}
                        <span className="postUserName">{postUserName}</span>
                        <span className="postDate">{format( post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon/>
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText">
                        { post.dec}
                    </span>
                    <br />
                    {/* {post.img} */}
                    <img src={PF+"/post/" + post.img} alt=""  className='postImg'/>
                </div>

                <div className="postBottom">
                    <div className="postBottonLeft">
                        <img className='likeicon' src={`${PF}like.png`} onClick={LikeHandler} alt="" />
                        <img className='likeicon' src={`${PF}heart.png`} onClick={LikeHandler} alt="" />
                        <span className="postlikeCounter">
                        {like} People
                        </span>
                    </div>
                    <div className="postBottonRight">
                        <span className="postComments">{ post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
