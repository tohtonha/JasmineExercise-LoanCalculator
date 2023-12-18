describe ("Calculates Rate", function () {
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 10000, years: 8,rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});
});

describe ("Checks if decimals use works", function () {
it("should return a result with 2 decimal places", function() {
  const values = {amount: 10043, years: 8, rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

it("should handle years with decimal points", function() {
  const values = {amount: 10043, years: 8.5, rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('124.95');
});

it("should handle loan amount with decimal points", function() {
  const values = {amount: 10435.95, years: 8.5, rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('129.84');
});
});
/// etc
