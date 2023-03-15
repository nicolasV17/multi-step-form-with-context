import { useContext, useEffect} from "react";
import Layout from "./components/Layout/Layout";
import "./app.css";
import { FormContext } from "./context/FormContext";

function App() {
 const {
   planCardData,
   setPlanCardData,
   time,
   planCardDataInicialYear,
   planCardDataInicialMes,
   update
 } = useContext(FormContext);
 

  useEffect(() => {
    if (time) {
      setPlanCardData([...planCardDataInicialYear]);
    } else {
      setPlanCardData(planCardDataInicialMes);
    }
  }, [time]);

  useEffect(() => {
    update();
  }, [planCardData]);

 
  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center pl0mobile pr0mobile align-items-start-mobile">
      <Layout/>
    </div>
  );
}

export default App;
