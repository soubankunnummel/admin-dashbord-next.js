import React from 'react'

export const RatingStars = ({ rating }: { rating: number }) => {
    // Ensure rating is a valid number between 0-5
    const validRating = Math.min(5, Math.max(0, rating));
    
    return (
      <div className="flex">
        <span className={`text-xl ${validRating >= 1 ? "text-yellow-400" : "text-gray-300"}`}>★</span>
        <span className={`text-xl ${validRating >= 2 ? "text-yellow-400" : "text-gray-300"}`}>★</span>
        <span className={`text-xl ${validRating >= 3 ? "text-yellow-400" : "text-gray-300"}`}>★</span>
        <span className={`text-xl ${validRating >= 4 ? "text-yellow-400" : "text-gray-300"}`}>★</span>
        <span className={`text-xl ${validRating >= 5 ? "text-yellow-400" : "text-gray-300"}`}>★</span>
      </div>
    );
  };
