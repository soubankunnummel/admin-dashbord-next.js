import React from 'react'
import RatingAndReviewTable from '../components/table/rating-review'

export default function RitingAndReview() {
  const users = [
    {
      id: 1,
      name: "Yeray Rosalos",
      email: "yerayrosales@gmail.com",
      phone: "+91-098765432",
      avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      comment: "Very good work",
      date_time: 'July 3, 2023 12:29 pm',
      rating: 3,
      aproved:true,
      actioni_done:true
    },
    {
      id: 1,
      name: "Yeray Rosalos",
      email: "yerayrosales@gmail.com",
      phone: "+91-098765432",
      avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      comment: "Very good work",
      date_time: 'July 3, 2023 12:29 pm',
      blocked: false,
      rating: 5,
      aproved:false,
      actioni_done:true
    },
    {
      id: 1,
      name: "Yeray Rosalos",
      email: "yerayrosales@gmail.com",
      phone: "+91-098765432",
      avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      comment: "Very good work",
      date_time: 'July 3, 2023 12:29 pm',
      blocked: false,
      rating: 5,
      aproved:false,
      actioni_done:false
    },
    
  ];
  return (
    <div>
      <p className='text-xl text-[#F8F8F8] py-3 '>List of reviews with ratings, comments, and user details </p>
      <RatingAndReviewTable users={users}/>
    </div>
  )
}
