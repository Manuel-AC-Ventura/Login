import './App.css'

export const App = ()=>{
  return(
    <div className='w-full h-full flex items-center justify-around'>
      <img className='h-72 hidden lg:block' src="logo.svg" alt="logo" />
      <div className='sm:w-5/6 md:w-7/12 lg:w-1/4 flex flex-col justify-center'>
        <h3 className='text-[#1A202C] text-base font-semibold'>Bem-vindo de volta</h3>
        <h1 className='text-xl text-[#1A202C] font-semibold'>Faça login na sua conta</h1>
        <div className='mt-8 grid gap-5'>
          <div className='grid'>
            <label className='text-[#1A202C] font-semibold' htmlFor="email">E-mail</label>
            <input 
              type="email" name="email" id="email" placeholder='exemplo@gmail.com'
              className='bg-[#F7FAFC] px-3 py-2 rounded border border-[#E8E8E8] outline-none' 
            />
          </div>
          <div className='grid gap-1'>
            <label className='text-[#1A202C] font-semibold' htmlFor="senha">Senha</label>
            <input 
              type="password" name="senha" id="senha" placeholder='0123456789'
              className='bg-[#F7FAFC] px-3 py-2 rounded border border-[#E8E8E8] outline-none' 
            />
          </div>
          <div className='flex justify-between'>
            <div className='flex gap-2'>
              <input type="radio" name="lembrar" id="lembrar" />
              <label htmlFor="lembrar">Lembre de mim</label>
            </div>
            <a className='text-[#1E9E6A]' href="#">Esqueceu sua senha?</a>
          </div>
          <div className='text-white grid gap-3'>
            <button className="bg-[#1E9E6A] font-semibold p-2 rounded">Entrar na conta</button>
            <button className='bg-[#1A202C] font-semibold p-2 rounded flex gap-3 items-center justify-center'>
              <img className='h-5' src="google.svg" alt="google" />
              <span>Ou faça login com o Google</span>
            </button>
          </div>
          <p className='text-center mt-10 text-[#1A202C]'>Não tem uma conta? <a className='text-[#1E9E6A]' href="#">Cadastre-se</a></p>
        </div>
      </div>
    </div>
  )
}