import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useDispatch } from "react-redux"
import { getHotelsThunk } from "../../store/states/hotels.state"
import './styles/FilterPrice.css'

const FilterCities = () => {

  const url='https://hotels-api.academlo.tech/cities'
  const [ cities, getCities ] = useFetch(url)

  useEffect(() => {
   getCities()
  }, [])

  const dispatch = useDispatch()

  const handleFilterCities = (id) =>{
  
  let url='https://hotels-api.academlo.tech/hotels'
    if (id !== 'all cities') {
      url=`https://hotels-api.academlo.tech/hotels?cityId=${id}`
    }
    dispatch(getHotelsThunk(url))
  }
  

  return (
    <div className="container-price">
      <h3 className="price__title3">Cities</h3>
      <ul className="price__ul">
        <li onClick={() => handleFilterCities('all cities')} className="price__li">All cities</li>
        {
          cities?.map(city=>(
            <li onClick={() => handleFilterCities(city.id)} key={city.id} className="price__li">{city.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default FilterCities
