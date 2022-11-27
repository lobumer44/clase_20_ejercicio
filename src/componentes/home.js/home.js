// creamos un componente .importamos react
import React from "react";
import Intro from "../intro/intro";
//2 paso.. importamos el estilo
import "./home.css";

const Home = () =>{
    return(
    <header>
        <h3>Header del componente llamado Home</h3>
<Intro />

    </header>
);}
//Exportamos Home para que no tire error,Home debe arrancar con mayuscula




export default Home;
