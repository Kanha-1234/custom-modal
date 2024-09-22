import React from 'react'

const Modal = ({close,handleOfferAccept}) => {

    const handleOutsideClick = (e)=>{
       if(e.target.className === "modal"){
        close()
       }
    }
  return (
    <div className='modal' onClick={handleOutsideClick}>
      <div className="modal-content">
      <button className="close-btn" onClick={close} >X</button>
      <div className="content">click the button</div>
      <button className="accept-btn" onClick={handleOfferAccept}>Accept offer</button>
      </div>
    </div>
  )
}

export default Modal
