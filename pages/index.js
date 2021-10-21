import React from 'react'
import Head from "next/head"
import Container from "../components/Container"
import data from "./../database/data"
import fetch from 'isomorphic-fetch'
import Link from 'next/link'







const Index = () => {

    /*const [productList, setProductList] = useState([])

    useEffect(() => {
        window
        .fetch('/api/exam')
        .then((response) =>response.json())
        .then(({data}) => { setProductList(data)})
    }, [])*/
    return (<div>

    <Container>
        <Head>
            <title>NextProject -  Home </title>
            <link href="https://fonts.googleapis.com/css2?family=Pangolin&display=swap')" rel="stylesheet"></link>
        </Head>
        <h1> Bienvenido!</h1>
        <div>
            <h1> Seleccionar el tema de tu interés y luego aparecerán algunas preguntas</h1>
            <div className="temas">
                <button><Link href="/about" className="geografia"><a>Geografía</a></Link></button>
                <button><Link href="/about" className="matematicas"><a>Matemáticas</a></Link></button>
                <button><Link href="/about" className="musica"><a>Música</a></Link></button>
                <button><Link href="/about" className="ingles"><a>Inglés</a></Link></button>
            </div>
        </div>
    </Container>
<style jsx>{`

.temas{
    text-decoration:none;

    display: grid;
    justify-items: center;
    grid-template-columns: 600px 600px ;
    grid-template-rows: 250px 250px;
    gap: 0px 0px;
    grid-template-areas:
    "geografia matematicas"
    "musica ingles";
    row-gap: 40px;

    margin:40px;



        }
.temas > button{
    font-family: 'Pangolin',cursive;
    font-size:40px;
    border:transparent;
    background-color: #71aab5;
    border-radius: 70px;
    width: 500px;
    transition-duration:0.4s;
}

.temas > button:hover{

    background-color:#c9dcdb;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);



}
.temas > button a{
    color:#0c839c;
text-decoration:none;

}

.temas >button p{
    font-size:25px;

}


`}</style>


   </div>
    )}






export default Index