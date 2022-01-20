import React,{useState,useEffect} from 'react'
import FeedSection from '../../Components/feed/FeedSection'
import RightBar from '../../Components/rightbar/RightBar'
import Sidebar from '../../Components/sidebar/Sidebar'
import Topbar from '../../Components/Topbar/Topbar'
import axios from 'axios';
import "./profile.css"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

export default function Profile() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [user, setUser] = useState({});
    const params = useParams();
    // console.log(params);


    useEffect(() => {
        const fetcUser = async()=>{
            const res = await axios.get(`http://localhost:5000/api/user/?username=${params.username}`)
            setUser(res.data);
            
        }
        fetcUser();
    },[]);
     
    
    return (
        <>
            <Topbar/>
                <div className="profile">
                    <Sidebar/>
                    <div className="profileRight">
                        <div className="profileRightTop">
                            <div className="profileCover">

                                <img src={user.CoverPicture || PF+ "person/noCover.png"} alt="" className=' profileCoverImg' />
                                <img src={user.profilePicture || PF+ "noAvatar.png"} alt="" className='profileUserImg' />
                            </div>
                            <div className="profileInfo">
                                <span className='profileInfoname'>{user.username}</span>
                                <span className='profileDescription'> {user.dec}</span>
                            </div>
                        </div>
                        <div className="profileRightBottom">

                        <FeedSection username={params.username}/>
                        <RightBar user={user} />
                        </div>
                    </div>
            </div>
        </>
    )
}
