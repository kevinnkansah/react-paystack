import React from 'react';
import logo from './logo.svg';
import { usePaystackPayment } from 'react-paystack';
import './App.css';

const config = {
  reference: (new Date()).getTime().toString(),
  email: "user@example.com",
  amount: 20000, // Amount is in the country's lowest currency. E.g Kobo for NGN, cents for ZAR
  publicKey: 'pk_test_052ce96482b4b148f1f14340ecb854ef779fd018',
  currency: 'ZAR', // South African Rand
};

// you can call this function anything
const onSuccess = (reference: any) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for whatever you want to do when the Paystack dialog closed.
  console.log('closed');
}

const PaystackHookExample = () => {
  const initializePayment = usePaystackPayment(config);
  return (
    <div>
      <button onClick={() => {
        initializePayment({ onSuccess, onClose });
      }}>Paystack Hooks Implementation</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <PaystackHookExample />
    </div>
  );
}

export default App;
