import { create } from "zustand";

const ProductStore = create((set) => ({
  products: [],
  getProducts: () => {
    fetch("http://127.0.0.1:8000/adack/list/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        set({ products: data });
      });
  },
}));

export default ProductStore;
