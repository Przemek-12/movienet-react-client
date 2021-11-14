import './videoPlayer.css';
import axios from 'axios';
import React, { Component} from 'react';

const VideoPlayer = ({videoId})=>{
        return (
            <div className='videoContainer'>
                <video controls>
                    <source  type='video/mp4' src="http://localhost:8000/video" />
                </video>
            </div>
        );
}

export default VideoPlayer;