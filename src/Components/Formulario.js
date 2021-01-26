import {React, useState} from 'react';

const Formulario = ({busqueda, handleBusqueda, setConsulta}) => {

const [error, setError]=useState(false)



const handleSubmit = e =>{
    e.preventDefault()
    if(ciudad.trim()==='' || pais.trim()===''){
        setError(true)
        return
    }setError(false)
    setConsulta(true)

}

const {ciudad, pais}=busqueda

    return ( 
        <>
        <form onSubmit={handleSubmit}>
            {error?<p className='red accent-4 error'>Todos los campos son obligatorios</p>:null}
            <div className='input-field col s12'>
                <input
                    type='text'
                    name='ciudad'
                    id='ciudad'
                    value={ciudad}
                    onChange={handleBusqueda}
                />
                <label htmlFor='ciudad'>
                    Ciudad:
                </label>
            </div>
            <div className='input-field col s12'>
                <select 
                name='pais'
                id='pais'
                value={pais}
                onChange={handleBusqueda}>
                    <option value=''>
                        -- Seleccione un pais --
                    </option>
                    <option value='USA'>
                        Estados Unidos 
                    </option>
                    <option value='MX'>
                        Mexico
                    </option>
                    <option value='AR'>
                        Argentina
                    </option>
                    <option value='BR'>
                        Brasil
                    </option>
                    <option value='NG'>
                        Nigeria
                    </option>
                    
                </select>
                <label htmlFor='pais'>Pais:</label>
            </div>
            <div className='input-field col s12'>
                <input
                type='submit'
                value='Buscar ciudad'
                className='waves-effect waves-light btn-large btn-block yellow accent-4'
                />
            </div>
        </form>
        </>
     );
}
 
export default Formulario;