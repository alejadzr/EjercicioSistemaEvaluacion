//Esto es lo mismo que Layout
import Head from 'next/head'
import Navigation from "./navigation"


const Container =(props) => (
    <div className="container">
        <Head>
            <title> Next.js Project</title>
            <link href="https://fonts.googleapis.com/css2?family=Pangolin&display=swap')" rel="stylesheet"></link>
        </Head>
    <Navigation />
    <div className="body">
        {props.children}
    </div>
    <style jsx>{`

        .container{
        font-family: 'Pangolin', cursive;
        background: #D9E497;
        
}
        `} </style>


    </div>
)

export default Container