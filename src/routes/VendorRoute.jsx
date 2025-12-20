import React from "react";

import { Navigate } from "react-router";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../pages/shared/LoadingSpinner";

const VendorRoute = ({ children }) => {
  const [role, isRoleLoading] = useRole();
  if (isRoleLoading) return <LoadingSpinner></LoadingSpinner>;

  if (role === "vendor") return children;
  {
    return <Navigate to="/" replace="true"></Navigate>;
  }
};

export default VendorRoute;
