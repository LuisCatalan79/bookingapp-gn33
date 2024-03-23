import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import HotelCard from "../HomePage/HotelCard"
import './styles/OtherHotel.css'

const OtherHotels = ({cityId, hotelId}) => {

    const url=`http://localhost:8080/hotels?cityId=${cityId}`
    const [hotels, getHotels] = useFetch(url)

    useEffect(() => {
        if (cityId) {
            getHotels()
        }
          //cityId && getHotels()  
    }, [url])
    
    

  return (
    <div className="otherhotel">
        <h2 className="otherhotel__name">Other Hotels in <span className="otherhotel__name__country">{hotels?.[0].city.name}</span> </h2>
        <div className="card-container">
            {
                hotels?.filter(hotelInfo=> hotelInfo.id !== hotelId ).map(hotelInfo => (
                    <HotelCard
                        key={hotelInfo.id}
                        hotel={hotelInfo}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default OtherHotels