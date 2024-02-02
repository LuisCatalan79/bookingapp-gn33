import { useRef } from "react"
import './styles/FilterName.css'

const FilterName = ({setNameImput}) => {

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setNameImput(inputSearch.current.value.trim().toLowerCase())
    inputSearch.current.value=''
  }

  return (
    <form onSubmit={handleSubmit} className="form-filterName">
      <input ref={inputSearch} type="text" className="filterName__input" placeholder="Enter search information"/>
      <button className="filterName__btn">Search</button>
    </form>
  )
}

export default FilterName