import ReviewList from '../ReviewList'
import React, { useState } from 'react'
import EachReview from './EachReview'
import CreateReview from './CreateReview';

export default function Reviews() {
  const [reviews, setReviews] = useState(ReviewList)
  
  function deleteReview(id) {
    setReviews(reviews.filter((item) => { return id !== item.id }));
  }

  // add new review.
  function addReview(review) {
    setReviews([review, ...reviews]);
  }
  return (
    <>
      <CreateReview handleReviewCreate={addReview} />
      {reviews.length > 0 ? reviews.map((item, index) => {
        return <EachReview review={item} key={index} handleDelete={() => deleteReview(item.id)} />
      }) : 'No Reviews'}
    </>
  )
}