import {useState} from 'react'    // um Hook
import Todo from '../components/Todo';
import styled from "styled-components"

const DivApp = styled.div`
  text-align: center;
  margin-inline: auto;
  width: 500px;

  > * {     // style all children
    width: 100%;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
`

function Main() {
  const [countTodo, setNumero] = useState(0)  // useState to re-render components
  const [lista, setLista] = useState([])

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function count(step) {
    setNumero(prevNumero => prevNumero + step)
    console.log("count")
  }

  function handleCreation(event) {
    // todo synthetic event nos da um objeto event
    event.preventDefault()  // prevent page reload, so we won't lose the states

    if (title !== "") {
      const nTodo = {title: title, description: description, checked: false, id: lista.length}
      setLista(lista => [...lista, nTodo])

      setTitle("")
      setDescription("")
      count(1);
    }
  }
    return (
      <DivApp>
        <h1>{countTodo} coisas para fazer</h1>
        <Form onSubmit={handleCreation} autoComplete="off">
          <label>Title</label>
          <input style={{padding: "0.5em"}} type="text" value={title} onChange={(event) => {setTitle(event.target.value)}}/>
  
          <label>Description</label>
          <textarea cols="15" rows="3" value={description} onChange={(event) => {setDescription(event.target.value)}}/>
          <button>create</button>
        </Form>
  
        <Ul>
          {lista.map( (listItem) =>   // pra cada item da lista, criar um li
            <Todo key={listItem.id} listItem={listItem} leftTodo={count}/>
          )}
        </Ul>
      </DivApp>
    )
}

export default Main