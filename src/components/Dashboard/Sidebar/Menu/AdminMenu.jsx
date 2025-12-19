import React from "react";
import { FaUserCog, FaUserTag } from "react-icons/fa";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <div>
      <MenuItem icon={FaUserCog} label="Manage Users" address="manage-users" />
      <MenuItem
        icon={FaUserTag}
        label="Vendor Requests"
        address="vendor-requests"
      />
    </div>
  );
};

export default AdminMenu;
