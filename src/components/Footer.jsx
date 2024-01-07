import React from 'react'
import  '../styles/footer.scss'


const Footer = () => {
  return (
    <footer>
      <div className='left_part'>
        <h1>Google</h1>
        <p>@all rights reserved</p>
      </div>

      <div className='right_part'>
        <h5>Follow us on</h5>
        <a href="https://www.google.com" target={'_black'} >Snapchat</a>
        <a href="https://www.google.com" target={'_black'} >Instagram</a>
        <a href="https://www.google.com" target={'_black'} >Linkedin</a>
        <a href="https://www.google.com" target={'_black'} >Github</a>
      </div>
    </footer>
  )
}

export default Footer;
