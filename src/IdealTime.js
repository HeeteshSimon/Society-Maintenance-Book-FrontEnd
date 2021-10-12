import React from 'react';
import { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import IdleTimer from 'react-idle-timer';
import Modal from 'react-modal';
import { useHistory } from 'react-router';

Modal.setAppElement('#root')

function IdleTimerContainer() {
  let history = useHistory();
  const loginStatus = localStorage.getItem("isLoggedIn") === null ? false : localStorage.getItem("isLoggedIn");
  const [isloggedIn, setIsLoggedIn] = useState(loginStatus);
  const [modalIsOpen, setmodalIsOpen] = useState(false)
  const idleTimerRef = useRef(null)
  const sessionTimeoutRef = useRef(null)
  const onIdle = () => {
    console.log('User is idle')
    setmodalIsOpen(true)
    sessionTimeoutRef.current = setTimeout(LogOut, 15*1000)
  }
  const Stay = () => {
    setmodalIsOpen(false)
    clearTimeout(sessionTimeoutRef.current)
    console.log('active')
  }
  const LogOut = () => {
    setmodalIsOpen(false)
    setIsLoggedIn(false)
    localStorage.clear();
    history.push("/");
    clearTimeout(sessionTimeoutRef.current)
    console.log('LogOut')
  }
  {* Comment add kar raha hu *}
  if (loginStatus === null || loginStatus === false) {
    window.location.href = "/";
  }
  return (
    <>
      
          <>
            <Modal isOpen={modalIsOpen}>
              <h2>You have been idle for a while!</h2>
              <Button onClick={LogOut} variant="danger" >LogOut</Button>
              <Button onClick={Stay}>Stay</Button>
            </Modal>
            <IdleTimer ref={idleTimerRef} timeout={50*1000} onIdle={onIdle}>
            </IdleTimer>
          </>


    </>
  );
}
export default IdleTimerContainer
