import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import { Map, Marker, ZoomControl } from "pigeon-maps"
import OtherHotels from "../components/HotelInfoPage/OtherHotels"
import ReservationsHotel from "../components/HotelInfoPage/ReservationsHotel"
import SliderImgs from "../components/HotelInfoPage/SliderImgs"
import CommentsSection from "../components/HotelInfoPage/CommentsSection"
import RatingStars from "../components/HotelInfoPage/RatingStars"
import './styles/HotelInfoPage.css'

const HotelInfoPage = () => {

    const {id} = useParams()

    const url=`https://hotels-api.academlo.tech/hotels/${id}`
    const [hotel, getHotel] = useFetch(url)

    useEffect(() =>{
        getHotel()
    },[url])
    console.log(hotel);
  return (
    <div>
        <section className="hotel">
            <header className="hotel__name">
                <h2 className="hotel__name__value">{hotel?.name}</h2>
                <span>Rating</span>
                <RatingStars
                    hotel={Number(hotel?.rating)}
                />
            </header>
            <div className="slider-container">
                <SliderImgs
                    hotel={hotel}
                />
                <div className="slider-footer"></div>
            </div>
            <div className="hotel__map">
                {
                    hotel && (
                    <Map defaultCenter={[+hotel?.lat, +hotel?.lon]} height={300} zoom={11}>
                        <Marker
                            width={50}
                            color="#34a350"
                            anchor={[+hotel?.lat, +hotel?.lon]}
                        />
                        <ZoomControl/>
                    </Map>
                    )
                }
            </div>
            <div>
                <div>
                    <span>{hotel?.city.name}</span>
                    <span>{hotel?.city.country}</span>
                </div>
                <div>
                    <i className='bx bx-map'></i>
                    <span>{hotel?.address}</span>
                </div>
                <p>{hotel?.description}</p>
            </div>
            <CommentsSection
               hotelId={hotel?.id}
            />
            {
                localStorage.getItem('token') && (
                    <ReservationsHotel
                        hotelId={hotel?.id}
                    />
                )
            }
            <OtherHotels
                cityId={hotel?.city.id}
                hotelId={hotel?.id}
            />
        </section>
    </div>
  )
}

export default HotelInfoPage


