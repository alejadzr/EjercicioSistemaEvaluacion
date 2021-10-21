//Esto es lo mismo que Layout
import About from "../pages/about";
import Head from "next/dist/shared/lib/head";

const Board = (props) => (
  <div>
    <div className="board">
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Pangolin&display=swap')" rel="stylesheet"></link>
    </Head>
      <div className="content">
        <div>
          {props.questions.map((question) => (
            <div>
              <h2 className="Question">{question.question}</h2>
              {question.options.map((op) => (
                <button className="Answers">{op}</button>
              ))}
            </div>
          ))}

        </div>
        <div className="Commands">
          <button className="Commands">Enviar </button>
        </div>
        </div>
      </div>


<style jfx>{`
.board{
    margin: 3% 3% 3% 3%;
    background: url(https://media.istockphoto.com/photos/chalkboard-back-to-school-theme-picture-id482968188?b=1&k=20&m=482968188&s=170667a&w=0&h=ByKSDUnnROrFuIg3wYAP2EE7e8pLVdi7_99TRSzIdxU=);
    background-size: 100%;
    height: 650px;

}

.content {

    background: hsla(0,0%,100%,.3);
    height: 75%;
    margin-left: 50px;
    margin-right: 50px;

}

.Commands {
  font-family: 'Pangolin', cursive;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin:45px;
    margin-top: 55px;
    height:55px;

}

.Answers{

  font-family: 'Pangolin' ,cursive;
  width:120px;
  margin-left:25px;
  height: auto;

}





`}</style>





    </div>
);

export default Board;
