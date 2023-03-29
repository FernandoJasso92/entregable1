import React from "react";
import Button from "./Button";
import "./styles/ContainerInfo.css";

const ContainerInfo = ({quote, onChange}) => {

  return (
      <section className="containerInfo">
        <h1 className="containerInfo__title">Frases del espacio</h1>

        <Button onChange={onChange}/>

        <article className="containerInfo__phrase">
          <p>{quote.phrase}</p>
        </article>

        <article className="containerInfo__author">
          <h4>Fuente: {quote.author}</h4>
        </article>
      </section>
  );
};

export default ContainerInfo;
