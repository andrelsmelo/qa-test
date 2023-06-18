import Image from 'next/image'
import './globals.css';

export default function Home() {
  return (
    <main className="main-container">
      <div className="planeta-esquerda">
        <Image src={'/planeta-esquerda.png'} alt={'planeta-esquerda'} width={190} height={190} />
      </div>
      <div>
        <div className="form-header">
          <Image src={'/logo-form.png'} alt={'logo-form'} width={110} height={45} />
          <a href=''>X</a>
        </div>
        <div className="form-container">
          <form action="">
            <div className="form-body">
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
              <div className="form-row">
                <div className="form-column">
                  <label htmlFor="login">Login:</label>
                  <input type="text" id="login" name="login" />
                </div>
                <div className="form-column">
                  <label htmlFor="senha">Senha :</label>
                  <input type="password" id="senha" name="senha" />
                </div>
              </div>
              <label htmlFor="cpf">CPF:</label>
              <input type="text" id="cpf" name="cpf" />
              <label htmlFor="genero">Genero:</label>
              <select id="genero" name="genero">
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">outro</option>
              </select>
            </div>
            <p>
              <a href=''>Ja possui uma conta?</a>
            </p>
          </form>
        </div>
        <div className="form-footer">
          <button type="submit">Cadastrar</button>
        </div>
      </div>
      <div className="planeta-direita">
        <Image src={'/planeta-direita.png'} alt={'planeta-direita'} width={190} height={190} />
      </div>
    </main>
  )
}
