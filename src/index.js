const obj = {
  a: "apple crisp",
  b: "buttercream",
  c: {
    cd: "cheese danish",
  },
};

console.log(obj?.c?.cd, obj?.f?.fa);

if (module.hot) {
  module.hot.accept();
}
