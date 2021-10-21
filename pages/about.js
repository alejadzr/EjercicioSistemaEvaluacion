import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Head from "next/head";
import fetch from "isomorphic-fetch";
import Board from "../components/board";
import datas from "../database/data";


const About = () => {
  const [questionList, setQuestionList] = useState([]);

  const valida = 1;

  useEffect(() => {
    window
      .fetch("/api/exam")
      .then((response) => response.json())
      .then(({ data }) => {
        if(valida == 0) setQuestionList(data[0]);
        else if(valida == 1) setQuestionList(data[1]);
        else if(valida == 2) setQuestionList(data[2]);
        else {setQuestionList(data[3])}
      });
  }, []);

  return (
    <div>
      <Container>
        <Head>
          <title>NextProject - About </title>
        </Head>
        <h1>Test</h1>
        <h3>En cada pregunta se presentan 4 opciones, selecciona una. Cuando hayas respondido todas las preguntas haz click en el botón de enviar y obtén tu resultado</h3>
        {questionList.length && <Board questions={questionList} />}

      </Container>
    </div>
  );
};
//*{questionList.map((question) => (
//*<div> {console.log(data[0])}
//*</div>

export default About;
