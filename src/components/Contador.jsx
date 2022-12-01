import React from 'react';
import '../styles/Contador.css'

export default function Contador({ numClics }) {
    return (
        <div className='contador'> 
            {numClics}
        </div>
    )
};