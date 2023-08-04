import './App.css'
import { Exemplo } from './Exemplo';
export default function App(){
    const listaAlunos= ["João", "Maria", "Marcos", "Tereza"];
 return(
    <div>
  <h1>Ola Mundo!</h1>
  <Exemplo lista= {listaAlunos}/>
    </div>
 );


}