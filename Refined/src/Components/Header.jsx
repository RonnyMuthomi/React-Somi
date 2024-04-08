
import { useState } from 'react'
import './Styles/Header.css'
import Modal from 'react-modal'
import {Link}from 'react-router-dom'
import Modals from './Modals';
import LoginModal from './LoginModal';
import Searchbar from './Searchbar';



function Header() {
  const [modal, setModal]=useState(false);
  const [visible, setVisible]=useState(false);
//condition to hide scroll bar when modal is open
  if (modal){
    document.body.classList.add('active-modal')
  }
  else{
    document.body.classList.remove('active-modal')
  }
  if(visible){
    document.body.classList.add('open-modal')
  }
  else{document.body.classList.remove('open-modal')}
  return (
    <div>
      <header>
        <Link to='/' className='title'>PeerSpace</Link>
        
        <Searchbar/>
        <div className='buttons'>
         
          <button id='login' onClick={()=>setVisible(true)}>login</button>
          <button id='register' onClick={()=>setModal(true)}>Register</button>
          <div className='searchbar'>
          
          </div>
        </div>
        
      </header>
       
       {/*register modal */}
      <Modal className='openmodal' isOpen={modal} onRequestClose={()=>setModal(false)} style={{
        overlay:{
          background:"rgba(49, 49, 49, 0.8)"
        }
      }}>
       <Modals/>
      </Modal>
      {/*login modal */}
      <Modal className='loginmodal' isOpen={visible} onRequestClose={()=>setVisible(false)} style={{overlay:{
        background:"rgba(49, 49, 49, 0.8)"
      }}}>
        
        <LoginModal/>
      </Modal>

    </div>
  );
}

export default Header;
