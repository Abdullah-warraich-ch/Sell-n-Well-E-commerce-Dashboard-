import { useState, useEffect, useContext, createContext } from "react";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import auth from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error);
        }
    };
    const login = async (e) => {
        e.preventDefault();
        console.log("button clicked");
        setErrorMsg("");
        setLoading(true);
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            const reponse = await signInWithEmailAndPassword(auth, email, password);
            console.log("Login Success", reponse);
        } catch (error) {
            console.log(error);
            setErrorMsg("Password Theek Lga");
        } finally {
            setLoading(false);
        }
    };

    const value = {
        user,
        loading,
        login,
        errorMsg,
        logout
    };

    return <AuthContext value={value}>{children}</AuthContext>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
