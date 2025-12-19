import React from "react";
import AdminStatistics from "../../../components/Dashboard/Statistics/AdminStatistics";
import useRole from "../../../hooks/useRole";
import LoadingSpinner from "../../shared/LoadingSpinner";
import CustomerStatistics from "../../../components/Dashboard/Statistics/CustomerStatistics";
import VendorStatistics from "../../../components/Dashboard/Statistics/VendorStatistics";

const Statistics = () => {
  const [role, isRoleLoading] = useRole();
  if (isRoleLoading) return <LoadingSpinner />;
  return (
    <div>
      {role === "admin" && <AdminStatistics />}
      {role === "customer" && <CustomerStatistics />}
      {role === "vendor" && <VendorStatistics />}
    </div>
  );
};

export default Statistics;
