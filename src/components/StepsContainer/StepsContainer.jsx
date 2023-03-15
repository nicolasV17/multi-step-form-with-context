import React, { useContext } from 'react'
import { FormContext } from '../../context/FormContext'
import Steps from '../Steps/Steps'
import "./stepsContainer.css"

const StepsContainer = () => {

  const {stepsData} = useContext(FormContext);

  return (
    <div className='sidebar'>
      <div className='sidebar_contenedor_steps'>
         {
           stepsData.map(steps => {
            return <Steps key={steps.numero} steps={steps}/>
           })
         }
      </div>
    </div>
  )
}

export default StepsContainer