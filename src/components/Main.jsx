import './Page.css';
import dayCalculator from './DayCalculator';
import Modal2 from './Modal';
import React, { useState } from 'react';


function Main(){
    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');


    const openModal = (text) => {
        setModalText(text);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    
    if (window.screen.width < 2000 ){
        return(
            <div className='container'>
                <div className='degreeDecoration'></div>
                <div className='item pageTitle'>
                    Calculador de días libres 
                </div>
                <div className='item formTitle'>
                    Ingrese el día que entra
                    <div className='errorMsg' id='entryDayError' >Hola</div>
                </div>
                <input type="date" id="entryDay" />             
                <div className='item formTitle'>
                    Ingrese el turno en el que entra
                    <div className='errorMsg' id='shiftError' >Hola</div>
                </div>
                <select id="shift">
                    <option value="0">Día</option>
                    <option value="1">Noche</option>
                </select>
                <div className='item formTitle'>
                    Ingrese dia a consultar
                    <div className='errorMsg' id='toConsultError' >Hola</div>
                </div>
                <input type="date" id="toConsult" /> 
                
                <button onClick={()=>{
                        let date1 = document.getElementById("entryDay").value;
                        let date2 = document.getElementById("toConsult").value;
                        let shift = document.getElementById("shift").value;

                        document.getElementById("toConsultError").style.display = "none";
                        document.getElementById("entryDayError").style.display = "none";


                        if(date1 == ''){
                            document.getElementById("entryDayError").textContent = "Debe seleccionar una fecha";
                            document.getElementById("entryDayError").style.display = "inline-block";
                            return;
                        };

                        if(date2 == ''){
                            document.getElementById("toConsultError").textContent = "Debe seleccionar una fecha";
                            document.getElementById("toConsultError").style.display = "inline-block";
                            return;
                        };
                        
                        if(date1 >= date2){
                            document.getElementById("toConsultError").textContent = "Debe agregar un día posterior al día de entrada";
                            document.getElementById("toConsultError").style.display = "inline-block";
                            return;
                        };
                        
                        
                        openModal(dayCalculator (date1,date2,shift));
                        
                    }       
                }>Calcular</button>
                
                <Modal2 modalVisible={modalVisible} closeModal={closeModal} modalText={modalText}/>

                
                <div className='degreeDecoration2'></div>
            </div>           
        );
    } 
    return(
        <div className='container'>no sirve</div>
    );
    
}



export default Main;