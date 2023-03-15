import React, { useContext } from 'react'
import { FormContext } from '../../context/FormContext'
import "./spinButton.css"

const SpinButton = () => {

const { time, setTime } = useContext(FormContext);
  // console.log(seleccionActiva , planCardData)

  const handleClick = () => {
   
    setTime(!time);
   
  }
  return (
      <div className="contenedor-btns-spin" onClick={handleClick} >
          <button className={`${time && 'derecha'}`}></button>
      </div>
  )
}

export default SpinButton