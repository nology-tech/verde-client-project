import { onAuthStateChanged } from "@firebase/auth";
import { User as FirebaseUser } from "firebase/auth";
import { useState, useEffect } from "react";
import { Navigate } from "react-router";
import { auth } from '../../firebase'

type PrivateRouteProps = {
    element: React.ReactNode
}

const PrivateRoute = ({ element }: PrivateRouteProps) => {
    // This is a custom route component that checks authentication before rendering the provided element
    const [user, setUser] = useState<FirebaseUser | null>();
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (authUser: FirebaseUser | null) => {
        console.log(authUser)
        setUser(authUser);
        console.log(user)
      });

      return () => unsubscribe();
    }, []);
    
    if (!user) {
      // Redirect to the login page if the user is not authenticated
      return <Navigate to="/" />;
    }
  
    return element;
  };

  export default PrivateRoute