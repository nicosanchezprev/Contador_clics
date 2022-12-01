import './App.css';
import Boton from './components/Boton.jsx';
import Contador from './components/Contador.jsx';
import { useState } from 'react';





export default function App() {

  const [numClics, setNumClics] = useState(0);

  const aumentarClic = () => {
    setNumClics(numClics + 1);
  };

  const disminuirClic = () => {
    if(numClics === 0) {
      return;
    } else {
      setNumClics(numClics - 1);
    };
  }
    

  const reiniciarContador = () => {
    setNumClics(0); 
  };

  return (
    <div className="App">
      <div className='cont-principal'>
        <Contador numClics={numClics} />
        <Boton
          texto={<ion-icon name="add-outline"></ion-icon>}
          esBotonClic={true}
          funcionClic={aumentarClic} 
        />
        <Boton
          texto={<ion-icon name="backspace-outline"></ion-icon>}
          esBotonClic={true}
          funcionClic={disminuirClic} 
       />
        <Boton
          texto={<ion-icon name="refresh-outline"></ion-icon>}
          esBotonClic={false}
          funcionClic={reiniciarContador}
        />
      </div>
    </div>
  );
};

