import {DivApp, Form} from '../styles/styles';

function Login() {
  return (
    <DivApp>
      <Form onSubmit={(event) => event.preventDefault()}>
        <h1>Login</h1>
          <label for="user_email">Insira seu nome de usuário</label>
          <input type="text" style={{height: "1.5em"}}></input>
          <br/>
          <button>Fazer Login</button>
      </Form>
    </DivApp>  
  )
} 

export default Login;
