import React from "react";
import { useState } from 'react';
import './Page.css';

function Modal(props){
        
        return(
            
            <div>
                
                <div className='degreeDecoration2'></div> 
                <div className="modalBG"></div>
                <div className="modal" onClick={props.closeModal}>
                    <div className='modalText'>{props.modalText}</div>
                </div>
            </div>
            
        );
   
}

function Modal2(props){
    

    return (
        <div className="tModal">
            {props.modalVisible && <Modal closeModal={props.closeModal} modalText={props.modalText}/>}
        </div>
        
    );
}

export default Modal2;