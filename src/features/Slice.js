import { createSlice } from "@reduxjs/toolkit";
// import products from "../products.json";

const storedUser = localStorage.getItem("user");
const storedCartItems = localStorage.getItem("cart");

const initialState = {
  cart: storedCartItems ? JSON.parse(storedCartItems) : [],
  isSidebarOpen: false,
  isCartOpen: false,
  isSignInOpen: false,
  isSignUpOpen: false,
  user: storedUser ? JSON.parse(storedUser) : [],
};

export const featureSlice = createSlice({
  name: "features",
  initialState,
  reducers: {
    currentUser: (state, action) => {
      state.user = action.payload;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
      state.isCartOpen = false;
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
      state.isSidebarOpen = false;
    },
    toggleSignIn: (state) => {
      state.isSignInOpen = !state.isSignInOpen;
    },
    toggleSignUp: (state) => {
      state.isSignUpOpen = !state.isSignUpOpen;
    },
    addToCart(state, action) {
      const productToAdd = action.payload;

      if (productToAdd) {
        const existingItem = state.cart.find(
          (item) => item.id === productToAdd.id
        );

        if (existingItem) {
          existingItem.quantity += productToAdd.quantity;
        } else {
          state.cart.push({ ...productToAdd, quantity: productToAdd.quantity });
        }
        productToAdd.quantity = 1;
      }
    },
    // addQuantity(state, action) {
    //   const productId = action.payload;
    //   const productToUpdate = state.products.find(
    //     (product) => product.id === productId
    //   );
    //   if (productToUpdate) {
    //     productToUpdate.quantity = productToUpdate.quantity + 1;
    //   }
    // },
    // minusQuantity(state, action) {
    //   const productId = action.payload;
    //   const updatedCart = state.products.map((product) => {
    //     if (product.id === productId && product.quantity > 1) {
    //       return {
    //         ...product,
    //         quantity: product.quantity - 1,
    //       };
    //     }
    //     return product;
    //   });

    //   return {
    //     ...state,
    //     products: updatedCart,
    //   };
    // },
    addCartQuantity(state, action) {
      const productId = action.payload;
      const productToUpdate = state.cart.find(
        (product) => product.id === productId
      );
      if (productToUpdate) {
        productToUpdate.quantity = productToUpdate.quantity + 1;
      }
    },

    minusCartQuantity(state, action) {
      const productId = action.payload;
      const updatedCart = state.cart.map((product) => {
        if (product.id === productId && product.quantity > 1) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });

      return {
        ...state,
        cart: updatedCart,
      };
    },
    deleteCartItem(state, action) {
      const productId = action.payload;
      const updatedCart = state.cart.filter((item) => item.id !== productId);
      state.cart = updatedCart;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  // addQuantity,
  addCartQuantity,
  // minusQuantity,
  minusCartQuantity,
  deleteCartItem,
  clearCart,
  toggleSidebar,
  toggleCart,
  toggleSignUp,
  currentUser,
  toggleSignIn,
  setProducts,
} = featureSlice.actions;

export default featureSlice.reducer;
