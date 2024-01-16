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

  };

  export default PrivateRoute