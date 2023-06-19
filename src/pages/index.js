import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Teste QA</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <header>
        <div className='header-container'>
          <div className='header-logo'>
            <Image
              src='/logo-header.png'
              alt='logo-header'
              width={100}
              height={30}
            />
          </div>
          <nav className='header-nav'>
            <span className='header-text'>Nossa historia</span>
            <span className='header-text'>Produtos</span>
            <span className='header-text'>Contato</span>
            <span className='header-text'>Blog</span>
          </nav>
        </div>
      </header>
      <main className={`main-container ${inter.className}`}>
        <div className='planeta-esquerda'>
          <Image
            src={'/planeta-esquerda.png'}
            alt={'planeta-esquerda'}
            width={190}
            height={190}
          />
        </div>
        <div>
          <div className='form-header'>
            <Image
              src={'/logo-form.png'}
              alt={'logo-form'}
              width={110}
              height={45}
            />
            <a href='#'>X</a>
          </div>
          <div className='form-container'>
            <form action=''>
              <div className='form-body'>
                <label htmlFor='nome'>Nome:</label>
                <input type='text' id='nome' name='nome' />
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' />
                <div className='form-row'>
                  <div className='form-column'>
                    <label htmlFor='login'>Login:</label>
                    <input type='text' id='login' name='login' />
                  </div>
                  <div className='form-column'>
                    <label htmlFor='senha'>Senha:</label>
                    <input type='password' id='senha' name='senha' />
                  </div>
                </div>
                <label htmlFor='cpf'>CPF:</label>
                <input type='text' id='cpf' name='cpf' />
                <label htmlFor='genero'>Gênero:</label>
                <select id='genero' name='genero'>
                  <option value='masculino'>Masculino</option>
                  <option value='feminino'>Feminino</option>
                  <option value='outro'>Outro</option>
                </select>
              </div>
              <p>
                <a href=''>Já possui uma conta?</a>
              </p>
              <div className='form-footer'>
                <button type='submit'>Cadastrar</button>
              </div>
            </form>
          </div>
        </div>
        <div className='planeta-direita'>
          <Image
            src={'/planeta-direita.png'}
            alt={'planeta-direita'}
            width={190}
            height={190}
          />
        </div>
      </main>
    </>
  );
}
