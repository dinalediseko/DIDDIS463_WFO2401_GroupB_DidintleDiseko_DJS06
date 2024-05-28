// Data Sets
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Exercises

console.log("ForEach Basics:");
// Log each name
names.forEach(name => console.log(name));
// Log each province
provinces.forEach(province => console.log(province));
// Log each name with a matching province
names.forEach(name => {
  const matchingProvince = provinces.find(province => province.startsWith(name[0]));
  if (matchingProvince) {
    console.log(`${name} (${matchingProvince})`);
  }
});

console.log("Uppercase Transformation:");
// Uppercase Transformation
const provincesUpperCase = provinces.map(province => province.toUpperCase());
console.log(provincesUpperCase);

console.log("Name Lengths:");
// Name Lengths
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

console.log("Sorting:");
// Sorting
const sortedProvinces = provinces.slice().sort();
console.log(sortedProvinces);

console.log("Filtering Cape:");
// Filtering Cape
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log("Remaining provinces count:", filteredProvinces.length);

console.log("Finding 'S':");
// Finding 'S'
const containsS = names.map(name => name.includes('S'));
const hasS = containsS.some(value => value);
console.log(hasS);

console.log("Creating Object Mapping:");
// Creating Object Mapping
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);

console.log("Advanced Exercises (Single console.log Execution):");

// Log Products
console.log("Log Products:");
products.forEach(product => console.log(product.product));

// Filter by Name Length
console.log("Filter by Name Length:");
const filteredProducts = products.filter(product => product.product.length <= 5);
console.log(filteredProducts);

// Price Manipulation
console.log("Price Manipulation:");
const totalPrice = products
  .filter(product => product.price.trim() !== '' && !isNaN(product.price))
  .reduce((total, product) => total + Number(product.price), 0);
console.log("Total Price:", totalPrice);

// Concatenate Product Names
console.log("Concatenate Product Names:");
const concatenatedNames = products.reduce((acc, product) => acc + product.product + ', ', '');
console.log(concatenatedNames);

// Find Extremes in Prices
console.log("Find Extremes in Prices:");
const prices = products.map(product => Number(product.price)).filter(price => !isNaN(price));
const highestPrice = Math.max(...prices);
const lowestPrice = Math.min(...prices);
console.log(`Highest: ${highestPrice}. Lowest: ${lowestPrice}.`);

// Object Transformation
console.log("Object Transformation:");
const transformedProducts = Object.entries(products).reduce((acc, [key, value]) => {
  acc[key] = { name: value.product, cost: Number(value.price) || 0 };
  return acc;
}, {});
console.log(transformedProducts);
