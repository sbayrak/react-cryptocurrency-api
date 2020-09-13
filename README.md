# react-cryptocurrency-api
Cryptocurrency market made with API from coingecko and ReactJS

First of all, huge thanks to "Brian Design" from YouTube and coingecko.com for cryptocurrencyAPI. 

Also, in addition to the top i added a 'spinner.gif' as Spinner.js, so while we fetch data with 'axios' from coingecko, there is some waiting time so a spinner would be good. 

In App.js, we have 'isLoading' , 'coins' , 'search' states. After that i used axios in order to fetch data from API, also setted my 'isLoading' states to get Spinner.js working. 'filteredCoins' method does the filtering for Search input. Later on, i mapped trough filteredCoins and passed datas to Coin.js as props. 

In Coin.js, first of all i checked whether 'isLoading' state is true or not. If true, then it means we still waiting data to be fetched and 'spinner.gif' shows up, if not true then all fetched and mapped datas show up. 
