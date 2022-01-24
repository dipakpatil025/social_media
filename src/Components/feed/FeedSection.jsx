import React,{useState,useEffect,useContext} from 'react'
import FeedPost from '../FeedPost/FeedPost'
import ShareComponet from '../share/ShareComponet'
import "./feed.css"
import axios from 'axios'
import { AuthContext } from '../../Context/AuthContext'
// import {Posts}  from "../../dummyData";
    
export default function FeedSection({username}) {
    const [posts, setPost] = useState([]);
    const user  = useContext(AuthContext)
    useEffect(() => {
        // console.log(user.user._id);P
        const fetcPost = async()=>{
            // console.log(username);
            const res = (username) 
            ? await axios.get("http://dipsocials.herokuapp.com/api/posts/profile/"+username)
            : await axios.get("http://dipsocials.herokuapp.com/api/posts/timeline/"+user.user._id)
            setPost(res.data.sort((p1,p2)=>{
                return new Date(p2.createdAt) -  new Date(p1.createdAt);
            }));
        }
        fetcPost();
    }, [username,user.user._id])

    return (
        <div className='feed'>
            <div className="feedwrapper">
                {username === user.username && <ShareComponet/>}
                {posts.map((p)=>{
                    // console.log(p);
                    return <FeedPost key={p._id} post={p}/>
                })}
            </div>
        </div>
    )
}
