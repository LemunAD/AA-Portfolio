import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
  return (
    
    <div className='App'>
      <div class="bg"></div>
  <Sidebar />
  <div className='page'>
    <span className='tags top-tags'>def AZCoding(portfolio):</span>
    <Outlet />

    <span className='tags bottom-tags'>return(portfolio)
    <br />
    <span className='bottom-tag-html'>#Hope you like it !</span>
    
    </span>
    <a href='https://www.linkedin.com/in/adnane-ait-hamou/' rel='noreferrer' target="_blank" className='copy'> A website by Adnane Ait Hamou</a>
    
    </div>
    <div class="star-field">
<div class="layer"></div>
<div class="layer"></div>
<div class="layer"></div>
</div>
  </div>
  )
}

export default Layout
