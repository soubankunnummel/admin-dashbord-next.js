import React from 'react'
import { UserManagementTable } from '../components/table/user-mangement-table';

export default function UserManagements() {
 
  return (
    <div>
      <p className='text-xl text-[#F8F8F8] py-3 '>List of users</p>
      {/* <UserManagement users={users} isSerch={true}/> */}
      <UserManagementTable/>
    </div>
  )
}
