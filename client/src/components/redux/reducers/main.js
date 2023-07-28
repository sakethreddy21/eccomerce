import { getProductsreducder } from "./Productsreducer";
import {combineReducers} from "@reduxjs/toolkit"

const rootreducers = combineReducers({
  getproductsdata : getProductsreducder
});

export default rootreducers;