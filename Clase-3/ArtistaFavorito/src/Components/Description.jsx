import React from "react";

const Descripcion = (props) => {
    return(
        <>
        <p> Genero: <b> {props.genero} </b> </p>
        <p> Estado: <b> {props.status} </b> </p>
        </>
    )
}

export default Descripcion