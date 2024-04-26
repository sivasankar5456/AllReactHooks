import React, { useRef, useState } from 'react'
import ConfirmationModal from '../../components/ConfirmationModal';

const _useImperativeHandle = () => {

  const [open, setOpen] = useState(false);
  const modalRef = useRef()

  return (
    <>
    <h1>useImperativeHandle Hook</h1>
      <button onClick={() => setOpen(true)} >Open</button>
      <button onClick={() => modalRef.current.focusCloseBtn()} >Focus Close</button>
      <button onClick={() => modalRef.current.focusConfirmBtn()}>Focus Confirm</button>
      <button onClick={() => modalRef.current.focusDenyBtn()}>Focus Deny</button>
      <br /> <br />
      <ConfirmationModal
        ref={modalRef}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}

export default _useImperativeHandle
