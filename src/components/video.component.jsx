import React, { useRef, useState} from "react";

import VideoFooter from "./videofooter.component";
import VideoSidebar from './videosidebar.component';

import './video.styles.css';

const Video = ({url, channel, description, song, likes, shares, messages}) => {

    const [playing, setPlaying] = useState(false);
    
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false)
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }
    
    return (
        <div className="video">
            <video
                src={url}
                loop
                className="video__player"
                ref={videoRef}
                onClick={handleVideoPress}></video>
            <VideoFooter channel={channel} 
                            description={description}
                            song={song} />
            <VideoSidebar likes={likes} shares={shares}
                            messages={messages} />
        </div>
    )
};

export default Video;