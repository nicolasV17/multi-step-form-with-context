import React, { useContext } from 'react'
import { FormContext } from '../../context/FormContext'
import "./buttonAzul.css"

const ButtonAzul = () => {

  const { etapa , setEtapa , finalizar, setFinalizar , manejarErroresForm} = useContext(FormContext);

  let texto = "";

  if(etapa != 4) {
    texto = "Next Step";
  } else {
    texto = "Confirmar"
  }


  return (
    <>
    {
       etapa === 1 ? <button className='button' onClick={() => manejarErroresForm()}>{texto}</button> :
       etapa === 4 ? <button className='button morado' onClick={() => setFinalizar(!finalizar)}>{texto}</button> :
       <button className='button' onClick={() => setEtapa(etapa + 1)}>{texto}</button>
    }
    </> 
  )
}

export default ButtonAzul