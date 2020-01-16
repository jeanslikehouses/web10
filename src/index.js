import React from 'react';
import ReactDOM from 'react-dom'; // para se comunicar com a arvore de elementos da aplicação html
import App from './App';


// react dom está renderizando o html (app.js) para dentro da div com id 'root'
ReactDOM.render(<App />, document.getElementById('root'));

