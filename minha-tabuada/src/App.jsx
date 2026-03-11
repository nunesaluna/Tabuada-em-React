import React, { useState } from 'react';
import './styles.css';

function App() {
  const [numero, setNumero] = useState(1);
  const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
  <div className="page-wrapper">
    <header className="header-principal">
      <h1>🚀 Dev Natalia</h1>
    </header>

    <main className="container">
      <h2 className="titulo">Tabuada Inteligente</h2>
      
      <div className="controles">
        <label htmlFor="select-tabuada">Escolha um número: </label>
        <select 
          id="select-tabuada"
          value={numero} 
          onChange={(e) => setNumero(Number(e.target.value))}
        >
          {valores.map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>

      <table className="tabela-tabuada">
        <thead>
          <tr>
            <th>Operação</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          {valores.map(i => (
            <tr key={i}>
              <td>{numero} x {i}</td>
              <td><strong>{numero * i}</strong></td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>

    <footer className="footer-principal">
      <p>Desenvolvido com ❤️ por <strong>Natalia Nunes</strong> • 2026</p>
    </footer>
  </div>
);}
export default App;
