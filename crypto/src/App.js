import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Coin from './Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      {/* Artistic Header */}
      <div className="crypto-header-container">
        <h1 className="crypto-header">CryptoDash</h1>
      </div>

      {/* Search Bar */}
      <div className="coin-search">
        <form>
          <input
            type="text"
            className="coin-input"
            placeholder="Provide the coin name"
            onChange={handleChange}
          />
        </form>
      </div>

      {/* Display Coins */}
      <div className="coin-app">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              pricechange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
