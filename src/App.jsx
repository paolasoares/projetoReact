//Buscando Dados com fetch

import { useEffect, useState } from "react"
const tarefa = [
  { id: '1', title: 'minha primeira tarefa' },
  { id: '2', title: 'minha segunda tarefa' },
  { id: '3', title: 'minha terceira tarefa' },
  { id: '4', title: 'minha quarta tarefa' },
  
]

export default function App() {
  
  const [tarefas, setTarefas] =useState([])
  
  useEffect(()=>{
    async function buscarDados(){
      const resultado = await fetch('https://jsonplaceholder.typicode.com/todos')
      const resultadoFinal = await resultado.json()
      return resultadoFinal
    }
    buscarDados().then(res => setTarefas(res))
  }, [])
  return (
    
    <div>
      <h1>Buscando dados</h1>
      <ol>
        {tarefas.map((tarefa) => {
          return (
            
            <dir>
            <li key={tarefa.id}>{tarefa.title}
            {tarefa.completed ? ' - Tarefa concluida': null}
            </li>
            </dir>
          )
        })}
        </ol >
    </div>
        
        
        
        
        
    // 1 import MeuContador from "./components/MeuContador"
    //condicional
    // <MeuContador/>
        
        
    // 2 import MinhaList from "./components/MinhaLista";
    //filtro
    // <div>
    //   <h1>Lista no react</h1>
    //   <MinhaList />
    // </div>
    )
  }
  
  
  
  