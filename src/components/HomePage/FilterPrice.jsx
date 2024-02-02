import { useForm } from "react-hook-form"
import './styles/FilterPrice.css'

const FilterPrice = ({setFromTo}) => {

  const {handleSubmit, register, reset} = useForm()

  const submit = data => {
    const obj ={
      from:+data.from,
      to:+data.to === 0 ? Infinity : +data.to
    }
    setFromTo(obj)
  }

  return (
    <div className="container-price">
      <h2 className="price__title1">Filters</h2>
      <h3 className="price__title2">Price</h3>
      <form onSubmit={handleSubmit} className="price__form">
        <label className="price__label">
          <span className="price__span">From:</span>
          <input {...register('from')} type="number" placeholder="Example 100" className="price__input"/>
        </label>
        <label className="price__label">
          <span className="price__span">To:</span>
          <input {...register('to')} type="number" placeholder="Example 200" className="price__input"/>
        </label>
        <button className="price__btn">Apply</button>
      </form>
    </div>
  )
}

export default FilterPrice
