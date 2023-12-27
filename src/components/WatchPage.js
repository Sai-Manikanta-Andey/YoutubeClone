import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import {  useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'

const WatchPage = () => {
  const [searchParam] = useSearchParams()
  
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(closeMenu())
  })

  return (
    <div className="px-20 py-4">
      <div>
        <div>
          <iframe
            className="rounded-xl"
            width="850"
            height="480"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* recommended videos */}
        <div></div>
      </div>
      {/* comments container */}
      <CommentsContainer />
    </div>
  );
}

export default WatchPage