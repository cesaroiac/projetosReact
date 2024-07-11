import './App.css';

function App() {

  const name = 'Caio'
  const newName = name.toUpperCase()
  const url = 'https://via.placeholder.com/150'

  function sum(a , b){
    return a + b
  }

  return (
    <div className="App">
      <h2>Olá, {newName}</h2>
      <p>Soma: {sum(1,2)}</p>
      <img src={url} alt="Minha imagem" />
    </div>
  );
}

export default App;
