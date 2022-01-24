import React,{useContext,useRef,useState} from 'react'
import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { AuthContext } from '../../Context/AuthContext';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';
export default function ShareComponet() {
    const {user}  = useContext(AuthContext);
    const dec = useRef();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [file, setfile] = useState(null);

    const submitHandler = async(e) =>{
        e.preventDefault();
        const newPost ={
            userId : user._id,
            dec :dec.current.value
        }
        if (file) {
            const data = new FormData();
            const fileName = file.name ;

            data.append("file",file);
            data.append('name', fileName);
            // data.append("filename", );
            newPost.img = fileName
            const resData = {
                data,
                name:file
            }
            
            console.log(data);
            try {
                await axios.post("http://dipsocials.herokuapp.com/api/upload",data);
            } catch (error) {
                console.log(error);
            }

        }
        try {
            await axios.post("http://dipsocials.herokuapp.com/api/posts",newPost)
            window.location.reload();
        } catch (error) {
            
        }
    } 

    return (
        <div className='share'>
            
            <div className="sharewrapper">
                <div className="shareTop">
                    <img src={user.profilePicture? user.profilePicture : PF+"/person/1.jpeg"} alt="" className='shareProfilePicture' />
                    <input placeholder={"What's in your mind "+ user.username+" ?"} className="shareInput" ref={dec}/>
                </div>
                <hr className="shareHr" />
                {file &&(
                    <div className="shareImageConatine">
                        <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
                        <CancelIcon className='shareCancelImg' onClick={()=>{
                            setfile(null)
                        }}/>
                    </div>
                )}
                <form className="shareBottom" onSubmit={submitHandler}>
                    <label htmlFor='file' className="shareOptions">
                        <div className="shareOption">
                            <PermMediaIcon htmlColor='tomato'  className='shareIcon'/>
                            <span className='shareOptionText'>Photo/video</span>
                            <input style={{display:"none"}} type="file" id='file' accept='.png, .jpeg, .jpg' onChange={(e)=>setfile(e.target.files[0])} />
                        </div>
                        
                        
                        <div className="shareOption">
                            <LocalOfferIcon  htmlColor='blue' className='shareIcon'/>
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        
                        <div className="shareOption">
                            <LocationOnIcon htmlColor='green' className='shareIcon'/>
                            <span className='shareOptionText'>Location</span>
                        </div>
                        
                        <div className="shareOption">
                            <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon'/>
                            <span className='shareOptionText'>Emotes</span>
                        </div>

                    </label>
                    <button className='shareButton' type='submit'>Share</button>
                </form>
            </div>
            
        </div>
    )
}
