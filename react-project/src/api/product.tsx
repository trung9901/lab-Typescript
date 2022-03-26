import instance from "./instance";

export const list = () => {
    const url = "/products";
    return instance.get(url);
}
export const get = (id: number) => {
    const url = `/product/${id}`
    return instance.get(url);
}
export const add = (product: {}) => {
    const url = "/products"
    return instance.post(url, product);
}
export const update = (product: {}) => {
    const url = `/product/${product.id}`;
    return instance.put(url, product);
}
export const remove = (id: number) => {
    const url = `/product/${id}`;
    return instance.delete(url);
}