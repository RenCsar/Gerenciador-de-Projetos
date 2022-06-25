import './App.css';
import HelloWorld from './Components/HelloWorld';

function App() {
  const nome = 'Renan';
  const upperNome = nome.toUpperCase();
  const url1 = 'https://via.placeholder.com/150'

  return (
    <div className="App">
        <h1>
          Hellow, world!
        </h1>
        <p>
          Minha primeira aplicação com REACT!
        </p>
        <p>Olá, {upperNome}!</p>
        <img src= {url1} alt="Minha imagem" />
        <HelloWorld/>
    </div>
  );
}

export default App;
