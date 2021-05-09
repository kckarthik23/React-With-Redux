import Modal from "react-modal";
import React from 'react';

const ReactModal=(props)=>(
    <Modal  
    isOpen={!!props.selectedNote}
    onRequestClose={props.handleModal}
    contentLabel="Selected Note"

>
<h2>Selected Option</h2>
{props.selectedNote && <h3>{props.selectedNote} </h3>}
<button onClick={props.handleModal}>okay</button>      
    </Modal>
);
export default ReactModal;