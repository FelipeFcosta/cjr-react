import Todo from "./Todo";
import styled from "styled-components"

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 10%;
`

function TodoList(props) {
  const list = props.list
  console.log(list)
  return (  // retorna array de list items
    <Ul>
      {list.map( (value) => {  // pra cada item da lista, criar um li
        return <Todo title={value.title} id={value.id} description={value.description} />
      })}
    </Ul>
  )
}

export default TodoList