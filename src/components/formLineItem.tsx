import React, { useState } from 'react';
import FormInput from './formInput';
import InvoiceError from './invoiceError';
// import { isNull } from 'lodash';
import { calculatePrice, buildLineItem, validateLineItem } from '../utilities/formLineItem';
import '../styles/invoice-tailwind.css';

const FormLineItem = (props:any) => {
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const [quantity, setQuantity] = useState('');
  const [errors, setErrors] = useState<Array<any>>([]);

  const handleDescriptionChange = (desc:string):void => {
    setDescription(desc);
  }

  const handleCostChange = (cost:string):void => {
    setCost(cost);
  }

  const handleQuantityChange = (quantity:string):void => {
    setQuantity(quantity);
  }

  const clearInputs = ():void => {
    setDescription('');
    setCost('');
    setQuantity('');
  }

  const hideErrors = ():void => {
    setErrors([]);
  }

  const handleAddItem = ():void =>  {
    /**
     * validate
     * create item object
     * props.addToItems
     */

    const errors = validateLineItem(cost, description, quantity);

    if (errors.length === 0) {
      const price = calculatePrice(cost, quantity);
      const newItem = buildLineItem(cost, description, price, quantity);
      props.addToItems(newItem);
      clearInputs();
    } else {
      setErrors(errors);
    }
  }

  return (
    <div className="flex flex-col">
      {errors.length > 0 && (
        <div className="max-flex">
          <InvoiceError errors={errors} hideErrors={hideErrors} />
        </div>
      )}
      <div className="flex sm:flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="flex-1 flex-grow text-gray-700 text-center pr-4 py-2 my-2 rounded">
          <FormInput
            handleChange={handleDescriptionChange}
            name="Description"
            type={"string"}
            value={description}
          />
        </div>
        <div className="flex-initial text-gray-700 text-center pr-4 py-2 my-2 rounded">
          <FormInput
            handleChange={handleCostChange}
            name="Cost"
            type={"number"}
            value={cost}
          />
        </div>
        <div className="flex-initial text-gray-700 text-center pr-4 py-2 my-2 rounded">
          <FormInput
            handleChange={handleQuantityChange}
            name="Quantity"
            type={"number"}
            value={quantity}
          />
        </div>
        <div className="self-end flex-end text-gray-700 text-center bg-white mb-4">
          <button
            name="add-btn"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleAddItem()}
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormLineItem;