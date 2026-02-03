// Câu 1
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}
// Câu 2
const products = [
    new Product(1, "Laptop Dell XPS", 35000000, 10, "Electronics", true),
    new Product(2, "iPhone 15", 32000000, 5, "Electronics", true),
    new Product(3, "Samsung TV", 15000000, 0, "Electronics", false),
    new Product(4, "Mechanical Keyboard", 2500000, 20, "Accessories", true),
    new Product(5, "Wireless Mouse", 500000, 50, "Accessories", true),
    new Product(6, "Headphones", 1200000, 0, "Accessories", false)
];
console.log("--- Câu 2: Danh sách sản phẩm ---");
console.log(products);

// Câu 3
const productNamesAndPrices = products.map(p => ({
    name: p.name,
    price: p.price
}));
console.log("\n--- Câu 3: Tên và giá sản phẩm ---");
console.log(productNamesAndPrices);

// Câu 4
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("\n--- Câu 4: Sản phẩm tồn kho ---");
console.log(inStockProducts);


// Câu 5
const hasHighPricedProduct = products.some(p => p.price > 30000000);
console.log("\n--- Câu 5: Sản phẩm có giá > 30,000,000? ---");
(hasHighPricedProduct) ? console.log("Có sản phẩm giá 30.000.000") : console.log("Không có sản phẩm giá 30.000.000");

// Câu 6
const accessories = products.filter(p => p.category === "Accessories");
const allAccessoriesAvailable = accessories.length > 0 && accessories.every(p => p.isAvailable);
console.log("\n--- Câu 6: Tất cả sản phẩm thuộc danh mục Accessories? ---");
(allAccessoriesAvailable) ? console.log("Có sản phẩm thuộc danh mục Accessories") : console.log("Không có sản phẩm thuộc danh mục Accessories");

// Câu 7
const totalInventoryValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
console.log("\n--- Câu 7: Tổng giá trị kho hàng ---");
console.log(totalInventoryValue);

// Câu 8
console.log("\n--- Câu 8: Chi tiết sản phẩm (for...of) ---");
for (const product of products) {
    const status = product.isAvailable ? "Available" : "Unavailable";
    console.log(`${product.name} - ${product.category} - ${status}`);
}


// Câu 9
console.log("\n--- Câu 9: Tên thuộc tính và giá trị tương ứng (for...in) ---");
if (products.length > 0) {
    const firstProduct = products[0];
    console.log("Details for the first product:");
    for (const key in firstProduct) {
        console.log(`${key}: ${firstProduct[key]}`);
    }
}


// Câu 10
const availableAndInStockNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
console.log("\n--- Câu 10: Danh sách các sản phẩm đang bán và còn hàng ---");
console.log(availableAndInStockNames);
