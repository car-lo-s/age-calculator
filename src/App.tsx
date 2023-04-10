import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Boxinput } from "./box-input";
import { BoxYear } from "./box-year";
import "./App.css";

function App() {
  const [dia, setDia] = useState<number>(0);
  const [mes, setMes] = useState<number>(0);
  const [ano, setAno] = useState<number>(0);

  const handleInfo=(a:number,b:number,c:number)=>{
    setDia(a);
    setMes(b);
    setAno(c);
  }

  return (
    <div className="App">
      <h1>Age calculator</h1>
      <Boxinput btnClick={handleInfo} />
      <BoxYear dia={dia} mes={mes} ano={ano} />
    </div>
  );
}

export default App;
