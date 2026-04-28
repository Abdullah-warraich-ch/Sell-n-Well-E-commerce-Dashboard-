import { getDocs, getDoc, doc, collection, query, orderBy, updateDoc } from 'firebase/firestore'
import { db } from "@/firebase";
import React, { useEffect } from "react";

export function useOrders() {
    const [orders, setOrders] = React.useState([]);
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const fetchOrders = async () => {
        try {
            setLoading(true)
            const ordersQuery = query(collection(db, "orders"), orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(ordersQuery);
            setOrders(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        } catch (error) {
            console.error("Error fetching orders:", error);
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchOrders();
    }, [])

    return { orders, loading, error, refreshOrders: fetchOrders }
}

export function useOrderDetail(id) {
    const [order, setOrder] = React.useState(null);
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    useEffect(() => {
        if (!id) return;

        const fetchOrder = async () => {
            try {
                setLoading(true)
                const docRef = doc(db, "orders", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setOrder({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setError(new Error("Order not found"));
                }
            } catch (error) {
                console.error("Error fetching order:", error);
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchOrder();
    }, [id])

    return { order, loading, error }
}

export async function updateOrderStatus(orderId, newStatus) {
    try {
        const docRef = doc(db, "orders", orderId);
        await updateDoc(docRef, { status: newStatus });
        return { success: true };
    } catch (error) {
        console.error("Error updating order status:", error);
        return { success: false, error };
    }
}
