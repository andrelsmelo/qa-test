import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Teste QA</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <header>
        <div className={styles['header-container']}>
          <div className={styles['header-logo']}>
            <Image
              src='/logo-header.png'
              alt='logo-header'
              width={100}
              height={30}
            />
          </div>
          <nav className={styles['header-nav']}>
            <span className={styles['header-text']}>Nossa historia</span>
            <span className={styles['header-text']}>produtos</span>
            <span className={styles['header-text']}>contato</span>
            <span className={styles['header-text']}>blog</span>
          </nav>
        </div>
      </header>
      <main className={`${styles['main-container']} ${inter.className}`}>
        <div className={styles['planeta-esquerda']}>
          <Image
            src={'/planeta-esquerda.png'}
            alt={'planeta-esquerda'}
            width={290}
            height={290}
          />
        </div>
        <div>
          <div className={styles['form-header']}>
            <Image
              src={'/logo-form.png'}
              alt={'logo-form'}
              width={110}
              height={45}
            />
            <a href='#'>X</a>
          </div>
          <div className={styles['form-container']}>
            <form action=''>
              <div className={styles['form-body']}>
                <label htmlFor='nome'>Nome:</label>
                <input type='text' id='nome' name='nome' />
                <label htmlFor='email'>email:</label>
                <input type='email' id='email' name='email' />
                <div className={styles['form-row']}>
                  <div className={styles['form-column']}>
                    <label htmlFor='login'>Login:</label>
                    <input type='text' id='login' name='login' />
                  </div>
                  <div className={styles['form-column']}>
                    <label htmlFor='senha'>Senha :</label>
                    <input type='text' id='senha' name='senha' />
                  </div>
                </div>
                <label htmlFor='cpf'>CPF:</label>
                <input type='text' id='cpf' name='cpf' />
                <label htmlFor='genero'>Genero:</label>
                <select id='genero' name='genero'>
                  <option value='masculino'>masculino</option>
                  <option value='feminino'>Feminino</option>
                  <option value='outro'>Outro</option>
                </select>
              </div>
              <p className={styles['link-login']}>
                <a href=''>Ja possui uma conta?</a>
              </p>
              <div className={styles['form-footer']}>
                <button type='submit'>Cadastrar</button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles['planeta-direita']}>
          <Image
            src={'/planeta-direita.png'}
            alt={'planeta-direita'}
            width={690}
            height={490}
          />
        </div>
      </main>
    </>
  );
}
