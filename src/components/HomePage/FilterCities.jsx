import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useDispatch } from "react-redux"
import { getHotelsThunk } from "../../store/states/hotels.state"
import './styles/FilterPrice.css'

const FilterCities = () => {

  const url='http://localhost:8080/cities'
  const [ cities, getCities ] = useFetch(url)

  useEffect(() => {
   getCities()
  }, [])

  const dispatch = useDispatch()

  const handleFilterCities = (id) =>{
  
  let url='http://localhost:8080/hotels'
    if (id !== 'all cities') {
      url=`http://localhost:8080/hotels?cityId=${id}`
    }
    dispatch(getHotelsThunk(url))
  }
  

  return (
    <section className="filter__country">
      <h3 className="price__title">Cities</h3>
      <ul className="price__ul">
        <li onClick={() => handleFilterCities('all cities')} className="price__li">All cities</li>
        {
          cities?.map(city=>(
            <li onClick={() => handleFilterCities(city.id)} key={city.id} className="price__li">{city.name}</li>
          ))
        }
      </ul>
    </section>
  )
}

export default FilterCities
