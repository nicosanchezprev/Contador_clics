import React from 'react';
import '../styles/Boton.css'

export default function Boton({texto, esBotonClic, funcionClic}) {
    return (
        <button
            className={esBotonClic ? 'boton-clic' : 'boton-reiniciar'}
            onClick={funcionClic}>
                {texto}   
        </button>
    )
};
