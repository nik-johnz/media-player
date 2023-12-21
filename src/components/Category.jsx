import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {Row , Col } from 'react-bootstrap';
import VideoCard from './VideoCard'
import { addCategory, getAllCategory, getAVideo, updateCategory, deleteCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Category() {

  const [categoryName, setCategoryName] = useState({})
  const [allCategory, setAllCategory] = useState([])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //function to add category
  const handleAddCategory = async()=> {
    console.log(categoryName);
    if(categoryName){
      let addDetails = {
        categoryName,
        allVideos: []
      }
      //make to call
      const response = await addCategory(addDetails)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success('Category Successfully Added')
        //to make the state null after successfull addition
        setCategoryName("")
        //to close modal
        handleClose()
      }
      else{
        console.log(response);
        toast.error('Something went Wrong. Please try again later')
      }
    }
    else{
      toast.warning('Please Enter the Category Name')
    }
  }

  //function to get all category
  const getallCategory = async()=>{
    const {data} = await getAllCategory()
    // console.log(data);
    setAllCategory(data)
  }
  console.log(allCategory);

  //dragover eventListner
const dragover = (e)=>{
  // this will prevent reload so that the data that we send from videocard.jsx wont be last
  e.preventDefault()
  console.log('inside dragover');
}

 //function to delete category
 const handleDeleteCategory = async(id)=>{
  await deleteCategory(id)
  getAllCategory()
}

const videoDrop =async(e, categoryId)=>{
  console.log(`dropped inside the categoryId ${categoryId}`);
  // to get videoID that is send from videocard component
  const videoid = e.dataTransfer.getData("videoID")
  console.log(videoid);

  //api to get the particular video that is draged
  const {data} = await getAVideo(videoid)
  console.log(data);

  // to find the particular category with specified id
  let selectedCategory = allCategory?.find(item=>item.id===categoryId)
  console.log(selectedCategory);
  
  // add is added to the allVideos array in the particular category with the specified id
  selectedCategory.allVideos.push(data)
  console.log(selectedCategory);

  await updateCategory(categoryId,selectedCategory)
  getAllCategory()
}

 

  useEffect(()=>{
    getallCategory()
  },[])

  return (
    <>
    <div className="d-grid ms-5 mt-5 mb-4 p-3">
        <button onClick={handleShow} className='btn btn-warning w-100'>Add New Category</button>
    </div>

    { allCategory?.length>0?
    allCategory?.map((item)=>(
      <div className='ms-5 mb-3 border border-secondary rounded p-3'>
      <div className="d-flex justify-content-between align-items-center" droppable onDragOver={(e)=>dragover(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
        <h6>{item?.categoryName}</h6>
        <button onClick={()=>handleDeleteCategory(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can fa-sm"></i></button>    
      </div>
      <Row>
        <Col sm={6}>
          {
            item.allVideos?.length>0?
            item.allVideos.map(card=>(<VideoCard displayVideo={card}/>))
             :
            <p>Nothing to Display</p>
          }
        </Col>
      </Row>
      </div>)):
      <p>Nothing to Display</p>
    }
    
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-pencil me-2 text-warning"></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the Form</p>
          <form className='border border-secondary p-3 rounded'>
            <Form.Group className='mb-3' controlId="validationCustom01">
              <Form.Label>Category</Form.Label>
              <Form.Control onChange={(e)=>setCategoryName(e.target.value)} required style={{backgroundColor:'black',color:'white'}} type="text" placeholder="Enter Category Name"/>
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="warning" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    
    </>
  )
}

export default Category