import React from 'react';
import './Feed.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import js1 from '../../assets/js (1).jpg';
import js4 from '../../assets/js (3).png';
import development from '../../assets/Development.webp';
import banner from '../../assets/banner.png';
import apnaCollage from '../../assets/download.jpeg';
import thapaTechnical from '../../assets/download (1).jpeg';
import { Link } from 'react-router-dom';
import channelLogo from '../../assets/download.png';

import videoData from '../../data';



const Feed = ({ category }) => {
   
   

    return (
        <div className="feed">
          
          

            {
                videoData.map((data , id) => {
                    return (
                        <Link to={'/video'} state={data} key={id} className='card'>
                            <img src={data.image} alt="Video Thumbnail" />
                            <h2> {data.video_title} </h2>
                            <div className="channel-style">
                                <img className='channel_logo' src={data.channel_img} alt="" />
                                <div>
                                    <h2> {data.channel_name} </h2>
                                </div>
                            </div>
                            <p> 15k Views &bull; 2 days ago </p>
                        </Link>
                    )
                })
            }

        </div>
    )
}

export default Feed;

