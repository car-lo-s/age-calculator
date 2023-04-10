import { useState } from "react";
import arrow from "./assets/arrow.svg"
import "./App.css";

type Props={
  btnClick:(a:number,b:number,c:number)=>void;
}
export const Boxinput = (props:Props) => {
  

  const [dia, setDia] = useState<number>(0);
  const [mes, setMes] = useState<number>(0);
  const [ano, setAno] = useState<number>(0);

  

  function handleDia(e: any) {
    setDia(e.target.value);
  }
  function handleMes(e: any) {
    setMes(e.target.value);
  }
  function handleAno(e: any) {
    setAno(e.target.value);
  }

  function handleValor() {
    var data_atual = new Date();
    var ano_atual = data_atual.getFullYear();
    var idade = calcularIdadeCompleta(dia, mes, ano);
    // alert(
    //   "Você tem " +
    //     idade.anos +
    //     " anos, " +
    //     idade.meses +
    //     " meses e " +
    //     idade.dias +
    //     " dias."
    // );
    if(dia >= 1 && dia <= 31){
      if (mes >= 1 && mes <= 12){
        if(ano <= ano_atual){
          props.btnClick(idade.dias,idade.meses,idade.anos);
        }else{
          alert("Digite um ano válido.");
          setDia(0);
          setMes(0);
          setAno(0);
        }
      }else{
        alert("Digite um mês válido.");
          setDia(0);
          setMes(0);
          setAno(0);
      }
    }else{
      alert("Digite um dia válido.");
          setDia(0);
          setMes(0);
          setAno(0);

    }
  }
  function calcularIdadeCompleta(
    dia_nasc: number,
    mes_nasc: number,
    ano_nasc: number
  ) {
    var data_atual = new Date();
    var ano_atual = data_atual.getFullYear();
    var mes_atual = data_atual.getMonth() + 1;
    var dia_atual = data_atual.getDate();

    var anos = ano_atual - ano_nasc;
    var meses = mes_atual - mes_nasc;
    var dias = dia_atual - dia_nasc;

    if (meses < 0 || (meses == 0 && dias < 0)) {
      anos--;
      meses += 12;
      if (dias < 0) {
        meses--;
        dias += diasNoMes(mes_atual - 1, ano_atual);
      }
    } else if (dias < 0) {
      meses--;
      dias += diasNoMes(mes_atual - 1, ano_atual);
    }

    return { anos: anos, meses: meses, dias: dias };
  }

  function diasNoMes(mes: number, ano: number) {
    return new Date(ano, mes, 0).getDate();
  }
  const handleClick=(event:any)=>{
    if(event.key === 'Enter'){
      handleValor();
    }
  }
  
  return (
    <section className="boxInput">
      <div>
        <p>Dia</p>
        <input type="text" name="" id="" onChange={handleDia} value={dia?dia:""} onKeyDown={handleClick}/>
      </div>
      <div>
        <p>Mês</p>
        <input type="text" name="" id="" onChange={handleMes}value={mes?mes:" "} onKeyDown={handleClick}/>
      </div>
      <div>
        <p>Ano</p>
        <input type="text" name="" id="" onChange={handleAno} value={ano?ano:" "} onKeyDown={handleClick}/>
      </div>
      
      <button onClick={handleValor} >
        <img src={arrow} alt="" />
      </button>
    </section>
  );
};
