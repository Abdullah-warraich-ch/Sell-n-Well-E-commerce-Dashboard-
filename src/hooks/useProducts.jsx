import { getDocs, collection } from 'firebase/firestore'
import { db } from "@/firebase";
import React, { useEffect } from "react";


export function useProducts() {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const products = await getDocs(collection(db, "products"));
                setProducts(products.docs.map((doc) => {

                    return { id: doc.id, ...doc.data() }
                }));
            } catch (error) {
                console.error("Error fetching products:", error);
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchProducts();
    }, [])
    return { products, loading, error }
}

