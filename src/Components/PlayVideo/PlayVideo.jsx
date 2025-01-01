import React from 'react';
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';


import { useLocation } from 'react-router-dom';

const PlayVideo = () => {
    const location = useLocation();
    const {state} = location;
    const {url, video_title, channel_img, channel_name, views, time} = state;
  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted ></video> */}
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <h3> {video_title}  </h3>

        <div className="play-video-info">
            <p> {views} &bull; {time} </p>

            <div>
                <span> <img src={like} alt="" /> 125 </span>
                <span> <img src={dislike} alt="" /> 5 </span>
                <span> <img src={share} alt="" /> Share </span>
                <span> <img src={save} alt="" /> Save </span>
            </div>
        </div>

        <hr />

        <div className="publisher">
            <img src={channel_img} alt="" />

            <div>
                <p> {channel_name} </p>
                <span> 1M Subscribers </span>
            </div>

            <button> Suscribe </button>
        </div>

        <div className="vid-description">
            <p> Channel that makes learning easy </p>
            <p>Suscribe Pro Coder to watch more tutorials on web development </p>

            <hr />

            <h4> 130 Comments </h4>

            <div className="comment">
                <img src={user_profile} alt="" />

                <div>
                    <h3> jack Nikolsan <span> 1 day ago </span> </h3>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, necessitatibus, modi obcaecati ad dolorum reprehenderit cum eum iste blanditiis quidem deleniti cupiditate quis voluptates officiis. Temporibus ad libero quam sit. </p>

                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span> 244 </span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            
            <div className="comment">
                <img src={user_profile} alt="" />

                <div>
                    <h3> jack Nikolsan <span> 1 day ago </span> </h3>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, necessitatibus, modi obcaecati ad dolorum reprehenderit cum eum iste blanditiis quidem deleniti cupiditate quis voluptates officiis. Temporibus ad libero quam sit. </p>

                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span> 244 </span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>

            <div className="comment">
                <img src={user_profile} alt="" />

                <div>
                    <h3> jack Nikolsan <span> 1 day ago </span> </h3>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, necessitatibus, modi obcaecati ad dolorum reprehenderit cum eum iste blanditiis quidem deleniti cupiditate quis voluptates officiis. Temporibus ad libero quam sit. </p>

                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span> 244 </span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default PlayVideo;