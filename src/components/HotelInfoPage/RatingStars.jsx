import {AiOutlineStar , AiFillStar} from "react-icons/ai"

const RatingStars = ({hotel}) => {
  const rank=[]
  for (let i = 0; i< hotel; i++){
    rank.push(i)
  }
  // console.log('*******************************************************');
  const rating = Math.round(Number(hotel || 1));
  console.log(rating);
  return (
    <div>
        {
          rank.map(star=>(
            // <AiFillStar/>
            
            [... new Array(rating)].map((star, index)=>{
              index<rating? <AiFillStar/> : <AiOutlineStar/>
            })
            ))
        }
    </div>
  )
}

export default RatingStars