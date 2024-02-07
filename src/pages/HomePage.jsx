import { useEffect, useRef, useState } from "react"
import { getHotelsThunk } from "../store/states/hotels.state"
import { useDispatch, useSelector } from "react-redux"
import ListHotels from "../components/HomePage/ListHotels"
import FilterName from "../components/HomePage/FilterName"
import FilterPrice from "../components/HomePage/FilterPrice"
import FilterCities from "../components/HomePage/FilterCities"
import './styles/HomePage.css'

const HomePage = () => {

  const [nameImput, setNameImput] = useState('')

  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })

  const hotels = useSelector(states => states.hotels)

  const dispatch = useDispatch()

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels'
    dispatch(getHotelsThunk(url))
  }, [])

  // console.log(hotels);

  const hotelsFiltered = hotels?.results.filter(hotelInfo => {
    //Filter Name
    const filterName = hotelInfo.name.toLowerCase().includes(nameImput)
    //Filter Price
    const priceHotel = +hotelInfo.price
    const filterPrice = fromTo.from <= priceHotel && priceHotel <= fromTo.to
    //Filter Cities

    return filterName && filterPrice
  })

  return (
    <div className="homePage-container">
      
      
        <section className="homePage__filter">
          <h2 className="filters__title">Filters</h2>
          <FilterPrice
            setFromTo={setFromTo}
          />
          <FilterCities />

        </section>
      <FilterName
        setNameImput={setNameImput}
      />
        <ListHotels hotels={hotelsFiltered} />
      
    </div>
  )
}

export default HomePage