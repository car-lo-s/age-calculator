import "./App.css";
type Props = {
  dia: number;
  mes: number;
  ano: number;
};

export const BoxYear = (props: Props) => {
  return (
    <section className="boxYear">
      <div>
        <div className="infoFont">{ props.ano ? props.ano: " - - " }</div>
        <div>Anos</div>
      </div>
      <div>
        <div className="infoFont">{props.mes? props.mes: " - -" }</div>
        <div>Meses</div>
      </div>
      <div>
        <div className="infoFont">{props.dia? props.dia: " - -"}</div>
        <div>Dias</div>
      </div>
    </section>
  );
};
