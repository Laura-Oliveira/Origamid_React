import './App.css';

function App() 
{
  return (
    <div>
      Meu App
      <Button />
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

export default App;
