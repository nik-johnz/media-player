import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 flex-column mt-5 mb-5'>
      <div className="footer d-flex align-item-center justify-content-evenly w-100">
        <div className="websites" style={{width:'350px'}}>
        <h4 className='mb-3' ><i class="fa-solid fa-video fa-beat me-3 text-warning"></i>{' '} Media Player</h4>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem hic temporibus perferendis. Quia reiciendis amet quae beatae illum id eius!</h6>
        </div>
        <div className="links d-flex flex-column">
          <h4 className='mb-3'>Links</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home</Link>
          <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}}>Watch History</Link>
        </div>
        <div className="guides d-flex flex-column">
        <h4 className='mb-3'>Guides</h4>
          <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}>React-Bootstrap</Link>
          <Link to={'https://bootswatch.com'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>
        </div>
        <div className="contacts">
          <h4 className='mb-3'>Contacts</h4>
          <div className="d-flex">
            <input type="mail"  className='form-control' placeholder='Enter your e-mail ID' required/>
            <button className='btn btn-warning ms-2'>Subscribe</button>
          </div>
          <div className="d-flex justify-content-evenly align-items-center mt-3">
          <Link to={'https://www.instagram.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
          <Link to={'https://www.twitter.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
          <Link to={'https://www.linkedin.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
          <Link to={'https://www.facebook.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
          </div>
        </div>
      </div>
      <p className='mt-5'>Copyright © 2023 Media Player. Build with React</p>
    </div>
  )
}

export default Footer