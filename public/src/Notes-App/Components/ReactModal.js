import Modal from "react-modal";
import React from 'react';

const ReactModal=(props)=>(
    <Modal  
    isOpen={!!props.selectedNote}
    onRequestClose={props.handleModal}
    className="modal"
    closeTimeoutMS={200}
    contentLabel="Selected Note"

>
<h2 className="modal__message">Selected Option</h2>
{props.selectedNote && <h3 className="modal__note">{props.selectedNote} </h3>}
<button onClick={props.handleModal} className="button">okay</button>      
    </Modal>
);
export default ReactModal;