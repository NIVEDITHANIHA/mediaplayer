import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { uploadVideos } from '../servicess/Allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Add({ setGetVideo }) {
  console.log('setGetVideo', setGetVideo);
  const [show, setShow] = useState(false);
  const [video, setVideo] = useState({
    id: "",
    caption: "",
    url: "",
    embeded_link: "",

  });

  const embededVideos = (e) => {
    const { value } = e.target

    console.log(value.slice(-11));
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({ ...video, embeded_link: link })
  }
  console.log(video);

  const handleUpload = async () => {
    const { id, caption, url, embeded_link } = video
    if (!id || !caption || !url || !embeded_link) {
      toast.warning('Fill the Form')
    }
    else {
      const response = await uploadVideos(video)
      console.log(response);
      setGetVideo(response)
      if (response.status >= 200 && response.status < 300) {
        toast.success(`${response.data.caption} successfully created`)
        handleClose()
      } else {
        toast.error("Something Went Erong")
      }
    }



  }








  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className='d-flex p-5 mb-5'>

        <h4 >UPLOAD NEW VIDEO</h4>
        <i class="fa-solid fa-cloud-arrow-up fa-3x ms-2 mb-3 text-warning" onClick={handleShow}></i>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><i class="fa-solid fa-film fa-2x me-3 text-warning"></i>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please Fill the Form

          <input type="text" className='form-control mb-2 p-3 mt-2' onChange={((e) => { setVideo({ ...video, id: e.target.value }) })} placeholder='Enter Video Id' />
          <input type="text" className='form-control mb-2 p-3' onChange={((e) => { setVideo({ ...video, caption: e.target.value }) })} placeholder='Enter Video Caption' />
          <input type="text" className='form-control mb-2 p-3' onChange={((e) => { setVideo({ ...video, url: e.target.value }) })} placeholder='Enter Video Image Url' />
          <input type="text" className='form-control mb-2 p-3' onChange={(e) => embededVideos(e)} placeholder='Enter Video URL' />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload} >
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />


    </div>
  )
}

export default Add