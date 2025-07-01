
import React, { useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const mockResults = [
    {
      name: "Anel Peniano Vibration",
      price: "R$ 24,90",
      site: "Gall",
      link: "https://www.gall.com.br/anel-vibration",
      frete: "R$ 9,90",
      pagamento: "Boleto, Cartão, Pix"
    },
    {
      name: "Anel Peniano Vibration",
      price: "R$ 22,50",
      site: "Sexshop Atacadão",
      link: "https://www.sexshopatacadao.com.br/anel-vibration",
      frete: "Grátis",
      pagamento: "Pix, Boleto com 5% off"
    },
    {
      name: "Anel Peniano Vibration",
      price: "R$ 25,90",
      site: "Miess",
      link: "https://www.miess.com.br/anel-vibration",
      frete: "R$ 12,90",
      pagamento: "Cartão em até 3x"
    }
  ];

  const handleSearch = () => {
    setResults(mockResults);
  };

  return (
    <div className="App">
      <h1>Puro Comparador 🔍</h1>
      <input 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Buscar produto..." 
      />
      <button onClick={handleSearch}>Comparar</button>
      <div className="results">
        {results.map((item, index) => (
          <div className="result" key={index}>
            <h2>{item.name}</h2>
            <p><strong>Preço:</strong> {item.price}</p>
            <p><strong>Frete:</strong> {item.frete}</p>
            <p><strong>Pagamento:</strong> {item.pagamento}</p>
            <p><strong>Site:</strong> {item.site}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">Ver no site</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
