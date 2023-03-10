import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const DetallesPersonaje = () => {

    const [personaje, setPersonaje] = useState({});
    const [cargando, setCargando] = useState(true);
    
    const { id } = useParams();

    const getPersonaje = async() => {

       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
       const data =  await res.json();

       setPersonaje(data);
       setCargando(false);
    }

    useEffect (()=> {
        getPersonaje();
    }, []);


  return (
    cargando ?   
    <h4>Cargando datos</h4> :
    <div className="detalleView">
        <div>
            <img src={personaje.sprites.other.dream_world.front_default} alt="imagen personaje"/>
        </div>
        <div className="datosPersonaje">
            <p>
                 <strong>Nombre:</strong> {personaje.name}
            </p>
            <p>
                 <strong>Peso:</strong> {personaje.weight}
            </p>
            
        </div>
    </div>

  )
}

export default DetallesPersonaje