import React from 'react'
import UserManagement from '../components/table/user-management'

export default function UserManagements() {
  const users = [
    {
      id: 1,
      name: "Yeray Rosalos",
      email: "yerayrosales@gmail.com",
      phone: "+91-098765432",
      avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      sold: 2,
      bought: 1,
      blocked: false,
      rating: 3,
    },
    {
      id: 2,
      name: "Talah Cotton",
      email: "talahcotton2@gmail.com",
      phone: "+91-098765432",
      avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
      sold: 0,
      bought: 5,
      blocked: true,
      rating: 4,
    },
    {
      id: 3,
      name: "Talah Cotton",
      email: "talahcotton2@gmail.com",
      phone: "+91-098765432",
      avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
      sold: 0,
      bought: 5,
      blocked: true,
      rating: 4,
    },
    {
      id: 4,
      name: "Talah Cotton",
      email: "talahcotton2@gmail.com",
      phone: "+91-098765432",
      avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
      sold: 0,
      bought: 5,
      blocked: true,
      rating: 4,
    },
    {
      id: 5,
      name: "Talah Cotton",
      email: "talahcotton2@gmail.com",
      phone: "+91-098765432",
      avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
      sold: 0,
      bought: 5,
      blocked: true,
      rating: 4,
    },
    {
      id: 6,
      name: "Talah Cotton",
      email: "talahcotton2@gmail.com",
      phone: "+91-098765432",
      avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
      sold: 0,
      bought: 5,
      blocked: true,
      rating: 4,
    },
    {
      id: 7,
      name: "Talah Cotton",
      email: "talahcotton2@gmail.com",
      phone: "+91-098765432",
      avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
      sold: 0,
      bought: 5,
      blocked: true,
      rating: 4,
    },
  ];
  return (
    <div>
      <p className='text-xl text-[#F8F8F8] py-3 '>List of users</p>
      <UserManagement users={users} isSerch={true}/>
    </div>
  )
}
