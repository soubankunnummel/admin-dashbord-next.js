import React from 'react'
import { RatingAndReviewTable } from '../components/table/rating-review';

export default function RitingAndReview() {
 
  return (
    <div>
      <p className='text-xl text-[#F8F8F8] py-3 '>List of reviews with ratings, comments, and user details </p>
      <RatingAndReviewTable/>
    </div>
  )
}
