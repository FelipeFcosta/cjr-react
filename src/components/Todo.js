import styled from "styled-components"
import {useState} from 'react'

const Li = styled.li`
  border-radius: 16px;
  padding: 10px;
  margin-bottom: 16px;
  background-color: #3e4147;
  text-align: start;
  
  > * {     // style all children
    background-color: #3e4147;
    word-wrap: break-word;
  }
`

// Componente, funcao que retorna um jsx
// props eh um objeto com varios parametros (properties)
// className pois class eh reservado
function Todo({listItem, leftTodo}) {
  const [checked, setChecked] = useState(false);
  
  function handleChecked(event) {
    let nChecked = event.target.checked
    setChecked(nChecked)
    leftTodo(nChecked ? -1 : 1)
    listItem.checked = nChecked
  }

  return (
    <Li>
      <input type="checkbox"
        checked={checked ? "checked" : ""}
        onChange={handleChecked}/>

      <span>{listItem.title}</span>
      {listItem.description ? <p>({listItem.description})</p> : <span></span>}
    </Li>
    )
  }

export default Todo