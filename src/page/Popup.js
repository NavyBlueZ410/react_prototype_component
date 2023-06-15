import React,{useState} from 'react'
import Modal from '../components/Modal'
import styles from './css/Popup.module.css'

function Popup() {
    const [isOpen,setIsOpen] = useState(false)

    const handleModal = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className={styles.contentPopup}>
        Popup
        <button onClick={() => handleModal()}>open modal</button>
        {
            isOpen ?  
            <Modal
                onClick={handleModal}
            /> : 
            ""
        }
       
    </div>
  )
}

export default Popup