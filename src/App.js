// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'    // um Hook
import TodoList from './components/TodoList';

// para o react monitorar se alguma variavel da tela foi modificada
// e atualizar a tela, use o estado


function App() {

  const [countTodo, setNumero] = useState(0)  // useState to re-render components
  const [lista, setLista] = useState([])

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function count() {
    setNumero(prevNumero => prevNumero + 1)
  }
  function handleCreation(event) {
    // todo synthetic event nos da um objeto event
    event.preventDefault()  // prevent page reload, so we won't lost the states

    // melhor usar states do que isso
    //const title = document.querySelector('#title')
    //const description = document.querySelector('#description')

    if (title !== "") {
      const nTodo = {title: title, description: description, id: lista.length}
      setLista(lista => [...lista, nTodo])

      setTitle("")
      setDescription("")
      count();
    }
  }

  // onSubmit, onChange sao synthetic events
  // event.target.value (target - elemento do DOM que esta sendo afetado)
  return (
    <div className="App">
      <h1>{countTodo} coisas para fazer</h1>
      <form onSubmit={handleCreation} autoComplete="off">
        <label>Title</label>
        <input type="text" value={title} onChange={(event) => {setTitle(event.target.value)}}/>

        <label>Description</label>
        <textarea cols="15" rows="3" value={description} onChange={(event) => {setDescription(event.target.value)}}/>
        <button>create</button>
      </form>

      <TodoList list={lista}/>
    </div>
  );
}

export default App;
