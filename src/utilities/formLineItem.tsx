export const calculatePrice = (cost:string, quantity:string): number => {
    return Number(cost) * Number(quantity);
  }

export const buildLineItem = (cost:string, description:string, price:number, quantity:string): any => {
  return {
      cost: Number(cost),
      description,
      price,
      quantity: Number(quantity),
  }
}

export const validateLineItem = (cost:string, description:string, quantity:string): any[] => {
  let errors:any[] = [];

  if (!cost) {
    errors.push({"cost": "Cost is required"});
  }

  if (!description) {
    errors.push({"description": "Description is required"});
  }

  if (!quantity) {
    errors.push({"quantity": "Quantity is required"});
  }
  
  return errors;
}
