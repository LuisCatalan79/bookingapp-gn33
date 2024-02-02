import HotelCard from "./HotelCard"
import './styles/ListHotels.css'

const ListHotels = ({hotels}) => {
  console.log(hotels);
  return (
    <div className="card-container">
        {
          !hotels || hotels?.length === 0
          ?(<h2>No there hotels with this name</h2>)
          :(
            hotels?.map(hotel=>(
                <HotelCard
                    key={hotel.id}
                    hotel={hotel}
                />
            ))
           )

        }
    </div>
  )
}

export default ListHotels