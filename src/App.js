import React, { useState } from 'react';
import './App.css';

export default function App() 
{
  const [count, setCount] = React.useState(0);

  return (
    <div>
      Meu App
      <br/>
      <button onClick={() => {setCount(count + 1)}}> Comprar </button>
      <p>Quantidade: {count}</p>
      <p>Total: R$ {count * 250}</p>
    </div>
  );
}

function handleClick(event) 
{
  alert('Comprou' + event.target.innerText);
}

function Button() 
{
  return <button onClick={handleClick}> Comprar </button>;
}

