export { }

const products: Product[] = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },

]

function show<T>(product: T): void {
    // product.map()
};

show(products);