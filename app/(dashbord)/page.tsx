import React from "react";
import Graphs from "./components/graphs";
import { UserManagementTable } from "./components/table/user-mangement-table";

export default function Home() {
 
  return (
    <div>
      <p className="text-xl text-[#F8F8F8] py-3 ">Analytics </p>
      <Graphs/>
      {/* <UserManagement users={users} isSerch={false} /> */}
      <UserManagementTable isTitle isSearch={false}/>
    </div>
  );
}
