import React, { useEffect, useState } from 'react';
import FormLineItem from './formLineItem';
import FormSubmit from './formSubmit';
import InvoiceAlert from './invoiceAlert';
import InvoiceList from './invoiceList';
import '../styles/invoice-tailwind.css';

const Invoice = () => {
  const seedInvoice = {
    description: 'Test',
    cost: 2.99,
    quantity: 10,
    price: 29.90
  };
  
  const [lineItems, setLineItems] = useState<Array<LineItem>>([seedInvoice]);
  const addToItems = (item:LineItem):void => {
    setLineItems([...lineItems, item]);
  }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getTotal = () => {
    const totalReducer = (acc:number, value:number) => acc + value;
    return lineItems.map(item => item.price).reduce(totalReducer);
  }
  
  const [invoiceTotal, setInvoiceTotal] = useState(0);
  useEffect(() => {
    if (lineItems.length) {
      setInvoiceTotal(getTotal());
    } else {
      setInvoiceTotal(0);
    }
  }, [getTotal, lineItems]);
  
  const [invoiceSubmitted, setInvoiceSubmitted] = useState(false);
  const showInvoiceSummary = () => {
    setInvoiceSubmitted(true);
  }
  const hideInvoiceSummary = () => {
    setInvoiceSubmitted(false);
    setLineItems([]);
  }

  const submitInvoice = () => {
    const invoice = { items: lineItems, total: invoiceTotal};
    showInvoiceSummary();
    // clear lineItems
    
    console.log('Invoice: ', invoice);
    return invoice;
  }

  return (
    <div className='max-full bg-white rounded overflow-hidden shadow-lg px-3 py-3'>
      {invoiceSubmitted &&
        <InvoiceAlert items={lineItems} total={invoiceTotal} hideInvoiceSummary={hideInvoiceSummary} />
      }
      <FormLineItem addToItems={addToItems} />
      <InvoiceList lineItems={lineItems} />
      <FormSubmit total={invoiceTotal} submitInvoice={submitInvoice} />
    </div>
  );
}

export default Invoice;