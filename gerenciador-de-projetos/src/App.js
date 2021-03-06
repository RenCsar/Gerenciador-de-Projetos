import './App.css';
import './index.css';
import HelloWorld from './Components/HelloWorld';
import SayMyName from './Components/SayMyName';
import Pessoa from './Components/Pessoa';
import Frase from './Components/Frase';
import List from './Components/List';

function App() {
  const nome = "Cesar";

  return (
    <div className="App">
        <HelloWorld/>
        <SayMyName nome="Renan"/>
        <SayMyName nome="Fernanda"/>
        <SayMyName nome={nome}/>
        <Pessoa 
          nome={"Renan"}
          idade={31} 
          profissao={"Desenvolvedor front-end"}
          foto="https://via.placeholder.com/150"
        />
        <List />
    </div>
  );
}

export default App;
