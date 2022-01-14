import React from 'react'
import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function ShareComponet() {
    
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className='share'>
            
            <div className="sharewrapper">
                <div className="shareTop">
                    <img src={PF+"/person/1.jpeg"} alt="" className='shareProfilePicture' />
                    <input placeholder="What's in your mind diapk ?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        
                        <div className="shareOption">
                            <PermMediaIcon htmlColor='tomato'  className='shareIcon'/>
                            <span className='shareOptionText'>Photo/video</span>
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

                    </div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>
            
        </div>
    )
}
