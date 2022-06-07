import { createContext, useContext } from "react";

export const ProductContext = createContext({});

export function useProductContext() {
	return useContext(ProductContext);
}
