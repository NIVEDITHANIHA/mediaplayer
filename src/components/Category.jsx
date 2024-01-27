import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { addCategory, deleteCategories, getCategories, getVideos, getVideosId, updateCategories } from '../servicess/Allapi';
import { ToastContainer, toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoCard from './VideoCard';

function Category() {
  const [getCategoryList, setGetCategoryList] = useState([])
  const [removeCategoryList, setRemoveCategoryList] = useState()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /* function to  ADD categories*/

  const [categorys, setcategorys] = useState({
    category_name: "", allvideo: []
  })
  const CategoryChange = (e) => {
    setcategorys({ category_name: e.target.value, allvideo: [] })

  }


  const handleSubmit = async () => {
    setcategorys("")
    const { category_name } = categorys
    if (!category_name) {
      toast.warning('fill the Form')
    }
    else {
      const addedCaategory = await addCategory(categorys)
      console.log(addedCaategory);
      if (addedCaategory.status > 200 && addedCaategory.status < 300) {
        toast.success(`${addedCaategory.data.category_name} Successfully added`)
        getCategoryes();
        handleClose();

      }

      else {
        toast.error('Something Wrong Happened')
      }
    }
  }
  /* function to  Get categories*/

  const getCategoryes = async () => {
    const { data } = await getCategories()
    setGetCategoryList(data);
  }

  useEffect(() => {
    getCategoryes();
  }, [removeCategoryList])

  /* Deleted the categiory* */
  const removedCategory = async (id) => {
    const deleteCategoryList = await deleteCategories(id)
    console.log(deleteCategoryList);
    setRemoveCategoryList(deleteCategoryList)


  }
  const dragOver = (e) => {
    e.preventDefault();

  }
  const dropVideo = async (e, categoryid) => {
    const VideoId = e.dataTransfer.getData('id')
    console.log("VideoId", VideoId)

    const getVideosData = await getVideosId(VideoId)
    console.log("getVideosData", getVideosData.data);

    const selectedvideos = getCategoryList.find((item) => item.id === categoryid)
    selectedvideos.allvideo.push(getVideosData.data)
    console.log("selectedvideos", selectedvideos);

    const updatedCategoryResponse = await updateCategories(categoryid, selectedvideos)
    console.log(updatedCategoryResponse.data);

    if (updatedCategoryResponse.status >= 200 && updatedCategoryResponse.status < 300) {
      toast.success(` Video No : ${getVideosData.data.id} Addedd to the Category ${selectedvideos.category_name} `)
    } else {
      toast.error("Something Wrong Happened")
    }


    getCategoryes();










  }

  return (
    <div className='d-grid ms-3'>
      <button className='bg-warning' onClick={handleShow}>Category</button>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><i class="fa-regular fa-rectangle-list fa-2x  p-2"></i>Categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>




          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Category Name
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name='category_name'
              onChange={(e) => CategoryChange(e)}


            />
          </InputGroup>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />


      {getCategoryList?.length > 0 ? getCategoryList?.map((catlist) => (
        <Card className='m-3 dd-flex justify-content-between p-3' onDragOver={(e) => dragOver(e)} onDrop={(e) => dropVideo(e, catlist.id)}>
          <Card.Body>{catlist?.category_name}</Card.Body>
          <Row>
            <Col>{catlist?.allvideo.length > 0 ? catlist?.allvideo.map((items) => (
              <VideoCard display={items} isPresent={true} />
            )) :
              <p className='p-4 m-4 text-warning fs-5'>No Categories Found</p>
            }
            </Col>
          </Row>
          <button className='btn btn-danger' onClick={() => removedCategory(catlist?.id)} style={{ fontSize: '10px' }} ><i class="fa-solid fa-trash-can"></i></button>

        </Card>
      )) :
        <p className='p-4 m-4 text-warning fs-5'>No Categories Found</p>
      }

    </div >
  )
}

export default Category