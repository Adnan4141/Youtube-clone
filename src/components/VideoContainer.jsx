/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import API_KEY, { YOUTUBE_VIDEO_API } from "../constant/youtube";
import { useEffect } from "react";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "../utils/appSlice";

const VideoContainer = () => {
  const { video, category } = useSelector((store) => store.app);
  const dispatch = useDispatch();
 console.log(category)

  const fetchingYoutubeVideo = async () => {
    try {  
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
      dispatch(setHomeVideo(res?.data?.items))

    } catch (error) {
      console.log(error);
    }
  };

 const fetchVideoByCategory = async ()=>{
  try {
    const res  = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`)
    dispatch(setHomeVideo(res?.data?.items))
 
  } catch (error) {
    console.log(error)
  }
 }


 useEffect(() => {
  if (category === "All") {
      fetchingYoutubeVideo();
  } else {
      fetchVideoByCategory(category);
  }
}, [category]);

  return (
    <div className="grid grid-cols-4 gap-3">
      {video.map((item, index) => {
        console.log(item.id);
        return (
          <Link to={`/watch?v=${item.id}`} key={index}>
            <VideoCart item={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
