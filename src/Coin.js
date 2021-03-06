import React from 'react';
import Spinner from './Spinner';
import './Coin.css';

const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
  isLoading,
}) => {
  console.log(priceChange);
  return isLoading ? (
    <Spinner></Spinner>
  ) : (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1> {name} </h1>
          <p className='coin-symbol'> {symbol} </p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'> TRY {price} </p>
          <p className='coin-volume'> TRY {volume.toLocaleString()} </p>
          {priceChange < 0 || priceChange === null ? (
            <p className='coin-percent red'>
              {' '}
              {priceChange ? priceChange.toFixed(2) : '-'}{' '}
            </p>
          ) : (
            <p className='coin-percent green'>
              {priceChange ? priceChange.toFixed(2) : '-'}
            </p>
          )}
          <p className='coin-marketcap'>
            Mkt Cap: TRY{marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
