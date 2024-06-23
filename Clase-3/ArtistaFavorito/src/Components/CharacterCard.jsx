import React from "react";
import Title from "./title";
import Imagen from "./image";
import Descripcion from "./Description";

const Card = () => {
    return(
        <>
        <div className="card">
            <Title titulos="Cristiano Ronaldo"/>
            <Imagen url='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/640px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg' informacionImg='Imagen de Cristiano Ronaldo'/>
            <Descripcion genero='Masculino' status='Vivo' />
        </div>

        <div className="card2">
            <Title titulos="Lionel Messi"/>
            <Imagen url='https://media.admagazine.com/photos/637d11a6e63c8afac40e7a01/1:1/w_2896,h_2896,c_limit/1442809583' informacionImg='Imagen de Lionel Messi'/>
            <Descripcion genero='Masculino' status='Vivo' />
        </div>

        <div className="card3">
            <Title titulos="Diego Armando Maradona"/>
            <Imagen url='https://hips.hearstapps.com/hmg-prod/images/muere-maradona-1606326764.jpg?crop=0.845xw:1.00xh;0.0783xw,0&resize=640:*' informacionImg='Imagen de Diego Armando Maradona'/>
            <Descripcion genero='Masculino' status='Fallecido' />
        </div>

        </>

        
    )
}
export default Card