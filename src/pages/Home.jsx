import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import {Link} from 'react-router-dom'


function Home() {
  // create state to do start-lifting
  const [uploadVideostatus, setUploadVideoStatus ] = useState({})
  return (
    <>
    <div className='container mt-5 mb-5 ms-3 d-flex justify-content-between align-items-center'>
      <div className="add-vedios">
        <Add setUploadVideoStatus= {setUploadVideoStatus} />
      </div>
      <Link to={'/watch-history'} style={{textDecoration:'none',color:'white',fontSize:'30px'}} >Watch History</Link>
    </div>
    <div className='container w-100 mt-5 mb-5 d-flex justify-content-between'>
      <div className='all-videos col-lg-8'>
        <h4 className='mb-5 mt-5'>All Videos</h4>
        <View uploadVideostatus={uploadVideostatus}/>
      </div>
      <div className='category col-lg-4'>
        <Category/>
      </div>
    </div> 
    </>
  )
}

export default Home