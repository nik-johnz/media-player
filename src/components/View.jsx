import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allAPI'

function View(uploadVideoStatus) {

  const [allVideo , setAllVideo] = useState([])

  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)

  const getAllUploadedVideos = async()=>{
    const response = await getAllVideos()
    // console.log(response);
    const {data} = response
    // console.log(data);

    setAllVideo(data)
  }

  console.log(allVideo);

  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoStatus(false)
  },[uploadVideoStatus, deleteVideoStatus])

  return (
    <>
    <Row>
        {allVideo.length>0?
        allVideo.map((videos)=>( 
        <Col md={3}>
        <VideoCard displayVideo = {videos} setDeleteVideoStatus={setDeleteVideoStatus} /> 
        </Col>
        ))
          :
        <p>Nothing to Display</p> }
    </Row>
    </>
  )
}

export default View