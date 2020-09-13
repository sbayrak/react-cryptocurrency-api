import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Coin from './Coin';
import firebaseApp from './firebase';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    setIsLoading(true);

    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&order=market_cap_desc&per_page=1000&page=1&sparkline=false'
    );
    const data = await response.data;
    setCoins(data);
    setIsLoading(false);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search a cryptocurrency</h1>
        <form>
          <input
            type='text'
            className='coin-input'
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.total_volume}
            isLoading={isLoading}
          ></Coin>
        );
      })}
    </div>
  );
}

export default App;
