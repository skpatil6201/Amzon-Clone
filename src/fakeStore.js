// Store object holds the URLs for different product categories from the FakeStore API
const Store = {
  // URL for fetching electronics products
  electronics: "https://fakestoreapi.com/products/category/electronics",  
  
  // URL for fetching jewelry products
  jewelery: "https://fakestoreapi.com/products/category/jewelery",  
  
  // URL for fetching men's clothing products (note: URL encoding for spaces in the category name)
  mensclothing: "https://fakestoreapi.com/products/category/men's%20clothing",  
  
  // URL for fetching women's clothing products (note: URL encoding for spaces in the category name)
  womensclothing: "https://fakestoreapi.com/products/category/women's%20clothing",  
};

// Export the Store object to make it available in other files/modules
export default Store;
