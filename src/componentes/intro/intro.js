import React from "react";
import './intro.css';
import  imagen from './imagen.jpg'
import CustomButton from "../Button/customButton";


const Intro = ({ titulo }) => {
return(
<div className="contenedorImagen">
    <img src={imagen} className="imagen" alt=" foto de perfil"/>
    <h1> {titulo} </h1>


<CustomButton color= "green" texto=" Boton Intro"></CustomButton>

<CustomButton color= "blue" texto=" Boton Intro"></CustomButton>

</div>
)
}

export default Intro