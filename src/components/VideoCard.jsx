import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { addHistory, deleteVideos } from '../servicess/Allapi';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';




function VideoCard({ display, setDeleteVideo, isPresent }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);

    const { caption, embeded_link, url } = display
    const today = new Date()
    console.log(today);
    const time_stamp = new Intl.DateTimeFormat("en-US", { year: "numeric", month:"2-digit",day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit', }).format(today)
    console.log(time_stamp);


    const newVideos = { caption, embeded_link, url, time_stamp }
    const response = await addHistory(newVideos)
    console.log(response);


  }
  const removeVideo = async (id) => {
    console.log(id);
    const deletrespponses = await deleteVideos(id)
    setDeleteVideo(true)
  }

  const dragStart = (e, id) => {
    console.log("id", id);
    e.dataTransfer.setData("id", id)

  }

  return (
    <div className='bg-light mb-5'>

      <Card style={{ width: '100%' }} draggable onDragStart={(e) => dragStart(e, display?.id)}>
        <Card.Img variant="top" style={{ height: '12rem', width: '100%' }} src={display?.url} onClick={handleShow} />
        <Card.Body className='d-flex justify-content-between align-items-center' >
          <Card.Text style={{ fontSize: '14px' }}>
            {display?.caption}
            {!isPresent && <button className='btn btn-danger ms-4' onClick={(e) => removeVideo(display?.id)}><i class="fa-solid fa-trash-can"></i></button>
            }</Card.Text>
        </Card.Body>
      </Card>



      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> {display.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="460" height="300" src={`${display.embeded_link}?autoplay=1`} title={display.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default VideoCard