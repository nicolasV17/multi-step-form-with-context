import React, { useContext } from 'react'
import "./layout.css"
import StepsContainer from '../StepsContainer/StepsContainer'
import InfoContainer from '../InfoContainer/InfoContainer'
import ButtonAzul from '../ButtonAzul/ButtonAzul'
import SelectPlan from '../SelectPlan/SelectPlan'
import GoBack from '../goBack/GoBack'
import PickAdd from '../PickAdd/PickAdd'
import Summary from '../Summary/Summary'
import { FormContext } from '../../context/FormContext'


const Layout = () => {

  const { etapa, finalizar } = useContext(FormContext);

  return (
    <div className="container altura-cel">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-5 col-lg-4 pl0ipad pr0ipad">
          <StepsContainer />
        </div>
        <div
          className={`${
            !finalizar
              ? "col-12 col-sm-12 col-md-7 col-lg-8 prelative"
              : "col-12 col-sm-12 col-md-7 col-lg-8 prelative d-flex flex-column justify-content-center align-items-center"
          }`}
        >
          {etapa === 1 ? (
            <InfoContainer />
          ) : etapa === 2 ? (
            <SelectPlan />
          ) : etapa === 3 ? (
            <PickAdd />
          ) : etapa === 4 ? (
            <Summary />
          ) : null}

          <div className="contenedor-go-back">
            {etapa != 1 && !finalizar ? <GoBack /> : null}
          </div>

          <div className="contenedor-button-azul">
            <ButtonAzul />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout