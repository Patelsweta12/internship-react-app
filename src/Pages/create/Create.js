import { useState, useRef, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useHistory } from 'react-router-dom'

// styles
import './Create.css'

export default function Create() {  
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [travelTime, settravelTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)

  const { postData, data } = useFetch('http://localhost:3000/travelPlans', 'POST')
  const history = useHistory()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ title, ingredients, method, travelTime: travelTime + ' minutes' })
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }

  // redirect the user when we get data response
  useEffect(() => {
    if (data) {
      history.push('/')
    }
  }, [data, history])

  return (
    <div className="create">
      <h2 className="page-title">Add a New Trip Plan</h2>
      <form onSubmit={handleSubmit}>

        <label>
          <span>Trip title:</span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Places to visit:</span>
          <div className="ingredients">
            <input 
              type="text" 
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className="btn">add</button>
          </div>
        </label>
        <p>Planned Location: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>

        <label>
          <span>Transportation Method:</span>
          <textarea 
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Number of Days:</span>
          <input 
            type="number" 
            onChange={(e) => settravelTime(e.target.value)}
            value={travelTime}
            required 
          />
        </label>

        <button className="btn">submit</button>
      </form>
    </div>
  )
}
