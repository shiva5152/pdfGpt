"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";
import { auth } from "@/config/firebase";
interface myUser {
  displayName: string;
  email: string;
  uid: string;
}
interface AuthContextType {
  loading: Boolean;
  userLoading: Boolean;
  user: User | null; // User or null if not authenticated
  login: (username: string, password: string) => void;
  signup: (username: string, password: string) => void;
  loginWithGoogle: () => void;
  logout: () => void;
}
const initialAuthState: AuthContextType = {
  user: null,
  userLoading: false,
  loading: false,
  login: (username: string, password: string) => {},
  signup: (username: string, password: string) => {},
  loginWithGoogle: () => {},
  logout: () => {},
};
const AuthContext = createContext<AuthContextType>(initialAuthState);

// function storeUser(user: myUser) {
//   localStorage.setItem("user", JSON.stringify(user));
// }
// function getUser() {
//   const userStr = localStorage.getItem("user");
//   let user = null;
//   if (userStr) user = JSON.parse(userStr);

//   console.log(user);
//   return user;
// }
// const globalUser = getUser();
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  return context;
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);
  console.log(user);

  if (user) {
  }

  useEffect(() => {
    setUserLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
      setUserLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = async (email: string, password: string) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result);
      setUser(result);
      const tempUser = {
        uid: result?.user?.uid,
        displayName: result?.user?.displayName as string,
        email: result?.user?.email as string,
      };
    } catch (error: any) {
      console.log(error);
      alert(error.message);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
      setUser(result);
    } catch (error: any) {
      console.log(error);
      alert(error.message);
    }
  };
  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result);
      const tempUser = {
        uid: result?.user?.uid,
        displayName: result?.user?.displayName as string,
        email: result?.user?.email as string,
      };

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem("user");
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userLoading,
        login,
        signup,
        loginWithGoogle,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
