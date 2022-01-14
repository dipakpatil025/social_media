import React,{useState,useEffect} from 'react'
import FeedPost from '../FeedPost/FeedPost'
import ShareComponet from '../share/ShareComponet'
import "./feed.css"
import axios from 'axios'
// import {Posts}  from "../../dummyData";
    
export default function FeedSection({username}) {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        const fetcPost = async()=>{
            console.log(username);
            const res = (username) 
            ? await axios.get("http://localhost:5000/api/posts/profile/"+username)
            : await axios.get("http://localhost:5000/api/posts/timeline/61bd906fcc930a1545f50e40")
            console.log(res);
            setPost(res.data);
        }
        fetcPost();
    }, [])

    return (
        <div className='feed'>
            <div className="feedwrapper">
                <ShareComponet/>
                {posts.map((p)=>{
                    // console.log(p);
                    return <FeedPost key={p._id} post={p}/>
                })}
            </div>
        </div>
    )
}
