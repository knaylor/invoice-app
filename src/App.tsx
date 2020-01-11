import React from 'react';
import './App.css';
import './styles/invoice-tailwind.css';
import InvoiceContainer from './components/invoiceContainer';

const App: React.FC = () => {
  return (
    <div className="App bg-gray-200">
      <InvoiceContainer />
    </div>
  );
}

export default App;
