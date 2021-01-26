import React from 'react';

const Temperaturas = ({data, error}) => {
   const {name, main} = data

   if(!name)return null
   
    return ( 
        <>
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>La temperatura en {name} es:</h2>
                <p className='temperatura'>
                    {(main.temp-273.1).toFixed(2)+'°C'}
                </p>
                <h2>La temperatura maxima en {name} es:</h2>
                <p>
                    {(main.temp_max-273.1).toFixed(2)+'°C'}
                </p>
                <h2>La temperatura minima en {name} es:</h2>
                <p>
                    {(main.temp_min-273.1).toFixed(2)+'°C'}
                </p>
                <h2>La sensacion termica en {name} es:</h2>
                <p>
                    {(main.feels_like-273.1).toFixed(2)+'°C'}
                </p>
            </div>
        </div>
        </>
     );
}
 
export default Temperaturas;