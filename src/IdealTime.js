import React  from 'react';
import { useRef,useState } from 'react';
import IdleTimer from 'react-idle-timer';
import Modal from 'react-modal';

Modal.setAppElement('#root')

function IdleTimerContainer(){
const [isloggedIn, setIsLoggedIn] = useState(true)
const [modalIsOpen,setmodalIsOpen]=useState(false)
const idleTimerRef = useRef(null)
const sessionTimeoutRef = useRef(null)
const onIdle = () =>{
  console.log('User is idle')
  setmodalIsOpen(true)
  sessionTimeoutRef.current = setTimeout(LogOut,15000)
}
const Stay = () => {
  setmodalIsOpen(false)
  console.log('active')
}
const LogOut =() => {
  setmodalIsOpen(false)
  setIsLoggedIn(false)
  clearTimeout(sessionTimeoutRef.current)
  console.log('LogOut')
}
  return(
    <>
    {
      isloggedIn ? <h2> Hello User</h2>:<h2> Hello Guest </h2>
    }

    <Modal isOpen={modalIsOpen}>
      <h2>You have been idle for a while!</h2>
      <button onClick={LogOut}>LogOut</button>
      <button onClick={Stay}>Stay</button>
      </Modal>
    <IdleTimer ref={idleTimerRef} timeout={5*1000} onIdle={onIdle}>
    </IdleTimer>
    </>
  );
}
export default IdleTimerContainer