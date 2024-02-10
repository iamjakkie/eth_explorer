// App.js
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MainMetrics />
      <div className="tables-container">
        <BlocksTable />
        <TransactionsTable />
      </div>
      <Footer />
    </div>
  );
}

const Header = () => <header>Etherscan Clone</header>;

const SearchBar = () => (
  <div className="search-container">
    <input type="text" placeholder="Search by Address / Txn Hash / Block / Token" />
  </div>
);

const MainMetrics = () => (
  <div className="metrics-container">
    {/* Each metric would be a component or div with data fetched and displayed */}
    <div>ETH Price: $XXXX.XX</div>
    <div>Market Cap: $XXXX.XX</div>
    <div>Transactions: XXXX</div>
    <div>Last Block: XXXXXXXX</div>
    {/* Transaction history graph would be more complex, potentially using a library like Chart.js */}
  </div>
);

// BlocksTable Component with dummy data
const BlocksTable = () => (
  <table>
    <thead>
      <tr>
        <th>Block Number</th>
        <th>Miner</th>
        <th>Transactions</th>
        <th>Gas Used</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>11034985</td>
        <td>0x2a65aca4d5fc5b5c859090a6c34d164135398226</td>
        <td>203</td>
        <td>12450000</td>
      </tr>
      {/* Add more <tr> elements here for more blocks */}
    </tbody>
  </table>
);

// TransactionsTable Component with dummy data
const TransactionsTable = () => (
  <table>
    <thead>
      <tr>
        <th>Txn Hash</th>
        <th>Block</th>
        <th>From</th>
        <th>To</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0x438...0a3b</td>
        <td>11034985</td>
        <td>0x72ba...4b121</td>
        <td>0x8b93...e7085</td>
        <td>1.2 ETH</td>
      </tr>
      {/* Add more <tr> elements here for more transactions */}
    </tbody>
  </table>
);


const Footer = () => <footer>© 2024 Etherscan Clone</footer>;

export default App;
