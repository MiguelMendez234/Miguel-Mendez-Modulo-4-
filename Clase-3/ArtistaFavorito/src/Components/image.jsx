import React from "react";

const Imagen = (props) => {
    return(
        <>
        <img className="Img" src={props.url} alt={props.informacionImg} />
        </>
    )
}
export default Imagen