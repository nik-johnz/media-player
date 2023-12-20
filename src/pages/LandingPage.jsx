 import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom'

function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
      <Row className='mt-5 mb-5 d-flex align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
          <h3 className='mb-5'>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed quasi earum officia sunt quam id! Placeat, 
            magnam distinctio! Totam placeat optio eveniet. Tempora nisi vitae voluptate in sint corrupti quos at rem. 
            Dolore natus deleniti minus nam accusamus consectetur cum mollitia non deserunt eveniet eius error id voluptatem 
            eligendi quo sit consequatur ipsa placeat temporibus, nemo quisquam animi libero quaerat? Doloremque consequuntur ipsa, 
            temporibus architecto voluptas, itaque quis cumque quos recusandae cum ducimus at nesciunt fuga voluptates rerum explicabo 
            maxime vitae? Iusto aliquid delectus amet in et accusamus temporibus nobis reiciendis, iure numquam quam nisi non veritatis minus aut!</p>
            <button onClick={()=>navigateByUrl('/home')} className='btn btn-warning mt-5'>Get Started <i class="fa-solid fa-circle-arrow-right ms-3"></i></button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img src="https://media.tenor.com/nTbpZveJwKEAAAAC/music-beats.gif" alt="no image" width={"500px"} height={"500px"}/>
        </Col>
      </Row>
      <div className='mt-5 mb-5 d-flex align-items-center justify-content-center flex-column'>
        <h3>Features</h3>
        <div className='cards d-flex align-items-center justify-content-evenly w-100 mt-5 mb-5'>

        <Card className='p-4' style={{ width: '22rem' }}>
          <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>

        <Card className='p-4' style={{ width: '22rem' }}>
          <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
            <Card.Body>
              <Card.Title>Categorized Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>

        <Card className='p-4' style={{ width: '22rem' }}>
          <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
        </div>

      </div>
      <div className='container mt-5 mb-5 border border-2 border-secondary rounded p-5 d-flex align-items-center justify-content-between w-100'>
        <div className='col-lg-5'>
        <h3 className='mb-5 text-warning'>Simple fast and Powerful</h3>
        <p><span className='fs-5 fw-bolder'>Play Everything</span> : Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Blanditiis at mollitia eius laborum iure amet necessitatibus possimus tempora aut nemo.</p>
        <p><span className='fs-5 fw-bolder'>Play Everything</span> : Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Blanditiis at mollitia eius laborum iure amet necessitatibus possimus tempora aut nemo.</p>
        <p><span className='fs-5 fw-bolder'>Play Everything</span> : Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Blanditiis at mollitia eius laborum iure amet necessitatibus possimus tempora aut nemo.</p>
        </div>
        <div className='col-lg-5'>
        <iframe width="100%" height="300" src="https://www.youtube.com/embed/3wDiqlTNlfQ" title="LEO - Naa Ready Song Video 
        | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div>
      </div>
    </>
  )
}

export default LandingPage