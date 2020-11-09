const inputs = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
};

const spreadInputs = { ...inputs, ...{ firstName: "me" } };

console.log(inputs);
console.log(spreadInputs);
