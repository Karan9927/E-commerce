import React, { useEffect, useState } from "react"; // Import React and useState
import ProductContext from "./productContext";
import productData from "../Assets/products.json";

import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { fireDB } from "../firebase/firebase";
import { nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

function ProductState(props) {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  // const populateInitialProducts = async () => {
  //   try {
  //     const productRef = collection(fireDB, "products");
  //     productData.forEach(async (product) => {
  //       await addDoc(productRef, product);
  //     });
  //   } catch (error) {
  //     console.error("Error populating initial products:", error);
  //   }
  // };

  const getProductData = async () => {
    try {
      const data = await getDocs(collection(fireDB, "products"));
      const productsData = data.docs.map((doc) => ({ ...doc.data() }));
      setProducts(productsData);
      console.log(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  const getOrdersData = async () => {
    try {
      const data = await getDocs(collection(fireDB, "orders"));
      const orderData = data.docs.map((doc) => ({ ...doc.data() }));
      setOrders(orderData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
    getOrdersData();
    // populateInitialProducts();
  }, []);

  const addProducts = async (item) => {
    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, item);
      toast.success("Product Added ");
      getProductData();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (item) => {
    try {
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("Product deleted!");
      // Call getProductData after successful deletion
      getProductData();
    } catch (error) {
      console.error("Error deleting document: ", error);
      toast.error("Failed to delete product!");
    }
  };

  const getUserData = async () => {
    try {
      const data = await getDocs(collection(fireDB, "users"));
      const userData = data.docs.map((doc) => ({ ...doc.data() }));
      setUsers(userData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
    // populateInitialProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        addProducts,
        deleteProduct,
        users,
        orders,
        getOrdersData,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductState;
