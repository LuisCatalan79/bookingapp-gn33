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
    
    <form onSubmit={handleSubmit} className="price__form">
        <h3 className="price__title">Price</h3>
        <div className="price__field">
          <label className="price__label" >From:</label>
          <input {...register('from')} type="number" placeholder="Example 100" className="price__input"/>
        </div>
        <div className="price__field">
        <label className="price__label" >To:</label>
          <input {...register('to')} type="number" placeholder="Example 200" className="price__input"/>
        </div>
        <button className="price__btn">Apply</button>
      </form>

    
  )
}

export default FilterPrice
