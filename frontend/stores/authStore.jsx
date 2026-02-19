import { create } from "zustand";

const ProductStore = create((set) => ({
    products: [],
    getProducts: () => { },
}));

export default ProductStore;
