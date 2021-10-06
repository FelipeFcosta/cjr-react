import styled from "styled-components"

const Li = styled.li`
  border-radius: 16px;
  margin-right: auto;
  padding: 10px;
  margin-bottom: 16px;
  background-color: #3e4147;
  text-align: start;

  > * {     // style all children
    background-color: #3e4147;
  }
`

// Componente, funcao que retorna um jsx
// props eh um objeto com varios parametros (properties)
// className pois class eh reservado
function Todo({title, description, id}) {   // no lugar de 'props'
  if (description !== ""){
    return (
      <Li key={id}>  {/*para identificar e poder alterar li na tela*/}
        <input type="checkbox"/>
        <span>{title}</span>
        <p>({description})</p>
      </Li>
    )
  } else {
    return (
      <Li key={id}>
        <input type="checkbox"/>
        <span>{title}</span>
      </Li>
    )
  }
}

export default Todo