import React, { useContext } from 'react'
import { FormContext } from '../../context/FormContext'
import "./goBack.css"

const GoBack = () => {

  const {etapa , setEtapa} = useContext(FormContext);
  
  return (
      <p onClick={() => setEtapa(etapa - 1)} className='ubuntu-medium go-back'>Go Back</p>
  )
}

export default GoBack