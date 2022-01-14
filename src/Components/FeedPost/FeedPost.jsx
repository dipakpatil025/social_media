import React,{useEffect} from 'react'
import {useState} from 'react'
import "./post.css"
import axios from 'axios';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { Users } from "../../dummyData";
import {format} from "timeago.js"
import { Link } from 'react-router-dom';
export default function FeedPost({post}) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({})
    const [like, setLike] = useState(post.likes.length);
    const [islike, setislike] = useState(false);
    useEffect(() => {
        const fetcUser = async()=>{
            const res = await axios.get(`http://localhost:5000/api/user/${post.userId }`)
            setUser(res.data);
        }
        fetcUser();
    }, [post.userId])
    
    
    console.log();
    const LikeHandler = ()=>{
        setLike(islike?like-1:like+1);
        setislike(!islike); 
    }

    return (
        <div className='post'>
            <div className="postwrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        {/* <img className='postProfileImage' src={(Users.filter((u) =>u.id ===  post.id)[0].profilePicture)} alt="" /> */}
                        {/* <span className="postUserName">{(Users.filter((u) =>u.id ===  post.id)[0].username)}</span> */}
                        <Link to={`profile/${user.username}`} >
                        <img className='postProfileImage' src={user.profilePicture || PF+"person/no_profilePic.png"} alt="" />
                        </Link>
                        <span className="postUserName">{user.username}</span>
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
