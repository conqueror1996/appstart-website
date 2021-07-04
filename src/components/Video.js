import React,{useState} from 'react'
import ReactPlayer from 'react-player/vimeo'
const Video = () => {
    const [error,setError] = useState(false)
    return (
        <>
           <ReactPlayer muted={true} light={true} url={} previewTabIndex/>
          {error&& <div>ERROR</div>}
        </>
    )
}
export default Video