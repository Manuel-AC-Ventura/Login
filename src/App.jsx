import './App.css'

export const App = ()=>{
  return(
    <div>
      <h3>Bem-vindo de volta</h3>
      <h1>Faça login na sua conta</h1>
      <div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" placeholder='exemplo@gmail.com' />
        </div>
        <div>
          <label htmlFor="Senha"></label>
          <input type="password" name="Senha" id="Senha" placeholder='0123456789' />
        </div>
        <div>
          <div>
            <input type="checkbox" name="lembrar" id="lembrar" />
            <label htmlFor="lembrar">Lembre de mim</label>
          </div>
          <a href="#">Esqueceu sua senha?</a>
        </div>
        <div>
          <button>Entrar na conta</button>
          <button><span>Ou faça login com o Google</span></button>
        </div>
        <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
      </div>
    </div>
  )
}