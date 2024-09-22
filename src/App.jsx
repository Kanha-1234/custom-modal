import React ,{useState}from 'react'
import './App.css';
import Modal from './Modal';
const App = () => {
  const [isShow,setIsShow] = useState(false);
 const [isOfferAccepted,setofferAccepted] = useState(false)
  const handleopenmodal = ()=>{
    setIsShow(true)
  }

  const handleClose = ()=>{
    setIsShow(false)
  }

  const handleOfferAccept = ()=>{
    setofferAccepted(true);
    setIsShow(false)
  }
  return (
    <div>
      <div className="show-offer">
       {
        !isOfferAccepted &&  <button className="offer-btn" onClick={handleopenmodal}>
        show offer
      </button>
       }
       {
        isOfferAccepted && <div>offer accepted</div>
       }
      </div>
      {
        isShow ? <Modal handleOfferAccept={handleOfferAccept} close={handleClose}></Modal>:null
      }
    </div>
  )
}

export default App
