export { }
type Product = {
    id: number;
    name: string;
    status?: boolean // 
}
const info: Product = { id: 1, name: 'a' };
const a: number = 20;
const b: number = 40;
function sum(numA: number, numB: number): number {
    return numA + numB;
}

sum(a, b);