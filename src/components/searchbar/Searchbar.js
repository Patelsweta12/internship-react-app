import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import React from 'react'
import { useTheme } from '../../hooks/useTheme'

// styles
import './Searchbar.css'

export default function Searchbar() {
  const { mode } = useTheme()
  const [term, setTerm] = useState('')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()

    history.push(`/search?q=${term}`)
  }

  return (
    <div className={`searchbar ${mode}`}>
      <form onSubmit={handleSubmit}>
        <input 
          id="search" 
          type="text" 
          placeholder="Search Trips.."
          onChange={(e) => setTerm(e.target.value)} 
          required 
        />
        <center><button className="button" type="submit">Search</button></center>
      </form>
     
    </div>
  )
}
