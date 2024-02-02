import {AiOutlineStar , AiFillStar} from "react-icons/ai"

const RatingStars = ({hotel}) => {
  const rank=[]
  for (let i = 0; i< hotel; i++){
    rank.push(i)
  }
  console.log('*******************************************************');
  console.log(hotel);
  return (
    <div>
        {
          rank.map(star=>(
            <AiFillStar/>
          ))

            // [... new Array(Number(hotel?.rating))].map((star, index)=>{
            //      index<hotel?.rating ? <AiFillStar/> : <AiOutlineStar/>
            // })
        }
    </div>
  )
}

export default RatingStars