import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import {  useSearchParams } from 'react-router-dom'

const WatchPage = () => {
  const [searchParam] = useSearchParams()
  console.log(searchParam.get('v'));
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(closeMenu())
  })

  return (
    <div className='p-4 m-auto'>
      <iframe className='rounded-xl'
        width="850"
        height="480"
        src={"https://www.youtube.com/embed/"+searchParam.get('v') }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default WatchPage