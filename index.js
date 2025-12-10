const cart = [
  { name: "Laptop", price: 2200, quantity: 1 },
  { name: "Mouse", price: 50, quantity: 2 },
];
const [product1, product2] = cart;
const prices = [product1.price, product2.price];
const priceSum = prices.reduce((acc, current) => {
  return acc + current;
});
console.log(priceSum);

const addProduct = (product) => {
  const updatedCart = [product, ...cart];
  return updatedCart;
};
const newCart = addProduct({ name: "monitor", price: 67, quantity: 3 });
console.log(newCart);

const updateQuantity = (productName, newQty) => {
        cart.forEach((item) => {
    const { name, quantity } = item;
    if(item.name.toLocaleLowerCase() === productName){
        item.quantity = newQty;
    };
  });
};
updateQuantity("mouse", 200);
