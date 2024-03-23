import { useEffect } from "react"
import useCrud from "../../hooks/useCrud"


const CommentsSection = ({hotelId}) => {

   const [ reviews, getReviews ] = useCrud()

   useEffect(() =>{
        if (hotelId) {
            getReviews(`/reviews?hotelId=${hotelId}`)
        }
    },[hotelId])
        

  return (
    <div>
        {
            reviews?.results.map(reviewInfo => (
                <div key = {reviewInfo.id}>
                    <div>{reviewInfo.rating}⭐</div>
                    <div><span>Comment date: </span>{reviewInfo.createdAt}</div>
                    <p><span>Comment: </span>{reviewInfo.comment}</p>
                </div>
            ))
        }
    </div>
  )
}

export default CommentsSection