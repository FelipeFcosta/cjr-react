import {DivApp, Form} from '../styles/styles';

function Register() {
  return (
    <DivApp>
      <Form onSubmit={(event) => event.preventDefault()}>
        <h1>Registre-se</h1>
          <label for="username">Insira seu nome de usuário</label>
          <input type="text" id="username" style={{height: "1.5em"}}></input>
          <br/>
          <label for="bio">Insira a sua bio</label>
          <textarea cols="20" rows="8" id="bio"></textarea>
          <br/>
          <button>Fazer Registro</button>
      </Form>
    </DivApp>  
  )
} 

export default Register;
