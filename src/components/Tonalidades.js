import React, { Fragment } from 'react'
import Button from '@material-ui/core/Button';


// No es necesario pasar el tipo de tonalidad ya que se carga 
// por archivo json. En tonalidades estan solamente las del tipo
// cargado en App.js
//
const Tonalidades = ({lista_de_escalas, setAcordesDeLaEscala}) => {

    const tonos = Object.keys(lista_de_escalas);

    const handleTonalidad = (e, item) => {
        console.log(item);
        console.log(lista_de_escalas[item]);
        
        // En este caso se estan usando los corchetes
        // como notacion de objetos. item representa el
        // nombre de la property del objeto tonalidades.
        // En este caso tonalidades[item] devuelve un
        // array con todas los acordes de una escala.
        // Ej: tonalidades_mayores.json
        //
        setAcordesDeLaEscala(lista_de_escalas[item]);
    };

    return (
        <Fragment>
            {tonos.map((item) => {
                return <Button key={item} variant="contained" onClick={(event) => {handleTonalidad(event, item)}}>{item}</Button>
            })}
        </Fragment>
    )
}

export default Tonalidades;
