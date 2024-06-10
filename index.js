// Array of grocery items
const groceryItems = [
    { id: 1, name: "Apple", category: "Fruit", price: 1.25 },
    { id: 2, name: "Milk", category: "Dairy", price: 2.5 },
    { id: 3, name: "Bread", category: "Bakery", price: 3 },
    { id: 4, name: "Eggs", category: "Dairy", price: 2 },
  ];
  
  // Finds any item by name
  const foundItem = groceryItems.find(item => item.name == "Apple");
  console.log("Found item:", foundItem);
  
  // map out items to get an array of item names
  const itemNames = groceryItems.map(item => item.name);
  console.log("Items_names:", itemNames)
  
  // get the total price of all items
  const totalPrice = groceryItems.reduce((total, item) => total + item.price, 0);
  console.log("Total_price:", totalPrice)
  
  // Filter items by a specific category, for example, "Dairy"
  const dairyItems = groceryItems.filter(item => item.category == "Dairy");
  console.log("Dairy_items:", dairyItems)
  