import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Personajes = () => {

  const [idPersonaje, setIdPersonaje] = useState("");
  const [listaPersonajes, setListaPersonajes] = useState([]);
  const navigate = useNavigate();

  const getPersonajes = async () => {
   const res = await fetch('https://pokeapi.co/api/v2/pokemon/');  
   const data = await res.json();

   let dataSelect = [];
   data.results.map((personaje) => {
        dataSelect.push({url:personaje.url, nombre: personaje.name})
   }); 
 
   setListaPersonajes(dataSelect);
   console.log(dataSelect);  
 
  }
 
  const verDetalle = () => { 
   let id = idPersonaje.replace('https://pokeapi.co/api/v2/pokemon/','');
     id = id.replace ('/', '');
    navigate(`/personajes/${id}`);
  }

  useEffect(() => { 
   getPersonajes(); 
    }, [])

  return (
    <div className='personajeView'>
      <h1>Selecciona tu Pokemón</h1> 
      <hr/>
      <select name='id' id="id" onChange={(e) => setIdPersonaje(e.target.value)}>
        <option value="">Selecciona tu Pokemón</option>
        {
          listaPersonajes.map((p)=><option key={p.url} value={p.url}>{p.nombre}</option>)
          }

      </select>
    <hr />

      <Button variant="dark" onClick={(e) => verDetalle()}>Ver Detalle</Button>
    </div>
  )
}

export default Personajes