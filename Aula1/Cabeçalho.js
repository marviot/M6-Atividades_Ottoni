
// Exemplo usando React e ReactDOM:
import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <img className="logo" src="imagem.png" alt="Logo da Empresa" />
        <h1 className="system-name">Nome do Sistema</h1>
        <p className="operator-name">Nome do Operador</p>
      </div>
    </header>
  );
};

ReactDOM.render(<Header />, document.getElementById('root'));