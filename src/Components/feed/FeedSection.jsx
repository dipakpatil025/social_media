import React from 'react'
import FeedPost from '../FeedPost/FeedPost'
import ShareComponet from '../share/ShareComponet'
import "./feed.css"
import {Posts}  from "../../dummyData";
export default function FeedSection() {
    return (
        <div className='feed'>
            <div className="feedwrapper">
                <ShareComponet/>
                {Posts.map((p)=>{
                    // console.log(p);
                    return <FeedPost key={p.id} post={p}/>
                })}
            </div>
        </div>
    )
}
