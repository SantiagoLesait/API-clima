import {React, useState, useEffect} from 'react';
import Formulario from './Components/Formulario';
import Header from './Components/Header';
import Temperaturas from './Components/Temperaturas';
import Error from "./Components/Error";

function App() {
  const [busqueda, setBusqueda]=useState({
    ciudad:'',
    pais:''
})
const [consulta, setConsulta]=useState(false)
const [data, setData]=useState({})
const [error, setError]=useState(false)

const handleBusqueda = e =>{
  setBusqueda({
      ...busqueda,
      [e.target.name]:e.target.value
  })
}

const {ciudad, pais}=busqueda
const mensaje='No hay resultados'

useEffect(()=>{
  const consultarApi=async()=>{
    if(consulta){
      const apiKey='e2cacd9fbb50ac6e188473a239037b08';
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`
  
      const respuesta=await fetch(url);
      const resultado=await respuesta.json();

      setData(resultado)
      setConsulta(false)

      
        
    }
  }
  consultarApi();
  data.cod==='404'?setError(true):setError(false)
},[consulta])

let componente;
if(error){
componente=<Error mensaje={mensaje}/>
}else componente=<Temperaturas data={data} error={error}/>

  return (
    <>
    <Header
    titulo='Clima React App'
    />
    <div className='contenedor-form'>
      <div className='container'>
        <div className='row'>
          <div className='col m6 s12'>
            <Formulario
            busqueda={busqueda}
            handleBusqueda={handleBusqueda}
            setConsulta={setConsulta}/>
          </div>
          <div className='col m6 s12'>
              {componente}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
