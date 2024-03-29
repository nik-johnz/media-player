import React from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { viewHistory, deleteVideo } from '../services/allAPI';


function VideoCard({displayVideo,setDeleteVideoStatus}) {
  const [show , setShow] = useState(false);
  const handleClose = ()=> setShow(false);

  const handleShow = async()=>{
     setShow(true)

     const {caption, embedLink} = displayVideo
     const today = new Date
    //  console.log(today);
    let timeStamp = new Intl.DateTimeFormat('en-US',{
      year:'numeric',
      month:'2-digit',
      day:'2-digit',
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit',
    }).format(today)
    console.log(timeStamp);

    let videoDetails ={caption, embedLink, timeStamp}
    await viewHistory(videoDetails)
    }

  const removeVideo = async(id)=>{
    const response = await deleteVideo(id)
    console.log(response);
    setDeleteVideoStatus(true)
  }

  const dragStated = (e,id)=>{
    console.log(`card no:${id} started dragging`);
    // console.log(e);
    //for data transfer
    e.dataTransfer.setData("videoID",id)
  }

  return (
    <>
      <Card style={{width:'100%',height:'260px'}} className='mb-4' draggable onDragStart={(e)=>dragStated(e,displayVideo?.id)}>
        <Card.Img height={'200px'} onClick={handleShow} variant="top" src={displayVideo.url}/>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-center'>
                <h6>{displayVideo.caption.slice(0,15)}...</h6>
                <button onClick={()=>removeVideo(displayVideo?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can fa-sm"></i></button>
            </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className='fs-5'>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400" src={`${displayVideo.embedLink}?autoplay=1`} title={displayVideo.caption} 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard