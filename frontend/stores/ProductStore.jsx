import { create } from "zustand";

const ProductStore = create((set) => ({
  products: [],
  // errorMessage:'',
  // isLoading:false,
  getProducts: () => {
    fetch("http://127.0.0.1:8000/adack/list/")
    // set({isLoading:true})
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        set({ products: data });
      }).catch(()=>{console.log('error while fetching')})
  },
}));

export default ProductStore;
