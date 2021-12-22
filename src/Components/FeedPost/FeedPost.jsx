import React from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData";
export default function FeedPost(props) {
  
    return (
        <div className='post'>
            <div className="postwrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImage' src={(Users.filter((u) =>u.id === props.post.id)[0].profilePicture)} alt="" />
                        <span className="postUserName">{(Users.filter((u) =>u.id === props.post.id)[0].username)}</span>
                        <span className="postDate">{props.post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon/>
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText">
                        {props.post.desc}
                    </span>
                    <img src={props.post.photo} alt=""  className='postImg'/>
                </div>

                <div className="postBottom">
                    <div className="postBottonLeft">
                        <img className='likeicon' src="assets/like.png" alt="" />
                        <img className='likeicon' src="assets/heart.png" alt="" />
                        <span className="postlikeCounter">
                        {props.post.like} People
                        </span>
                    </div>
                    <div className="postBottonRight">
                        <span className="postComments">{props.post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
