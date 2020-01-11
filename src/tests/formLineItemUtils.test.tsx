import {
  buildLineItem,
  calculatePrice,
  validateLineItem
} from "../utilities/formLineItem";

const cost = "12.47";
const desc = "Socks";
const qty = "3";

const costError = { cost: "Cost is required" };
const descError = { description: "Description is required" };
const qtyError = { quantity: "Quantity is required" };

describe('FormLineItems Utility', () => {
  test("calculatePrice correctly calculates total price", () => {
    const cost = "9.99";
    const qty = "5";

    const result = calculatePrice(cost, qty);
    expect(result).toEqual(49.95);
  });

  test("buildLineItem correctly returns Line Item object", () => {
    const cost = "12.47";
    const desc = "Socks";
    const price = 37.41;
    const qty = "3";

    const lineItem = buildLineItem(cost, desc, price, qty);

    expect(lineItem.cost).toEqual(12.47);
    expect(lineItem.description).toEqual("Socks");
    expect(lineItem.price).toEqual(37.41);
    expect(lineItem.quantity).toEqual(3);
  });

    test("validateLineItem returns a cost error when not entered", () => {
      const errors = validateLineItem("", desc, qty);

      expect(errors).toHaveLength(1);
      expect(errors[0]).toEqual(costError);
    });

    test("validateLineItem returns a description error when not entered", () => {
      const errors = validateLineItem(cost, "", qty);

      expect(errors).toHaveLength(1);
      expect(errors[0]).toEqual(descError);
    });

    test("validateLineItem returns a quantity error when not entered", () => {
      const errors = validateLineItem(cost, desc, "");

      expect(errors).toHaveLength(1);
      expect(errors[0]).toEqual(qtyError);
    });
  
    test("validateLineItem returns multiple errors when values not provided", () => {
      const errors = validateLineItem(cost, "", "");

      expect(errors).toHaveLength(2);
      expect(errors[0]).toEqual(descError);
      expect(errors[1]).toEqual(qtyError);
    });
});