// app .js é uma função que retorna um conteudo html >jsx no caso

// tres conceitos principais do react (tudo é baseado nestes 3 conceitos, montam tudo)
// componente > app (função que retorna algum conteudo html/css/js)
// componente > bloco isolado de html/css/js, o qual não interfere no restante da aplicação
// estado > informação que o componente vai manipular (react nao monitora a alterações em variaveis)
// estado > informaçoes mantidas pelo componente (lembrar: conceito imutabilidade)
// propriedade > atributos, passando uma propriedade pro componente (ex: <Header title="dashboard" />)
// propriedade > informações que um componente pai passa para o componente filho

// regras do react: um componente por arquivo > header deveseria ser um Heard.js (importar react e exportar Header)

import React from 'react';

import './global.css';
import './app.css';
import './sidebar.css';
import './Main.css';

// <> - fragments > tag sem nomenclatura, para colocar um item abaixo do outro, sem div

function App() {
  return (
   <div id="app"> 
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>
          
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div className="input-block"> 
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/15263842?s=460&v=4" alt="jeanslikehouses"></img>
              <div className="user-info">
                  <strong>jeanslikehouses</strong>
                  <span>Reactjs, React Native, Node.js</span>
              </div>
            </header>
            <p>uma bio de um cara legal! ;)</p>
            <a href="https://github.com/jeanslikehouses">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/15263842?s=460&v=4" alt="jeanslikehouses"></img>
              <div className="user-info">
                  <strong>jeanslikehouses</strong>
                  <span>Reactjs, React Native, Node.js</span>
              </div>
            </header>
            <p>uma bio de um cara legal! ;)</p>
            <a href="https://github.com/jeanslikehouses">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/15263842?s=460&v=4" alt="jeanslikehouses"></img>
              <div className="user-info">
                  <strong>jeanslikehouses</strong>
                  <span>Reactjs, React Native, Node.js</span>
              </div>
            </header>
            <p>uma bio de um cara legal! ;)</p>
            <a href="https://github.com/jeanslikehouses">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
   </div>
  );
}

export default App;
